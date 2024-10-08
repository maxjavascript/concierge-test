import React from 'react'
import '../styles/Header.css'

const Header = () => {
    return (
        <div className='page__header'>
            <header className='page-header'>
                <nav className='page-header__nav'>
                    <div className='page-header__logo'>
                        <a href='#'>
                            <img
                                src='../images/logo.png'
                                width='72'
                                height='51'
                                alt='Логотип'
                            />
                        </a>
                    </div>
                    <ul className='page-header__ul'>
                        <li>
                            <div className='search-input-wrapper'>
                                <input className='search-input' type='text' />
                            </div>
                        </li>
                        <li>
                            <a href='#'>
                                <img
                                    src='../images/profile.svg'
                                    width='24'
                                    alt='Мой профиль'
                                />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img
                                    src='../images/cart.svg'
                                    width='24'
                                    height='24'
                                    alt='Корзина'
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
