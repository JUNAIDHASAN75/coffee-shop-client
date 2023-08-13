import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import AddCoffee from './Pages/AddCoffee/AddCoffee';
import UpdateCoffee from './Pages/UpdateCoffee/UpdateCoffee';
import CoffeeCard from './Pages/CoffeeCard/CoffeeCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // loader:()=>fetch('http://localhost:5000/coffeess'),
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/coffees')
      },
      {
        path:'addcoffee',
        element:<AddCoffee></AddCoffee>,
       
      },
      {
        path:'updatecoffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        // loader:()=>fetch('http://localhost:5000/coffeess')
        loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
        
        // loader:({params})=>fetch('http://localhost:5000/coffeess')
      },
      {
        path:'coffeeCard/:id',
        element:<CoffeeCard></CoffeeCard>,
        loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
