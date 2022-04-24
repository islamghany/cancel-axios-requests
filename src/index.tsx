import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "./styles.css";
import { ToastContainer } from "react-toastify";

import App from "./App";
import "react-toastify/dist/ReactToastify.min.css";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <ToastContainer />
    <App />
  </StrictMode>
);
