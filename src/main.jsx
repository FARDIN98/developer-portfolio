import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Determine if we're in production mode
const isProduction = import.meta.env.PROD;

// Create a root element
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// In production, avoid StrictMode which causes double-rendering
root.render(
  isProduction ? (
    <App />
  ) : (
    <StrictMode>
      <App />
    </StrictMode>
  )
);
