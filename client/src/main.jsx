import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Router from "./route/Router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <Router />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>
);
