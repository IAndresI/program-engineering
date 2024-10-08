import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthenticationPage } from "./components/pages/AuthenticationPage.tsx";
import { Layout } from "./components/pages/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/authentication",
    element: <AuthenticationPage />,
  },
  {
    element: <Layout />,
    path: "*",
    children: [
      {
        path: "*",
        element: <App />,
      },
    ],
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
);
