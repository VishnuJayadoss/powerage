import "./(pages)/HomeComponent/style.css"
import Banner from "./(pages)/HomeComponent/Banner";
import Filter from "./(pages)/HomeComponent/Filter";
import Columns from "./(pages)/HomeComponent/Columns";
import NewlyLaunched from "./(pages)/HomeComponent/NewlyLaunched";
import Video from "./(pages)/HomeComponent/Video";
import BestSeller from "./(pages)/HomeComponent/BestSeller";
import Explore from "./(pages)/HomeComponent/Explore";
import OurProcess from "./(pages)/HomeComponent/OurProcess";
import Assured from "./(pages)/HomeComponent/Assured";
import ClientSays from "./(pages)/HomeComponent/ClientSays";
import Popupcur from "./(pages)/HomeComponent/Popupcur";

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
