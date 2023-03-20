import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/3Navbar.css'

const Navbar = () => {

    const [active, setActive] = useState('Sale');

    const activate = (choice) => {
        setActive(choice);
    };


    return (
        <>
            <div className="blackNavbar ">
                
                <ul>
                    <li>
                        <a className={active === 'Top Deals' ? 'active' : ''} onClick={() => activate('Top Deals')} href="#">Top Deals</a>
                    </li> 

                    <li>
                        <a className={active === 'Deals of the Day' ? 'active' : ''} onClick={() => activate('Deals of the Day')} href="#">Deals of the Day</a>
                    </li>

                    <li>
                        <a className={active === 'Men' ? 'active' : ''} onClick={() => activate('Men')} href="#">Men</a>
                    </li>

                    <li>
                        <a className={active === 'Women' ? 'active' : ''} onClick={() => activate('Women')} href="#">Women</a>
                    </li>

                    <li>
                        <a className={active === 'Kids' ? 'active' : ''} onClick={() => activate('Kids')} href="#">Kids</a>
                    </li>
                    <li>
                        <a className={active === 'New' ? 'active' : ''} onClick={() => activate('New')} href="#">New</a>
                    </li>

                    <li>
                        <a className={active === 'Brands' ? 'active' : ''} onClick={() => activate('Brands')} href="#">Brands</a>
                    </li>

                    <li>
                        <a className={active === 'Sports' ? 'active' : ''} onClick={() => activate('Sports')} href="#">Sports</a>
                    </li>

                    <li>
                        <a className={active === 'Accessories' ? 'active' : ''} onClick={() => activate('Accessories')} href="#">Accessories</a>
                    </li>

                    <li>
                        <a className={active === 'Sale' ? 'active' : ''} onClick={() => activate('Sale')} href="#">Sale</a>
                    </li>

                </ul> 
            </div>
        </>
    );
};

export default Navbar;