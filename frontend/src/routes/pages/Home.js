import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VericalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct/>

      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpods"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

      <VericalCardProduct category={"mobiles"} heading={"Mobile's"}/>
      <VericalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VericalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VericalCardProduct category={"camera"} heading={"Camara & And Photography"}/>
      <VericalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VericalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VericalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VericalCardProduct category={"trimmers"} heading={"Trimmers"}/>

    </div>
  );
};
export default Home;
