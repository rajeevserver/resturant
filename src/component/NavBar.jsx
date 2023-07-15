import React from 'react';
const NavBar = ({ category, filterItems }) => {
    return (
        <>
            <li>
                <a onClick={() => filterItems(category)}>{category}</a>              
            </li>
        </>
    )
}
export default NavBar;