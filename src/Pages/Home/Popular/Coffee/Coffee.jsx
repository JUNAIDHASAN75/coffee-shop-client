
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const Coffee = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, photo, chef, price } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete', _id)
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: "delete"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                        console.log(data)
                    })

            }
        })
    }
    return (
        <div>
            <div className='flex items-center justify-evenly gap-6 bg-[#F5F4F1] rounded-lg box-border w-full px-12 py-3'>
                <div className='flex-1 flex items-center'>

                    <div><img src={photo} alt="" /></div>
                    <div className='space-y-3'>
                        <p><span className='font-semibold'>Name</span>: <span>{name}</span></p>
                        <p><span className='font-semibold'>Chef</span>: <span>{chef}</span></p>
                        <p><span className='font-semibold'>Price</span>: <span>{price}</span> Taka</p>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to={`/coffeeCard/${_id}`}>
                            <button className='text-xl bg-[#D2B48C] p-3 text-white rounded-lg'><AiOutlineEye></AiOutlineEye></button>
                        </Link>
                        {/* Open the modal using ID.showModal() method */}

                    </div>
                    <div>
                        <Link to={`/updatecoffee/${_id}`}>
                            <button className='text-xl bg-[#3C393B] p-3 text-white rounded-lg my-4'><BiPencil></BiPencil></button>
                        </Link>
                    </div>
                    <div>

                        <button onClick={() => handleDelete(_id)} className='text-xl bg-[#EA4744] p-3 text-white rounded-lg'><AiFillDelete></AiFillDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;