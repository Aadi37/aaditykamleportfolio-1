import aadi from '../aadi.svg'
import Home from "../pages/Home";
import About from "../pages/About";
import {Link } from "react-router-dom";
import { useState } from 'react';

const Navigation = () => {
      const [menuOpen, setMenuOpen] = useState(false);
      const mobileClick = () => {
        setMenuOpen((prevState)=>!prevState)
        console.log(menuOpen)
      }
    return (
        <div className='Header w-1/2 mx-auto shadow-2xl rounded-lg py-2.5 my-7
 bg-white'>
            <div className='px-4 flex items-center justify-between'>
                <div className='logo'>
                <img src={aadi}   style={{ height: '70px', width: '70px' }} alt="aadi"/>
                </div>
                <div className='navigation'>
                    <nav className="flex gap-4">
                        <Link to="/" className="text-black font-medium mr-3.5">
                            Home
                        </Link>
                        <Link to="/About" className="text-black font-medium mr-3.5">
                            About
                        </Link>
                        {/* <Link to="/Services" className="text-black font-medium mr-2.5">
                            Services
                        </Link> */}
                          <Link to="/Portfolio" className="text-black font-medium mr-3.5">
                            Portfolio
                        </Link>
                        <Link to="/Contact" className="text-black font-medium mr-3.5">
                            Contact
                        </Link>
                    </nav>
                {/* <div className='Mobile_menu'>
                    <button onClick={mobileClick}>
                        toggle button
                    </button>
                    {menuOpen? 
                     <div className='mobileNavigation'>
                                                <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <Link to="/About" className="text-blue-600 hover:underline">
                            About
                        </Link>
                        <Link to="/Services" className="text-blue-600 hover:underline">
                            Services
                        </Link>
                        <Link to="/Contact" className="text-blue-600 hover:underline">
                            Contact
                        </Link>
                     </div>
                    : null}
                </div> */}
                </div>
            </div>
        </div>
        
    )
}
export default Navigation ;