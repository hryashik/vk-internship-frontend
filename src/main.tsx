import { createRoot } from "react-dom/client";
import App from "./App";
import "./app.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <div className="app-container">
      <App />
   </div>
);
