import React from 'react';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const category = form.category.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const chef = form.chef.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, category, supplier, taste, chef, details, photo };

        fetch("https://coffee-store-espresso-emporium-server.vercel.app/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }
    return (
        <div>
            {/* back to home div */}
            <Link to="/">
                <div className='w-9/12 mx-auto my-10 flex items-center gap-3'>
                    <IconContext.Provider value={{ size: "2em" }}>
                        <HiOutlineArrowNarrowLeft></HiOutlineArrowNarrowLeft>
                    </IconContext.Provider>
                    <h3 className='text-2xl font-bold'>Back to home</h3>
                </div>
            </Link>

            {/* form div */}
            <div className='w-9/12 p border-2 p-16 mt-10 mb-20 mx-auto bg-[#F4F3F0] rounded'>
                <div className='mb-10 w-9/12 mx-auto'>
                    <h2 className='text-3xl font-extrabold text-center mb-5 text-[#374151]'>Add New Coffee</h2>
                    <p className='text-center font-light'>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>
                <form onSubmit={handleAddCoffee}>
                    <div className='flex gap-5 mx-auto'>
                        <div className='flex-auto'>
                            <div className="form-control gap-2 mb-3 w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Name:</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control gap-2 mb-3 w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Supplier:</span>
                                </label>
                                <input type="text" name='supplier' placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control gap-2 mb-3 w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Category:</span>
                                </label>
                                <input type="text" name='category' placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className='flex-auto'>
                            <div className="form-control gap-2 mb-3 w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Chef:</span>
                                </label>
                                <input type="text" name='chef' placeholder="Enter Coffee Chef" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control gap-2 mb-3 w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Taste:</span>
                                </label>
                                <input type="text" name='taste' placeholder="Enter Coffee Taste" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control gap-2 mb-3 w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Details:</span>
                                </label>
                                <input type="text" name='details' placeholder="Enter Coffee Details" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="form-control gap-2 mb-5 w-full">
                        <label className="label">
                            <span className="label-text font-bold">Photo:</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter Photo URL" className="input input-bordered w-full" />
                    </div>
                    <input className="btn bg-[#D2B48C] btn-block font-extrabold text-[#331A15] hover:bg-[#2b1b05] hover:text-white" type="submit" value="Add Coffee" />
                </form>
            </div>

        </div>
    );
};

export default AddCoffee;