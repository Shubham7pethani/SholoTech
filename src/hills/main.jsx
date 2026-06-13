import React from "react";
import { createRoot } from "react-dom/client";
import { GLSLHills } from "./GLSLHills";

const root = document.getElementById("hills-root");
if (root) {
  createRoot(root).render(<GLSLHills width="100%" height="100%" cameraZ={120} planeSize={256} speed={0.4} />);
}
