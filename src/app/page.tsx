import "./HomeComponent/style.css"
import Banner from "./HomeComponent/Banner";
import Columns from "./HomeComponent/Columns";
import NewlyLaunched from "./HomeComponent/NewlyLaunched";
import Video from "./HomeComponent/Video";
import BestSeller from "./HomeComponent/BestSeller";
import Explore from "./HomeComponent/Explore";
import OurProcess from "./HomeComponent/OurProcess";
import Assured from "./HomeComponent/Assured";
import ClientSays from "./HomeComponent/ClientSays";

export default function Home() {
  return (
    <>
      <Banner />
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
