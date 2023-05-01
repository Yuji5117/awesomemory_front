import { RouterProvider } from "react-router-dom";
import { Reset } from "styled-reset";

import { router } from "./routes";

function App() {
  return (
    <>
      <Reset />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
