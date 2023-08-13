import { useState } from "react";
import Coffee from "../Coffee/Coffee";
import { useLoaderData } from "react-router-dom";


const Coffees = () => {
    
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)

    console.log(coffees)
    return (
        <div className="max-w-screen-xl mx-auto my-14">
            <div className="md:grid grid-cols-2  gap-6 px-3 md:space-y-0 space-y-4">
                {
                    coffees.map(coffee=><Coffee
                    key={coffee._id}
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></Coffee>)
                }
            </div>
        </div>
    );
};

export default Coffees;