import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./routes/errorPage.js";

import Homepage from "./routes/homepage.js";
import { ChakraProvider } from "@chakra-ui/react";
import Elenco_movie from "./routes/elencoMovie.js";
import { moviesLoader } from "./routes/elencoMovie.js";
import DescFilm, { Moviedescr } from "./routes/descFilm.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
    loader: moviesLoader,
    children: [
      {
        path: "/elenco_movie",
        element: <Elenco_movie />,
      },
     
    ],
  },
  {
    path: "/movies/:id",
   element: <DescFilm />,
   loader:Moviedescr,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
