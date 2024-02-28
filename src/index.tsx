import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./GlobalStyle/Theme";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Routers from "./Router/Routers";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

export let persistor = persistStore(store);
const queryClient = new QueryClient();

root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <RouterProvider router={Routers} />
          <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
