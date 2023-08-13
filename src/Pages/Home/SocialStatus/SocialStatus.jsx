import img1 from '../../../assets/images/cups/Rectangle 9.png'
import img2 from '../../../assets/images/cups/Rectangle 10.png'
import img3 from '../../../assets/images/cups/Rectangle 11.png'
import img4 from '../../../assets/images/cups/Rectangle 12.png'
import img5 from '../../../assets/images/cups/Rectangle 13.png'
import img6 from '../../../assets/images/cups/Rectangle 14.png'
import img7 from '../../../assets/images/cups/Rectangle 15.png'
import img8 from '../../../assets/images/cups/Rectangle 16.png'

const SocialStatus = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-32'>
            <p className="text-center">Follow Us Now</p>
            <h3 className="text-center font-semibold text-3xl text-[#331A15]">Follow on Instagram</h3>
            <div className='md:grid grid-cols-4 gap-6 items-center my-12 md:space-y-0 space-y-4 px-3'>
                <div className='w-full'>
                    <img className='w-full rounded-2xl' src={img1} alt="" />
                </div>
                <div className='w-full'>
                    <img className='w-full rounded-2xl' src={img2} alt="" />
                </div>
                <div className='w-full'>
                    <img className='w-full rounded-2xl' src={img3} alt="" />
                </div>
                <div className='w-full'>
                    <img className='w-full rounded-2xl' src={img4} alt="" />
                </div>
                <div className='w-full'>
                    <img className='w-full rounded-2xl' src={img5} alt="" />
                </div>
                <div className='w-full'>
                    <img className='w-full rounded-2xl' src={img6} alt="" />
                </div>
                <div className='w-full'>
                    <img className='w-full rounded-2xl' src={img7} alt="" />
                </div>
                <div className='w-full'>
                    <img className='w-full rounded-2xl' src={img8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SocialStatus;