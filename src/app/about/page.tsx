import './Components/style.css'
import Banner from "./Components/Banner";
import Aboutdetail from './Components/Aboutdetail';
import Development from './Components/Development';
import RawMaterial from './Components/RawMaterial';

export default function About() {
    return (
        <>
            <Banner />
            <Aboutdetail />
            <Development />
            <RawMaterial />
        </>
    );
}