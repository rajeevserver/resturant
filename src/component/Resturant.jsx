import React, { useState } from 'react';
import menu from './menuApi';
import MenuCard from './MenuCard';

const Resturant = () => {
    const [menuData, setmenuData] = useState(menu);
    return (
        <>
        <div className="container1">
            <ul className="nav-links">
                <li><a href="#">All</a></li>
                <li className="center"><a href="#">Cakes</a></li>
                <li className="upward"><a href="#">Pizza</a></li>
                
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