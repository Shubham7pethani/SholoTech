import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FloatingIcons from "./FloatingIcons";

const root = document.getElementById("floaticons-root");
if (root) {
  createRoot(root).render(<FloatingIcons />);
}
