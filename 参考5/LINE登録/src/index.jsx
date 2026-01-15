import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Line } from "./screens/Line";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Line />
  </StrictMode>,
);
