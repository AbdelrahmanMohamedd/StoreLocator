import React, {  useState , useEffect } from 'react';
import axios from 'axios';

import './styles/11Crocs.css'



const Crocs = () => {
    return (
        <div  className='crocsMain text-center' >
        <img className='crocsL ' src="/images/crocsL.PNG"  />
        <img className='crocsR '  src="/images/crocsR.PNG"  />
    </div>
    );
};

export default Crocs;