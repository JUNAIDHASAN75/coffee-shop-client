import './Footer.css'
import logo from '../../../assets/images/more/logo1.png'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiPhone } from "react-icons/hi2";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-32 foot">
            <div className='max-w-screen-xl mx-auto px-3 pt-32 pb-6'>
                <img className='w-20 h-24 ' src={logo} alt="" />
            </div>
            <div className="md:flex gap-40 max-w-screen-xl mx-auto pb-12 px-3 md:space-y-0 space-y-4">
                <div className='space-y-8  w-full'>
                    <h3 className=" text-[#331A15] text-3xl font-semibold">Espresso Emporium</h3>
                    <p className='text-[#1B1A1A] '>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className='flex gap-5'>
                        <BsFacebook className='text-4xl'></BsFacebook>
                        <BsTwitter className='text-4xl'></BsTwitter>
                        <BsInstagram className='text-4xl'></BsInstagram>
                        <BsLinkedin className='text-4xl'></BsLinkedin>
                    </div>
                    <h4 className='text-[#331A15] text-3xl font-semibold'>Get in Touch</h4>
                    <div className='space-y-3'>
                        <div className='flex gap-6 items-center'>
                            <HiPhone></HiPhone>
                            <p>+88 01533 333 333</p>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <MdMail></MdMail>
                            <p>info@gmail.com</p>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <FaLocationDot></FaLocationDot>
                            <p>72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <h3 className=" text-[#331A15] text-3xl font-semibold">Contact With Us</h3>
                    <form className='space-y-8 mt-8'>
                        <div>
                            <input type="text" placeholder="Name" className="input w-full rounded-none" />
                        </div>
                        <div>
                            <input type="email" placeholder="Your Email" className="input w-full rounded-none" />
                        </div>
                        <div>
                            <textarea className="textarea w-full rounded-none" placeholder="Bio"></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Send Message" className='border-2 border-[#331A15] text-[#331A15] px-3 py-2 rounded-full font-semibold' />
                        </div>
                    </form>
                </div>
            </div>
            <div className='foot_down'>
                <p className='text-white text-center py-4'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;