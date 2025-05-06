import "./HomeComponent/style.css"
import Banner from "./HomeComponent/Banner";
import Filter from "./HomeComponent/Filter";
import Columns from "./HomeComponent/Columns";
import NewlyLaunched from "./HomeComponent/NewlyLaunched";
import Video from "./HomeComponent/Video";
import BestSeller from "./HomeComponent/BestSeller";
import Explore from "./HomeComponent/Explore";
import OurProcess from "./HomeComponent/OurProcess";
import Assured from "./HomeComponent/Assured";
import ClientSays from "./HomeComponent/ClientSays";
import Popupcur from "./HomeComponent/Popupcur";

export default function Home() {
  return (
    <>
      <Popupcur />
      <Banner />
      <Filter />
      <Columns />
      <NewlyLaunched />
      <Video />
      <BestSeller />
      <Explore />
      <OurProcess />
      <Assured />
      <ClientSays />
    </>
  );
}
