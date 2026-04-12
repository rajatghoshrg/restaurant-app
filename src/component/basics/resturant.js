import React, { useState } from 'react';
import Menu from './menuApi.js';
import MenuCard from './MenuCard.js';

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
            <div className="restaurant-header">
                <h1> Pet Pujo Adda</h1>
                <p>Eat • Chill • Adda Repeat</p>
            </div>
            <nav className='navbar'>
                <div className='btn-group'>
                    <button className='btn-group__item' onClick={() => filterItem('Breakfast')}>Breakfast</button>
                    <button className='btn-group__item' onClick={() => filterItem('Lunch')}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filterItem('Biryani')}>Biryani</button>
                    <button className='btn-group__item' onClick={() => filterItem('Dessert')}>Dessert</button>
                    <button className='btn-group__item' onClick={() => filterItem('Snacks')}>Snacks</button>
                    <button className='btn-group__item' onClick={() => filterItem('Combo')}>Combo</button>
                    <button className='btn-group__item' onClick={() => filterItem('Drinks')}>Drinks</button>
                    <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
                </div>
            </nav>

            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant
