import React from 'react'
import Button from '../../Button'

const Location = () => {
    return (
        <section className='bg-jigar'>
            <div className='container flex flex-row items-center max-lg:flex-col'>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11991.904339025807!2d69.22814145!3d41.28762495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1721125149191!5m2!1sru!2s" width="700px" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='max-lg:hidden'></iframe>
                </div>

                <div className='bg-ochJ px-[20px] flex flex-col items-center gap-[20px] justify-center w-[100%] py-[25px] max-[410px]:text-center'>
                    <span className='text-och'>Reservation</span>
                    <h1 className='text-4xl text-oq max-[410px]:text-2xl'>Booking a table</h1>
                    <div className='bg-jigar w-[100%] py-[20px] px-[20px]'>
                        <span className='text-oq'>4 person</span>
                    </div>

                    <div className='bg-jigar w-[100%] py-[20px] px-[20px]'>
                        <span className='text-oq'>12.25, 2020</span>
                    </div>

                    <div className='bg-jigar w-[100%] py-[20px] px-[20px]'>
                        <span className='text-oq'>11:00 AM</span>
                    </div>

                    <Button text={"BOOK S TABLE"}/>
                </div>
            </div>
        </section>
    )
}

export default Location