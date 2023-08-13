import Swal from 'sweetalert2';
import banner1 from '../../assets/images/more/15.jpg'
import logo1 from '../../assets/images/more/logo1.png'
import {  NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'
import Footer from '../Shared/Footer/Footer';

const AddCoffee = () => {
    const handleAddToCoffee = event =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const chef = from.chef.value;
        const price =from.price.value;
        const supplier = from.supplier.value;
        const category = from.category.value;
        const details = from.details.value;
        const photo = from.photo.value;

        const addcoffee = {name: name, chef:chef, price:price, supplier:supplier, category:category, details:details, photo:photo}
        console.log(addcoffee)
        fetch('http://localhost:5000/coffees',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addcoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'coffee added succefffully',
                    showConfirmButton: false,
                    timer: 1500
                  })
        }
        from.reset();
        })

    }
    return (
        <div>
            <div className="hero">
                <img className='md:h-24 h-32 w-full' src={banner1} alt="" />
                <div className=""></div>
                <div className=" text-center text-neutral-content">
                    <div className="w-full flex items-center gap-4">
                        <img className='w-[75px] h-[90px]' src={logo1} />
                        <h1 className=" text-5xl font-semibold">Espresso Emporium</h1>
                    </div>
                </div>
            </div>
            <div className='w-[80%] text-[#594040] mx-auto my-12'>
                <h2 className='text-center text-4xl font-semibold'>Add A Coffee</h2>
                <p className='text-center mt-3'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here</p>
            </div>
            <div className="max-w-screen-xl mx-auto mb-32 px-3">
            <NavLink className='flex gap-2 items-center my-8 text-[#594040] font-semibold ' to='/'><FaArrowLeft></FaArrowLeft> GO TO HOME</NavLink>
                <form onSubmit={handleAddToCoffee}>
                    <div className='md:flex gap-6'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="chef" placeholder="Chef" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex gap-6 my-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="price" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex gap-6 my-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className='form-control w-full mt-6'>
                            <input className='font-semibold py-3 rounded-lg border-2 border-black bg-[#D2B48C]' type="submit" value="Add A Coffee" />
                        </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddCoffee;