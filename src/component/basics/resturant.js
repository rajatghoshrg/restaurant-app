import React, { useState } from 'react';
import Menu from './menuApi.js';
import MenuCard from './MenuCard.js';
import Navbar from './Navbar.js';

const Resturant = () => {
    
   const uniqueList = [
    "All",
    ...new Set(
        Menu.map((curElem) => curElem.category)
    ),
];

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category) => {

        if (category === "All") {
            setMenuData(Menu);
            return;
        }

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
            <Navbar filterItem={filterItem} menulist={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant
