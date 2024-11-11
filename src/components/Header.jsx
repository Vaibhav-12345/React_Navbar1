import React, { act, useEffect, useState } from 'react'
import { TbMenuDeep } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import './Header.css'
const Header = () => {

    const [toggle, setToggle] = useState(true)

    function toggler() {
        setToggle(!toggle)
    }



    return (
        <nav className='w-full flex items-center justify-between  p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50'>
            {/* logo part  */}
            <div className="log w-12 ">
                <img src="https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png" alt="" />
            </div>

            {/* nav-link part  */}
            <ul className='md:flex md:gap-5 md:items-center md:text-xl' id={toggle ? null : 'active'} >
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Service</a></li>
            </ul>

            <div className="icon text-xl md:hidden" onClick={toggler}>
                {toggle ? <TbMenuDeep className='Hamburger ' /> : <RxCross1 className='cross ' />}
                {/* <TbMenuDeep  className='Hamburger '/>
             <RxCross1  className='cross hidden'/> */}
            </div>
        </nav>

    );
}

export default Header