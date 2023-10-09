import React, { useState, useEffect, createContext } from "react";

type MyVariant = {
  [key: string]: string | number | undefined;
};

interface CursorVariants extends Record<string, MyVariant> {
  default: MyVariant;
  text: MyVariant;
}

interface CursorContextValue {
  cursorVariants?: CursorVariants;
  cursorBG?: string;
  mouseEnterHandler?: () => void;
  mouseLeaveHandler?: () => void;
}

export const CursorContext = createContext<CursorContextValue>({});

const CursorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBG, setCursorBG] = useState("default");

  const mobileViewportIsActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = (e: MouseEvent) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", move);
      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  });

  const cursorVariants: CursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255,1)",
    },
  };

  const mouseEnterHandler = () => setCursorBG("text");
  const mouseLeaveHandler = () => setCursorBG("default");

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
