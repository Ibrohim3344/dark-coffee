import React from 'react'
import star from '/public/star.png'


const CommentCard = ({ img }) => {
    return (
        <div className='bg-ochJ w-[100%] flex flex-col items-start p-[30px] gap-[40px]'>
            <div className='flex flex-row gap-[20px] items-center w-[100%] justify-between max-[500px]:flex-col max-[500px]:text-center'>
                <img src={img} alt="" />
                <div className='w-[100%]'>
                    <p className='text-gray'>Education WP is a special build for effective education & Learning Management System site. Education WP is the next generation & one of the best education WordPress themes which all the strength of eLearning WP..</p>
                </div>
            </div>


            <div className='flex flex-row items-end justify-between w-[100%] max-[460px]:flex-col max-[460px]:justify-center max-[460px]:items-center max-[460px]:gap-[10px]'>
                <div className='flex flex-col items-start gap-[10px] max-[460px]:text-center max-[460px]:items-center'>
                    <span className='text-xl text-oq'>John Smith</span>
                    <span className='text-gray'>Product Designer</span>
                </div>

                <img src={star} alt="" />
            </div>
        </div>
    )
}

export default CommentCard