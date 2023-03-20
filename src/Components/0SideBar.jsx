import React, { useState } from 'react';
import './styles/0SideBar.css'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@material-ui/core/IconButton';
import './styles/0SideBar.css'
import { height } from '@mui/system';


const Aside = ({ sidebar , closeSidebarX}) => {

    const [active, setActive] = useState('Sale');

    const activate = (choice) => {
        setActive(choice);
    };

    const closeSidebar = () =>{

    }



    return (
        <div className='sideBarContainer'>
            <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
                <IconButton aria-label="Menu"  onClick={closeSidebarX} >
                    <CloseIcon fontSize="large" style={{ color: '#2d2f87' , margin:'15px'}} />
                </IconButton>
                <div className="asidelogo">
                    <img src="/images/storelocatorLogo.png" style={{ height: '20px', marginRight: '10px' }} />
                    <p>Store Locator</p>
                </div>
                <ul > 
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
                    <li>
                        <button className="navbar-ArabicLang-btn">العربية</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Aside;