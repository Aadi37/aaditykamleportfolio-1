import aadi from '../aadi.svg'
import {Link } from "react-router-dom";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import discord from "../images/discord.png"
const Footer = () => {
    return <>
    <div className='footerSection bg-white py-8'>
        <div className='container mx-auto w-4/5  flex  justify-between'>
            <div className='ColOne w-1/4'>
                <div className='FooterAbout'>
                   <div className='logo'>
                        <img src={aadi}   style={{ height: '70px', width: '70px' }} alt="aadi"/>
                    </div>
                    <div className='AboutDiscrption mt-5'>
                     <p className='text-black'>passionate Frontend Developer with over 7 years of professional experience in crafting responsive, high-performing, and visually engaging websites.</p>
                    </div>
                </div>
            </div>
            <div className='ColTwo w-1/5'>
                <div className='footerInfo'>
                 <h5 className='text-black'>Information</h5>
                 <div className='footerNav mt-5'>
                  <Link to="/" className="text-black font-medium block">
                            Home
                        </Link>
                        <Link to="/About" className="text-black font-medium block">
                            About
                        </Link>
                        <Link to="/Services" className="text-black font-medium block">
                            Services
                        </Link>
                        <Link to="/Contact" className="text-black font-medium block">
                            Contact
                        </Link>
                 </div>
                </div>
            </div>
            <div className='ColThree w-1/5'>
                <div className='footerServices'>
                 <h5 className='text-black'>Services</h5>
                 <div className='footerNav mt-5'>
                  <Link to="/Services" className="text-black font-medium block">
                        Web Solutions
                        </Link>
                        <Link to="/Services" className="text-black font-medium block">
                        Mobile Solutions
                        </Link>
                        <Link to="/Services" className="text-black font-medium block">
                         E-commerce Solutions 
                        </Link>
                        <Link to="/Services" className="text-black font-medium block">
                            Web & Graphics Design
                        </Link>
                 </div>
                </div>
            </div>
            <div className='ColFour w-1/4'>
                <div className='footerContact'> 
                     <h5 className='text-black'>Contact</h5>
                     <ul className='flex gap-5 mt-5'>
                        <li>
                            <a href="www.linkedin.com/in/aaditya-kamle-43803067" target="_blank"><img src={linkedin} width={32}/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/kamle7024/" target="_blank"><img src={instagram} width={32}/></a>
                        </li>
                        <li>
                            <a href="https://discord.com/users/aadi_42989" target="_blank"><img src={discord} width={32}/></a>
                        </li>
                     </ul>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Footer;