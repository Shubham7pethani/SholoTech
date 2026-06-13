import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Features from "./Features";

const root = document.getElementById("features8-root");
if (root) {
  createRoot(root).render(<Features />);
}
