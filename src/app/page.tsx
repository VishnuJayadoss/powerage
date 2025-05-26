import "./(pages)/HomeComponent/style.css"
import Banner from "./(pages)/HomeComponent/Banner";
import Filter from "./(pages)/HomeComponent/Banner";
import Columns from "./(pages)/HomeComponent/Banner"
import NewlyLaunched from "./(pages)/HomeComponent/Banner";
import Video from "./(pages)/HomeComponent/Banner";
import BestSeller from "./(pages)/HomeComponent/Banner";
import Explore from "./(pages)/HomeComponent/Banner";
import OurProcess from "./(pages)/HomeComponent/Banner";
import Assured from "./(pages)/HomeComponent/Banner";
import ClientSays from "./(pages)/HomeComponent/Banner";
import Popupcur from "./(pages)/HomeComponent/Banner";

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
