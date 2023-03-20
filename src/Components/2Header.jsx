import React, { useState } from 'react';
import './styles/2Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@material-ui/core/IconButton';
import Aside from './0SideBar';
import SideBar from './0SideBar';
import Backdrop from './Backdrop';


const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const ToggleSidebar = () => {
        setSidebar((prevState) => !prevState)
    }


    return ( 
        <>
            <div className="Header  ">

                <div className="navbar-logo">
                    <img src="/images/storelocatorLogo.png" alt="Store Locator" />
                    <p className="brandName" >Store Locator</p>
                </div>

                <div className="navbar-search">
                    <input type="text" placeholder="Search" />
                    {/* <SearchIcon  className='searchIcon' fontSize="large"/> */}
                </div>

                <div className="navbar-icons">

                    <div className="Menubutton">
                        <IconButton aria-label="Menu" onClick={ToggleSidebar} >
                            <MenuIcon fontSize="large" style={{ color: '#2d2f87' }}  />
                        </IconButton>
                    </div>

                    <button className="navbar-Arabic-btn">العربية</button>

                    <div className="cartIcon">
                        <FontAwesomeIcon icon={faUser} />
                    </div>

                    <div className="cartIcon">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="cartIconCount">2</span>
                    </div>

                </div>

            </div>
            
            <Backdrop  sidebar={sidebar}  closeSidebar={ToggleSidebar}/>
            <SideBar sidebar={sidebar}  closeSidebarX={ToggleSidebar} />

        </>
    );
};

export default Header;