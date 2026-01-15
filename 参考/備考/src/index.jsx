import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IconParkSolid } from "./screens/IconParkSolid";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <IconParkSolid />
  </StrictMode>,
);
