import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterStore from "./counterStroe.js";
import { CounterProvider } from "./context/counterContext.js";

const store = new CounterStore();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterProvider value={store}>
      <App />
    </CounterProvider>
  </StrictMode>
);
