import { Link, Outlet } from "react-router-dom";

import { Header } from "./header";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { ListaMovie } from "../listaMovie/listaMovie";
export default function Homepage() {
  return (
    <>
      <Header />

      <ListaMovie listmovie={[]} />
      <Link to="/elenco_movie">
        <Image
          height={50} // Set your preferred height
          width={50} // Set your preferred width
          src="https://t4.ftcdn.net/jpg/01/25/57/91/360_F_125579108_cKIL8gnBgRKqcLeyG03llZNaeFOjoCLH.jpg"
          alt="Homepage"
        />
      </Link>
      <Outlet />
    </>
  );
}
