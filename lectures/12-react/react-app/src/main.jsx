import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import CalculatorPage from "./routes/calculator-page.jsx";
import ErrorPage from "./routes/error-page.jsx";
import HomePage from "./routes/home-page.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/calculator",
        element: <CalculatorPage />,
        errorElement: <ErrorPage />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
