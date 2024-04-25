import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproduct">Add Car</NavLink></li>
    </>
    return (
        // absolute left-0 right-0 top-0 z-50
        <div className="navMenu  py-2">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto  navbar">
                <div data-aos="fade-right" data-aos-duration="1300" className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content gap-5 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost text-xl uppercase Sitelogo">Car<span className='text-red-600'>X</span></NavLink>
                </div>
                <div data-aos="fade-down" data-aos-duration="1300" className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 felx">
                        {links}
                    </ul>
                </div>
                <div data-aos="fade-left" data-aos-duration="1300" className="navbar-end z-[1000]">
                    <div className="flex gap-4">
                        <NavLink className="btn btn-outline font-semibold text-base" to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;