import React from 'react'
import Button from '../../Button'

const Hero = () => {
    return (
        <section className='py-[180px] bg-[url("/public/hero.png")] bg-cover max-lg:py-[120px]'>
            <div className='container flex flex-row items-end justify-between max-lg:flex-col max-lg:items-center max-lg:gap-[40px]'>
                <div className='flex flex-col gap-[40px] items-start w-[40%] max-lg:w-[100%] max-lg:text-center max-lg:items-center'>
                    <h1 className='text-6xl text-oq max-[540px]:text-4xl max-[370px]:text-2xl'>Enjoy Your
                        Morning Coffee.</h1>
                    <p className='text-gray'>The coofee is brewed by fist roasting the green coffee beans over hot coals in brazier. given to Opportunity</p>
                    <Button text={"Test Coffee"} />
                </div>

                <div className='flex flex-col items-center gap-[20px]'>
                    <i class="fa-regular fa-circle-play text-6xl text-oq cursor-pointer hover:text-och duration-300"></i>
                    <span className='text-xl text-oq'> Play video </span>
                </div>
            </div>
        </section>
    )
}

export default Hero