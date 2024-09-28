import React from 'react'
import Cards from '../../Cards'
import cofee1 from '/public/cofee1.png'
import cofee2 from '/public/cofee2.png'
import cofee3 from '/public/cofee3.png'
import cofee4 from '/public/cofee4.png'
import cofee5 from '/public/cofee5.png'
import cofee6 from '/public/cofee6.png'
import cofee7 from '/public/cofee7.png'
import cofee8 from '/public/cofee8.png'


const Menu = () => {
    return (
        <section className='bg-jigar py-[50px]'>
            <div className='container'>
                <div className='flex flex-col gap-[10px] text-center py-[30px]'>
                    <span className='text-och'>Menu</span>
                    <h1 className='text-oq text-4xl'>Coffee popular menu</h1>
                </div>


                <div className='flex flex-row justify-center gap-[20px] max-[800px]:flex-col'>
                    <div className='flex flex-col gap-[30px]'>
                        <Cards img={cofee1} />
                        <Cards img={cofee2} />
                        <Cards img={cofee3} />
                        <Cards img={cofee4} />
                    </div>

                    <div className='flex flex-col gap-[30px]'>
                        <Cards img={cofee5} />
                        <Cards img={cofee6} />
                        <Cards img={cofee7} />
                        <Cards img={cofee8} />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Menu