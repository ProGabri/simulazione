import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./routes/error-page.jsx";

import Homepage from "./routes/homepage.js";
import { ChakraProvider } from "@chakra-ui/react";
import Elenco_movie from "./routes/elenco_movie.js";
import { moviesLoader } from "./routes/elenco_movie.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
    children: [
      {
        loader: moviesLoader,
        path: "/elenco_movie",
        element: <Elenco_movie />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
