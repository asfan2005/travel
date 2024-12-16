import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Afzallig,
  Footer,
  Footer2,
  Home,
  Mashhur,
  MashhurSayohat,
  Sharq,
  SharxPage,
  Tavsiya,
  Zardoslar,
} from "../index";

function HomePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Home/>
      <Mashhur />
      <MashhurSayohat />
      <Sharq />
      <Afzallig />
      <Zardoslar />
      <SharxPage />
    </div>
  );
}

export default HomePage;
