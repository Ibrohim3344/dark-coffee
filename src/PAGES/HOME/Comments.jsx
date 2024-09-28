import React from 'react'
import CommentCard from '../../CommentCard'
import jumbosh from '/public/jumbosh.png'
import jumon from '/public/jumon.png'


const Comments = () => {
  return (
    <section className='bg-jigar'>
        <div className='container'>
            <div className='flex flex-col gap-[10px] items-center text-center py-[50px]'>
                <span className='text-och'>Testimonial</span>
                <h1 className='text-oq text-4xl'>Says our customers</h1>
            </div>

            <div className='flex flex-row justify-between gap-[40px] py-[50px] max-lg:flex-col'>
                <CommentCard img={jumbosh}/>
                <CommentCard img={jumon}/>
            </div>
        </div>
    </section>
  )
}

export default Comments