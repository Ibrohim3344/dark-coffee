import React from 'react'
import blendr from '/public/blendr.png'
import Button from '../../Button'


const Blendr = () => {
    return (
        <section className='bg-jigar'>
            <div className='container bg-ochJ flex flex-row items-center justify-between px-[50px] py-[50px] max-[800px]:flex-col max-[800px]:justify-center max-[800px]:gap-[30px]'>
                <div>
                    <img src={blendr} alt="" />
                </div>

                <div className='flex flex-col items-start gap-[20px] w-[50%] max-[800px]:items-center max-[800px]:text-center max-[800px]:w-[100%]'>
                    <h1 className='text-4xl text-oq max-[370px]:text-2xl'>Coffee
                        machine, buy for home</h1>
                    <p className='text-gray'>mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula
                        volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nib
                        maximus, est eu, mattis nuce. preasent ut quam quis quam venen atis fri
                        ngilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.</p>
                    <Button text={"Discover now"} />
                </div>
            </div>
        </section>
    )
}

export default Blendr