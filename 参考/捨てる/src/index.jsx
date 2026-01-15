import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EntypoTrash } from "./screens/EntypoTrash";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <EntypoTrash />
  </StrictMode>,
);
