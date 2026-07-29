import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";

// Create a container for Vercel Analytics
const analyticsContainer = document.createElement("div");
analyticsContainer.id = "vercel-analytics-root";
document.body.appendChild(analyticsContainer);

// Render Analytics component
createRoot(analyticsContainer).render(<Analytics />);
