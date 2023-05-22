import React, { useState } from 'react';
import './App.css'
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';
import addCoffee from "./assets/images/icons/4.png"

const App = () => {
  const loadedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffees);
  return (
    <div>
      <h1 className='text-6xl font-extrabold text-center my-10'>All Coffees</h1>
        <Link to="/addcoffee">
          <div className='flex gap-3 items-center w-10/12 mx-auto'>
            <img src={addCoffee} alt="" />
            <h3 className='text-4xl font-bold'>Add Coffee</h3>
          </div>
        </Link>
      <div className='grid md:grid-cols-2 gap-4 w-10/12 mx-auto my-10'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
