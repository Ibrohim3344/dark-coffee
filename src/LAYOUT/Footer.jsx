import React from 'react'
import logo from '/public/Logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='py-[50px] bg-jigar'>
            <div className='container flex flex-row items-center justify-between max-[1100px]:flex-col max-[1100px]:gap-[30px]'>
                <div className='flex flex-row gap-[40px] items-center max-[770px]:flex-col'>
                    <img src={logo} alt="" />

                    <ul className='flex flex-row gap-[40px] text-oq max-[600px]:flex-col max-[600px]:text-center'>
                        <NavLink to={"/"}><li className='cursor-pointer hover:text-och duration-300'>Home</li></NavLink>
                        <li className='cursor-pointer hover:text-och duration-300'>Rerervation</li>
                        <li className='cursor-pointer hover:text-och duration-300'>Menu</li>
                        <li className='cursor-pointer hover:text-och duration-300'>About</li>
                        <li className='cursor-pointer hover:text-och duration-300'>Pages</li>
                        <li className='cursor-pointer hover:text-och duration-300'>Shop</li>
                        <li className='cursor-pointer hover:text-och duration-300'>Blog</li>
                    </ul>
                </div>

                <form className='flex flex-row items-center px-[20px] focus:outline-none text-gray py-[10px] bg-ochJ rounded-[30px] pr-[15px]'>
                    <input type="email" placeholder='Enter your email' className='px-[15px] bg-transparent border-none focus:outline-none' />
                    <button className='px-[15px] py-[10px] rounded-[50%] bg-och border-2 border-och hover:text-och hover:bg-transparent duration-300'>
                        <i class="fa-solid text-oq fa-arrow-right hover:text-och "></i>
                    </button>
                </form>
            </div>
        </footer>
    )
}

export default Footer