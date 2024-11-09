import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./Config/QueryClient.js";
createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
  >
    <QueryClientProvider client={client}>
      <App />
      <CssBaseline />
    </QueryClientProvider>
  </BrowserRouter>
);
