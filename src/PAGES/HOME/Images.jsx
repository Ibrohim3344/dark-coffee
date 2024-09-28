import React from 'react'
import Imgs from '../../Imgs'
import cofe1 from '/public/cofee.png'
import cofe2 from '/public/coffe2.png'
import cofe3 from '/public/coffe3.png'



const Images = () => {
    return (
        <section className='bg-jigar py-[100px]'>
            <div className='container flex flex-row justify-between flex-wrap max-[1270px]:gap-[40px] max-lg:justify-center'>
                <Imgs img={cofe1} sp1={"01"} sp2={"Best Coffee Flavour"}/>
                <Imgs img={cofe2} sp1={"02"} sp2={'Place to get lost'}/>
                <Imgs img={cofe3} sp1={"03"} sp2={"Proper roesting"}/>
            </div>
        </section>
    )
}

export default Images