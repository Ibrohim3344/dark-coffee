import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/public/Logo.png'

const Header = () => {
    return (
        <header className='bg-ochJ py-[20px]'>
            <div className='container flex flex-row justify-between items-center'>
                <ul className='flex flex-row gap-[40px] text-oq max-[1025px]:hidden'>
                    <NavLink to={"/"}><li>Home</li></NavLink>
                    <li className='cursor-pointer hover:text-och duration-300'>About</li>
                    <li className='cursor-pointer hover:text-och duration-300'>Menu</li>
                    <li className='cursor-pointer hover:text-och duration-300'>Reservation</li>
                </ul>

                <img src={logo} alt="" />

                <div className='flex flex-row gap-[40px] items-center'>
                    <ul className='flex flex-row gap-[40px] text-oq max-[1025px]:hidden'>
                        <li className='cursor-pointer hover:text-och duration-300'>Pages</li>
                        <li className='cursor-pointer hover:text-och duration-300'>Shop</li>
                        <li className='cursor-pointer hover:text-och duration-300'>Contact</li>
                    </ul>

                    <i class="fa-solid fa-magnifying-glass text-xl text-oq cursor-pointer hover:text-och duration-300"></i>
                    <i class="fa-solid fa-bag-shopping text-xl text-oq cursor-pointer hover:text-och duration-300"></i>
                    <i class="fa-solid fa-bars-staggered hidden max-[1025px]:flex text-oq text-xl"></i>

                </div>
            </div>
        </header>
    )
}

export default Header