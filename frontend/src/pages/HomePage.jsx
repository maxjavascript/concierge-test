import React from 'react'
import Header from '../components/Header'
import Marquee from '../components/Marquee'
import MainHome from '../components/MainHome'
import '../styles/index.css'

const HomePage = () => {
    return (
        <div className='HomePage'>
            <Header />
            <Marquee />
            <MainHome />
        </div>
    )
}

export default HomePage
