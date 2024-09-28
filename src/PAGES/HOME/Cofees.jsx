import React from 'react'
import kasha from '/public/kasha.png'
import Button from '../../Button'

const Cofees = () => {
    return (
        <section className='bg-jigar py-[50px]'>
            <div className='container'>
                <div className='flex flex-col gap-[10px] items-center max-[500px]:justify-center max-[500px]:text-center'>
                    <span className='text-och text-base'>Popular Product</span>
                    <h1 className='text-4xl text-oq max-[500px]:text-2xl'>Coffee popular Product</h1>
                </div>

                <div className='flex flex-row justify-between py-[50px] flex-wrap max-lg:justify-center gap-[30px]'>
                    <div className='bg-blue p-[20px] flex flex-col items-center gap-[20px] w-[350px]'>
                        <img src={kasha} alt="" />
                        <h1 className='text-xl text-oq'>brazil coffee gred</h1>
                        <button className='px-[13px] py-[7px] bg-och border-2 border-och text-oq hover:bg-transparent hover:text-och duration-300 flex flex-row items-center gap-[10px]'>
                            <i class="fa-solid fa-bag-shopping"></i>
                            Add to card
                        </button>
                    </div>

                    <div className='bg-blue p-[20px] flex flex-col items-center gap-[20px] w-[350px]'>
                        <img src={kasha} alt="" />
                        <h1 className='text-xl text-oq'>brazil coffee gred</h1>
                        <span className='text-lg text-oq'>Price - <span className='text-och'> $320.00</span> / <del>$358</del> </span>
                    </div>

                    <div className='bg-blue p-[20px] flex flex-col items-center gap-[20px] w-[350px]'>
                        <img src={kasha} alt="" />
                        <h1 className='text-xl text-oq'>brazil coffee gred</h1>
                        <span className='text-lg text-oq'>Price - <span className='text-och'> $320.00</span> / <del>$358</del> </span>
                    </div>
                </div>


                <div className='flex justify-center items-center'>
                    <Button text={"View all product"} />
                </div>
            </div>
        </section>
    )
}

export default Cofees