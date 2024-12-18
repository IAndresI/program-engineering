import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { HomeLayout } from "./components/layouts/HomeLayout.tsx";
import { AuthLayout } from "./components/layouts/AuthLayout.tsx";
import { AdminLayout } from "./components/layouts/AdminLayout.tsx";
import { AuthenticationPage } from "./components/pages/AuthenticationPage.tsx";
import { AdminPage } from "./components/pages/AdminPage.tsx";
import { HomePage } from "./components/pages/HomePage.tsx";
import { ThemeProvider } from "./components/layouts/ThemeProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "authentication",
        element: <AuthenticationPage />,
      },
      {
        element: <AdminLayout />,
        path: "admin/*",
        children: [
          {
            path: "*",
            element: <AdminPage />,
          },
        ],
      },
      {
        element: <HomeLayout />,
        path: "*",
        children: [
          {
            path: "*",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <RouterProvider router={router} />
        </ClerkProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
