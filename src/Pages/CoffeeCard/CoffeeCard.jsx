import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import banner1 from '../../assets/images/more/15.jpg'
import logo1 from '../../assets/images/more/logo1.png'
import { FaArrowLeft } from 'react-icons/fa'

const CoffeeCard = () => {
    const coffee = useLoaderData();
    const { name, price, supplier, chef, photo, taste, category } = coffee;
    console.log(coffee)
    return (
        <div>
            <div className="hero">
                <img className='md:h-24 h-32 w-full' src={banner1} alt="" />
                <div className=""></div>
                <div className=" text-center text-neutral-content">
                    <div className="w-full flex items-center gap-4">
                        <img className='w-[75px] h-[90px]' src={logo1} alt="" />
                        <h1 className=" text-5xl font-semibold">Espresso Emporium</h1>
                    </div>
                </div>
            </div>
            {/* main coffeeCard content */}
            <div className="coffeeCard"> 
            <div  className="max-w-screen-xl mx-auto py-12 px-3 ">

            <Link to='/' className="font-semibold text-[#374151] flex items-center gap-3"><FaArrowLeft></FaArrowLeft> Back To Home</Link>
            </div>

                <div className="md:flex items-center gap-20 max-w-screen-xl mx-auto bg-[#F4F3F0]">
                    <div className="w-full ">
                        <img className="md:w-3/4 w-full px-3 mx-auto" src={photo} alt="" />
                    </div>
                    <div className="w-full space-y-4 text-left px-3">
                        <p className="font-semibold">Name : <span className="font-normal">{name}</span></p>
                        <p className="font-semibold">Chef : <span className="font-normal">{chef}</span></p>
                        <p className="font-semibold">Price : <span className="font-normal">{price}</span></p>
                        <p className="font-semibold">Category : <span className="font-normal">{category}</span></p>
                        <p className="font-semibold">Supplier : <span className="font-normal">{supplier}</span></p>
                        <p className="font-semibold">Taste : <span className="font-normal">{taste}</span></p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CoffeeCard;