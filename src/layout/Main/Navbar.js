import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className='grid grid-cols-2 h-14 bg-purple-300 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <div className="flex items-center">
        <Link to="/" className="text-purple-900 font-bold ml-3">Tutorial Point</Link>
      </div>
      <ul className='h-full flex justify-end items-center gap-10 font-semibold text-purple-900'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li className="mr-5">
          <Link to='/history'>Reading History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
