import React from 'react';
import { IconContext } from "react-icons";
import { BsPencilFill } from "react-icons/bs"
import { AiFillDelete, AiFillEye } from "react-icons/ai"
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, category, supplier, taste, chef, details, photo } = coffee;

    const handleDelete = _id => {
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
                fetch(`https://coffee-store-espresso-emporium-server.vercel.app/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const newCoffees = coffees.filter(cafe => cafe._id !== _id);
                            setCoffees(newCoffees);
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="card card-side bg-[#F5F4F1] shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title text-3xl font-bold mb-3">{name}</h2>
                        <p><span className='font-bold'>Details: </span>{details}</p>
                        <p><span className='font-bold'>Category: </span>{category}</p>
                        <p><span className='font-bold'>Supplier: </span>{supplier}</p>
                        <p><span className='font-bold'>Taste: </span>{taste}</p>
                        <p><span className='font-bold'>Chef: </span>{chef}</p>
                    </div>
                    <div className='flex gap-1'>
                        <div className='border-2 p-2 bg-[#D2B48C] rounded-lg'>
                            <IconContext.Provider value={{ color: "white", size: "1.3rem" }}>
                                <AiFillEye></AiFillEye>
                            </IconContext.Provider>
                        </div>
                        <div className='border-2 p-2 bg-[#3C393B] rounded-lg'>
                            <Link to={`/updateCoffee/${_id}`}>
                                <IconContext.Provider value={{ color: "white", size: "1.3rem" }}>
                                    <BsPencilFill></BsPencilFill>
                                </IconContext.Provider>
                            </Link>
                        </div>
                        <div onClick={() => handleDelete(_id)} className='border-2 p-2 bg-[#EA4744] rounded-lg'>
                            <IconContext.Provider value={{ color: "white", size: "1.3rem" }}>
                                <AiFillDelete></AiFillDelete>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;