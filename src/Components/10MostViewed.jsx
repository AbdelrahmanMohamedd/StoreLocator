import React, {  useState , useEffect } from 'react';
import axios from 'axios';

import './styles/10MostViewed.css'



const MostViewed = () => {



    const [mostViewed,setMostViewed] = useState([]); 

    const fetchingMostViewed = async () =>{
        const response = await axios.get('https://api-task.bit68.com/en/api/items/')
        .then((response)=>{ 
            setMostViewed(response.data.results);
            console.log(response.data.results); 
        }) 
    }

    useEffect(()=> {
        fetchingMostViewed();
    },[])

//////////////////////////////////////Items Names are dummies "tests"


    return ( 
        <>
            {
            mostViewed &&
                <div className='FeaturedMain'>

                    <div className='FeaturedTitle'>
                        <p>Most Viewed items</p>
                    </div> 

                    <div className='FeaturedItems text-center'>
                        <div>
                            <img  className='FeaturedImages text-center' src={mostViewed[4]?.image}   />
                            <p className='FeaturedNames' > {mostViewed[4]?.name}</p>
                            <lable className='AfterPrice' >EGP {mostViewed[4]?.price_after_sale}</lable>
                            <lable className='BeforePrice' >{" Save "+mostViewed[4]?.price_before_sale}</lable> 
                        </div>
                        <div>
                            <img  className='FeaturedImages text-center' src={mostViewed[3]?.image}   />
                            <p className='FeaturedNames' > {mostViewed[3]?.name}</p>
                            <lable className='AfterPrice' >EGP {mostViewed[3]?.price_after_sale}</lable>
                            <lable className='BeforePrice' >{" Save "+mostViewed[3]?.price_before_sale}</lable> 
                        </div>
                        <div>
                            <img  className='FeaturedImages text-center' src={mostViewed[2]?.image}   />
                            <p className='FeaturedNames' > {mostViewed[2]?.name}</p>
                            <lable className='AfterPrice' >EGP {mostViewed[2]?.price_after_sale}</lable>
                            <lable className='BeforePrice' >{" Save "+mostViewed[2]?.price_before_sale}</lable> 
                        </div>
                        <div>
                            <img  className='FeaturedImages text-center' src={mostViewed[1]?.image}   />
                            <p className='FeaturedNames' > {mostViewed[1]?.name}</p>
                            <lable className='BluePrice' >EGP {mostViewed[1]?.price_after_sale}</lable> 
                        </div>
                        <div>
                            <img  className='FeaturedImages text-center' src={mostViewed[0]?.image}   />
                            <p className='FeaturedNames' > {mostViewed[0]?.name}</p>
                            <lable className='BluePrice' >EGP {mostViewed[0]?.price_after_sale}</lable> 
                        </div>
                    </div>  
                    <hr className='sidebarHr' />

                </div>
            }
        </> 
    );
};

export default MostViewed;