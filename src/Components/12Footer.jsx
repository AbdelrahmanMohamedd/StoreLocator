import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles/12Footer.css'
import { fontSize } from '@mui/system';
const Footer = () => {
    return (
        <footer className="myFooter"  >

            <div> 
                <table >
                    <thead >
                        <tr><th className='tableHead' >Active Trending</th></tr>
                    </thead>
                    <tbody className='tablebody'>
                        <tr><td>Men</td></tr> 
                        <tr><td>Women</td></tr> 
                        <tr><td>Kids</td></tr> 
                    </tbody>
                </table> 
            </div>

            <div> 
                <table >
                    <thead >
                        <tr><th className='tableHead' >About Us</th></tr>
                    </thead>
                    <tbody  className='tablebody'>
                        <tr><td>About Company</td></tr> 
                        <tr><td>Connect Us</td></tr> 
                        <tr><td>Our Branched</td></tr> 
                    </tbody>
                </table> 
            </div>

        </footer>
    );
};

export default Footer;

