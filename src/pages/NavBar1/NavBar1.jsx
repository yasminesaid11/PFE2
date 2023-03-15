import React from 'react'
import  './NavBar1.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import menu from '../../images/menu-btn.png'

const NavBar1 = () => {
    const navigate=useNavigate();

    const TosignIn=()=>{
     navigate("/signin");
    }
    
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("#42424a") : setnavColor("#42424a");
      window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);
 

  
    return (
      <div>
        <div className='body5'>
        <nav className='nav'
          style={{
            backgroundColor: navColor,
            transition: "all 1s"
          }}
        >
          <ul className='ul'>
            <li className='li'><a href="home">Home</a></li>
            <li className='li'><a href="#about">A propos</a></li>
            <li className='li'><a href="#pack">Packs</a></li>
            <li className='li'><a href="#contact">Contact</a></li>
             <button className='click' onClick={TosignIn} > Se connecter </button> 
         </ul>
         <img src={menu} alt='menu-hamburger' className='menu-hamburger'/>

        </nav>
          

    

</div>
</div>
  )
}

export default NavBar1