import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { initMock } from "./mocks/server";

initMock();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
