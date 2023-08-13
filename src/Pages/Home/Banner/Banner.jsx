import banner1 from '../../../assets/images/more/15.jpg'
import logo1 from '../../../assets/images/more/logo1.png'
import banner2 from '../../../assets/images/more/3.png'
const Banner = () => {
    return (
        <div>
            <div>
                <div className="hero">
                    <img className='md:h-24 h-32  w-full' src={banner1} alt="" />
                    <div className=""></div>
                    <div className=" text-center text-neutral-content">
                        <div className="w-full flex items-center gap-4">
                            <img className='w-[75px] h-[90px]' src={logo1} alt="" />
                            <h1 className=" text-5xl font-semibold">Espresso Emporium</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero " >
                    <img className='md:h-[100vh] h-[350px] w-full' src={banner2} alt="" />
                    {/* <div className=""></div> */}
                    <div className=" text-neutral-content">
                        <div className="md:flex">
                            <div className='w-3/4 '>
                                <h1>
                                
                                </h1>
                            </div>
                            <div className='w-full px-2'>
                                <h1 className="mb-5 text-4xl text-left">Would you like a Cup of Delicious Coffee?</h1>
                                <p className="mb-5 text-left">It`s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                                <button className="border border-black bg-[#E3B577] px-4 py-3 text-black font-semibold">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;