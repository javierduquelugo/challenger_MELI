import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/themaConfig";

import store from "./redux/store";
import { AppRouter } from "./routers/AppRouter";

// Redux
import { Provider } from "react-redux";

function App() {
  return (
    <>
      {/* Themas de Material UI */}
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
