import React from 'react'

const Cards = ({img}) => {
  return (
    <div className='flex flex-row justify-between items-center border-2 border-gray w-[100%] px-[10px] py-[10px] gap-[50px] max-[500px]:flex-col'>
        <div className='flex flex-row items-center gap-[15px] max-[500px]:flex-col max-[500px]:text-center'>
            <img src={img} alt="" />
            <h1 className='text-2xl text-oq max-[500px]:text-xl'>Americano rosted gred</h1>
        </div>

        <span className='text-och'>$12:00</span>
    </div>
  )
}

export default Cards