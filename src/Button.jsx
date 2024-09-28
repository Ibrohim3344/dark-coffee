import React from 'react'

const Button = ({text}) => {
  return (
    <button className='px-[17px] py-[10px] text-oq bg-och border-2 border-och hover:bg-transparent hover:text-och duration-300'>
        {text}
    </button>
  )
}

export default Button