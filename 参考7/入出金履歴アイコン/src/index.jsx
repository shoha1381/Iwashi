import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StreamlineBlock } from "./screens/StreamlineBlock";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <StreamlineBlock />
  </StrictMode>,
);
