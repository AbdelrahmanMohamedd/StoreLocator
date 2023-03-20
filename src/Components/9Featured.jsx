import React, {  useState , useEffect } from 'react';
import axios from 'axios';

import './styles/9Featured.css'


const Featured = () => { 
    
    const [featured,setFeatured] = useState([]); 

    const fetchingFeatured = async () =>{
        const response = await axios.get('https://api-task.bit68.com/en/api/items/')
        .then((response)=>{ 
            setFeatured(response.data.results); 
        }) 
    }

    useEffect(()=> {
        fetchingFeatured();
    },[])

//////////////////////////////////////Items Names are dummies "tests"
    return (
        <>
            {
            featured &&
                <div className='FeaturedMain'>

                    <div className='FeaturedTitle'>
                        <p>Featured items</p>
                    </div> 

                    <div className='FeaturedItems text-center'>
                    <div>
                            <img  className='FeaturedImages text-center' src={featured[4]?.image}   />
                            <p className='FeaturedNames' > {featured[4]?.name}</p>
                            <lable className='AfterPrice' >EGP {featured[4]?.price_after_sale}</lable>
                            <lable className='BeforePrice' >{" Save "+featured[4]?.price_before_sale}</lable> 
                        </div>
                        <div>
                            <img  className='FeaturedImages text-center' src={featured[3]?.image}   />
                            <p className='FeaturedNames' > {featured[3]?.name}</p>
                            <lable className='AfterPrice' >EGP {featured[3]?.price_after_sale}</lable>
                            <lable className='BeforePrice' >{" Save "+featured[3]?.price_before_sale}</lable> 
                        </div>
                        <div>
                            <img  className='FeaturedImages text-center' src={featured[2]?.image}   />
                            <p className='FeaturedNames' > {featured[2]?.name}</p>
                            <lable className='AfterPrice' >EGP {featured[2]?.price_after_sale}</lable>
                            <lable className='BeforePrice' >{" Save "+featured[2]?.price_before_sale}</lable> 
                        </div>
                        <div>
                            <img  className='FeaturedImages text-center' src={featured[1]?.image}   />
                            <p className='FeaturedNames' > {featured[1]?.name}</p>
                            <lable className='BluePrice' >EGP {featured[1]?.price_after_sale}</lable> 
                        </div>
                        <div>
                            <img  className='FeaturedImages text-center' src={featured[0]?.image}   />
                            <p className='FeaturedNames' > {featured[0]?.name}</p>
                            <lable className='BluePrice' >EGP {featured[0]?.price_after_sale}</lable> 
                        </div>
                    </div>  
                    <hr className='sidebarHr' />

                </div>
            }
        </>
    );
};

export default Featured;