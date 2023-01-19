import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import App from "./App";
import PastDays from "./components/PastDays";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/entries",
    element: <PastDays />
  },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
