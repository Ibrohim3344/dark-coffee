import React from 'react'

const Imgs = ({ img, sp1, sp2 }) => {
    return (
        <div className='flex flex-col items-start gap-[20px]'>
            <span className='text-och text-xl'>{sp1} <span className='text-oq'>{sp2}</span></span>
            <img src={img} alt="" />
        </div>
    )
}

export default Imgs