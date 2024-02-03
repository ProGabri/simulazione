import {  Outlet } from "react-router-dom";

import { Header } from "./header";


import Elenco_movie from "./elencoMovie";



export default function Homepage() {
  return (
    <>
      <Header />
       <Elenco_movie />
      
      
      <Outlet />
    </>
  );
}
