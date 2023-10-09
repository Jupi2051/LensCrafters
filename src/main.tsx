import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// fontawesome
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

// import cursor context
import CursorProvider from "./context/CursorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CursorProvider>
    <App />
  </CursorProvider>
);
