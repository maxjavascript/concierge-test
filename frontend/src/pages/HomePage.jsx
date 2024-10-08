import React from 'react'
import Header from '../components/Header'
import Marquee from '../components/Marquee'
import Main from '../components/Main'
import '../styles/index.css'

const HomePage = () => {
    return (
        <div className='HomePage'>
            <Header />
            <Marquee />
            <Main />
        </div>
    )
}

export default HomePage
