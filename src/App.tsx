import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import GlobalStyles from "./lib/styled/global";
import { theme } from "./lib/styled/them";
import { router } from "./routes";

function App() {
  return (
    <>
      <Reset />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
