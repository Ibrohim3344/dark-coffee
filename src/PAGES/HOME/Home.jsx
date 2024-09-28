import React from 'react'
import Hero from './Hero'
import Images from './Images'
import History from './History'
import Cofees from './Cofees'
import Blendr from './Blendr'
import Menu from './Menu'
import Comments from './Comments'
import Location from './Location'
import News from './News'

const Home = () => {
    return (
        <main className='font-font'>
            <Hero />
            <Images />
            <History />
            <Cofees />
            <Blendr />
            <Menu />
            <Comments />
            <Location />
            <News />
        </main>
    )
}

export default Home