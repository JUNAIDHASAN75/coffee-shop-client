import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Coffees from "./Coffees/Coffees";


const Popular = () => {
    return (
        <div className="mt-32 popular_bg" >
            <Header title={'Our Popular Products'} subTitle={'--- Sip & Savor ---'}></Header>
            <div className="flex justify-center mt-2">

            <Link to='/addcoffee' className=" border border-black bg-[#E3B577] px-3 py-2 text-white font-semibold">Add Coffee</Link>
            </div>
            <Coffees></Coffees>
        </div>
    );
};

export default Popular;