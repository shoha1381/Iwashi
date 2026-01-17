import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IpadPro } from "./screens/IpadPro";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <IpadPro />
  </StrictMode>,
);
