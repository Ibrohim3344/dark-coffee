import React from 'react'
import white from '/public/white.png'
import black from '/public/black.png'
import twins from '/public/twins.png'




const History = () => {
    return (
        <section className='bg-jigar py-[100px]'>
            <div className='container flex flex-row items-center justify-between gap-[30px] max-lg:flex-col'>
                <div className='flex flex-col gap-[30px] max-lg:flex-row max-[800px]:flex-col'>
                    <img src={white} alt="" />
                    <img src={black} alt="" />
                </div>

                <div>
                    <img src={twins} alt="" />
                </div>

                <div className='flex flex-col gap-[30px] items-start w-[50%] bg-ochJ py-[180px] px-[50px] max-[1280px]:py-[80px] max-lg:w-[100%] max-[420px]:px-[20px] max-[640px]:text-center max-[640px]:items-center'>
                    <span className='text-lg text-och'>Our history</span>
                    <h1 className='text-4xl text-oq font-semibold max-[420px]:text-2xl'>Create a
                        new story with us</h1>
                    <p className='text-gray'>mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nibh maximus, est eu, mattis nuce. preasent ut quam quis quam venen
                        atis fringilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.</p>
                </div>
            </div>
        </section>
    )
}

export default History