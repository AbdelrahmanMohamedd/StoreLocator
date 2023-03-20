import React, {  useState , useEffect } from 'react';
import axios from 'axios';

import './styles/6Flat.css';



const Flat = () => {
    
    return (
        <div  className='Flat20 text-center' >
            <img className='Flat20L ' src="/images/Flat20L.PNG"  />
            <img className='Flat20R '  src="/images/Flat20R.PNG"  />
        </div>
    );
};

export default Flat;