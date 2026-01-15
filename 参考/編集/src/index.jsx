import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LetsIconsEdit } from "./screens/LetsIconsEdit";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <LetsIconsEdit />
  </StrictMode>,
);
