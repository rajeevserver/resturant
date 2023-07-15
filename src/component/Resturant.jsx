import React, { useState } from 'react';
import menu from './menuApi';
import MenuCard from './MenuCard';
import NavBar from './NavBar';
const Resturant = () => {
    const [menuData, setmenuData] = useState(menu);
    const filterItems = (selectedCategory) => {
        if (selectedCategory === 'all') {
            setmenuData(menu);
        }
        else {
            const filterItemList = menu.filter((currentElement) => {
                return currentElement.category === selectedCategory;
            });
            setmenuData(filterItemList);
        }      
    }
    const filterNavList = [...new Set(menu.map((currentItem, index) => {
        return currentItem.category;
    })), "all"];
    return (
        <>
            <div className="container1">
                <ul className="nav-links">
                    {
                        filterNavList.map((currentItem) => {
                            return <NavBar category={currentItem} key={currentItem} filterItems={filterItems} />
                        })
                    }
                </ul>
            </div>
            <div className="container">
                {
                    menuData.map((value, index) => {
                        return <MenuCard data={value} key={index} />
                    }
                    )
                }
            </div >
        </>
    )
}
export default Resturant;