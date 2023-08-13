import img1 from '../../../assets/images/icons/1.png'
import img2 from '../../../assets/images/icons/2.png'
import img3 from '../../../assets/images/icons/3.png'
import img4 from '../../../assets/images/icons/4.png'

const Section = () => {
    return (
        <div className='bg-[#ECEAE3] py-8  px-3'> 
            <div className='md:flex gap-8 max-w-screen-xl mx-auto md:space-y-0 space-y-8'>
                <div className='text-left space-y-2 '>
                    <img src={img1} alt="" />
                    <h3 className='text-xl font-semibold'>Awesome Aroma</h3>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='text-left space-y-2 '>
                    <img src={img2} alt="" />
                    <h3 className='text-xl font-semibold'>High Quality</h3>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='text-left space-y-2 '>
                    <img src={img3} alt="" />
                    <h3 className='text-xl font-semibold'>Pure Grades</h3>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='text-left space-y-2 '>
                    <img src={img4} alt="" />
                    <h3 className='text-xl font-semibold'>Proper Roasting</h3>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Section;