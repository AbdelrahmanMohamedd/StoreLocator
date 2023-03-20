import React, {  useState , useEffect } from 'react';
import axios from 'axios';

import './styles/7PopularBrands.css';



const PopularBrands = () => {


    const [popularBrands,setPopularBrands] = useState([]); 

    const fetchingPopularBrands = async () =>{
        const response = await axios.get('https://api-task.bit68.com/en/api/brands/')
        .then((response)=>{ 
            setPopularBrands(response.data.results);
        }) 
    }

    useEffect(()=> {
        fetchingPopularBrands();
    },[])
    

    return (
        <>
            {
            popularBrands &&
                <div className='PopularBrandsMain'>

                    <div className='PopularBrandsTitle'>
                        <p>Popular Brand</p>
                    </div> 

                    <div className='PopularBrandsItems text-center'>
                        <div>
                            <img className='arrowsImg' src="/images/Left.png" style={{marginRight:'30px'}}/>
                        </div>
                        <div className='BrandsbackgroundCircle'>  {/* in xd they are 6 brads so that i added this */}
                            <div className='' key={popularBrands[2]?.id}  >
                                <img  className='PopularBrandsImages text-center' src={popularBrands[2]?.image}   />
                                <p className='PopularBrandsNames' > {popularBrands[2]?.name}</p>
                            </div>
                        </div>
                        {
                            popularBrands.reverse().map(popularBrands => (
                                <div className='BrandsbackgroundCircle'>
                                <div className='' key={popularBrands.id}  >
                                    <img  className='PopularBrandsImages text-center' src={popularBrands.image}   />
                                    <p className='PopularBrandsNames' > {popularBrands.name}</p>
                                </div>
                                </div>
                            ))
                        } 
                        <div>
                            <img className='arrowsImg' src="/images/Right.png" style={{marginLeft:'30px'}}/>
                        </div>
                    </div>  

                </div>
            }
        </>
    );
};

export default PopularBrands;