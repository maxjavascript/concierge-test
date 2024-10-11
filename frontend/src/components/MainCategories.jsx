import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MainCategories.css'

const MainCategories = () => {
    const ClothesItems = [
        { name: 'штаны', link: '/products' },
        { name: 'футболки', link: '/products' },
        { name: 'куртки', link: '/products' },
        { name: 'штаны', link: '/products' },
        { name: 'футболки', link: '/products' },
        { name: 'куртки', link: '/products' },
        { name: 'штаны', link: '/products' },
        { name: 'футболки', link: '/products' },
        { name: 'куртки', link: '/products' },
        { name: 'телефоны', link: '/products' },
    ]

    const categoryItems = [
        { name: 'одежда', link: '/products' },
        { name: 'косметика', link: '/products' },
        { name: 'электроника', link: '/products' },
        { name: 'украшения', link: '/products' },
        { name: 'сладости', link: '/products' },
        { name: 'лекарства и БАДы', link: '/products' },
    ]

    return (
        <div className='page__main'>
            <main className='page-main'>
                <Link className='breadcrumbs' to='/'>
                    <span className='text text--breadcrumbs'>
                        {'<'} на главную
                    </span>
                </Link>
                <h1 className='visually-hidden'>Категории</h1>
                <div className='categories-wrapper'>
                    <ul className='categories-list'>
                        <li className='categories-item'>
                            <div className='category-title'>
                                <h2 className='text text--h2'>Clothes</h2>
                            </div>
                            <div className='category-list-wrapper'>
                                <ul className='category-list'>
                                    {ClothesItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className='category-item'
                                        >
                                            <Link to={item.link}>
                                                <div className='category-image'></div>
                                                <h3 className='text text--h3'>
                                                    {item.name}
                                                </h3>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li className='categories-item'>
                            <div className='category-title'>
                                <h2 className='text text--h2'>Top Brands</h2>
                            </div>
                            <div className='category-list-wrapper'>
                                <ul className='category-list'>
                                    {categoryItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className='category-item'
                                        >
                                            <Link to={item.link}>
                                                <div className='category-image'></div>
                                                <h3 className='text text--h3'>
                                                    {item.name}
                                                </h3>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default MainCategories
