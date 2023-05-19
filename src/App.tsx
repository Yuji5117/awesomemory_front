import { RouterProvider } from "react-router-dom";
import { Reset } from "styled-reset";

import GlobalStyles from "./lib/styled/global";
import { AppProvider } from "./providers/app";
import { router } from "./routes";

function App() {
  return (
    <>
      <AppProvider>
        <Reset />
        <GlobalStyles />
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
}

export default App;
