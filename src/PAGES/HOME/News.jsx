import React from 'react'
import new1 from '/public/new1.png'
import new2 from '/public/new2.png'
import new3 from '/public/new3.png'


const News = () => {
    return (
        <section className='bg-jigar py-[100px]'>
            <div className='container'>
                <div className='flex flex-col items-center text-center py-[40px] justify-center'>
                    <span className='text-och'>Testimonial</span>
                    <h1 className='text-4xl text-oq'>Our latest news</h1>
                </div>

                <div className='flex flex-row justify-between items-center gap-[30px] flex-wrap'>
                    <div className='flex flex-col items-center'>
                        <img src={new1} alt="" />

                        <div className='w-[100%] px-[10px] flex justify-between flex-col gap-[30px] bg-ochJ py-[20px]'>
                            <span className='text-oq flex flex-row'><span className='text-och'>By:</span> rasaline</span>
                            <span className='text-oq'>23.01.2021</span>

                            <div className='flex flex-col items-start '>
                                <h1 className='text-oq text-xl'>Ideal cocktails from barmen....</h1>

                                <button className='border-none bg-transparent text-och hover:text-oq duration-300'>Read more</button>
                            </div>

                        </div>
                    </div>


                    <div className='flex flex-col items-center'>
                        <img src={new2} alt="" />

                        <div className='w-[100%] px-[10px] flex justify-between flex-col gap-[30px] bg-ochJ py-[20px]'>
                            <span className='text-oq flex flex-row'><span className='text-och'>By:</span> rasaline</span>
                            <span className='text-oq'>23.01.2021</span>

                            <div className='flex flex-col items-start '>
                                <h1 className='text-oq text-xl'>Ideal cocktails from barmen....</h1>

                                <button className='border-none bg-transparent text-och hover:text-oq duration-300'>Read more</button>
                            </div>

                        </div>
                    </div>


                    <div className='flex flex-col items-center'>
                        <img src={new3} alt="" />

                        <div className='w-[100%] px-[10px] flex justify-between flex-col gap-[30px] bg-ochJ py-[20px]'>
                            <span className='text-oq flex flex-row'><span className='text-och'>By:</span> rasaline</span>
                            <span className='text-oq'>23.01.2021</span>

                            <div className='flex flex-col items-start '>
                                <h1 className='text-oq text-xl'>Ideal cocktails from barmen....</h1>

                                <button className='border-none bg-transparent text-och hover:text-oq duration-300'>Read more</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News