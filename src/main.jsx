import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterStore from "./counterStroe.js";

const store = new CounterStore();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App myCount={store} />
  </StrictMode>
);
