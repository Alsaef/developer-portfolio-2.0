// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-[#fef1e2]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className=' font-semibold text-2xl'><Link to='/'>Home</Link></li>
                            <li className=' font-semibold text-2xl'><Link to='/projects'>Projects</Link></li>
                            <li className=' font-semibold text-2xl'><Link to='/explorprojects'>Explor Projects</Link></li>
                            <li className=' font-semibold text-2xl'><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl">ASR</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className=' font-semibold '><Link to='/'>Home</Link></li>
                        <li className=' font-semibold '><Link to='/projects'>Projects</Link></li>
                        <li className=' font-semibold '><Link to='/explorprojects'>Explor Projects</Link></li>
                        <li className=' font-semibold '><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;