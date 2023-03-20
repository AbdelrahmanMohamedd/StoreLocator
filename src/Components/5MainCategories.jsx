import React, {  useState , useEffect } from 'react';
import './styles/5MainCategories.css';
import axios from 'axios';


const MainCategories = () => {

    const [mainCategories,setMainCategories] = useState([]); 

    const fetchingMainCategories = async () =>{
        const response = await axios.get('https://api-task.bit68.com/en/api/categories/')
        .then((response)=>{ 
            setMainCategories(response.data.results);
        }) 
    }

    useEffect(()=> {
        fetchingMainCategories();
    },[])
    

    return (
        <>
            {
            mainCategories &&
                <div className='MainCategoriesMain'>

                    <div className='MainCategoriesTitle'>
                        <p>Main Categories</p>
                    </div> 

                    <div className='MainCategoriesItems text-center'>
                        <div>
                            <img className='arrowsImg' src="/images/Left.png" style={{marginRight:'30px'}}/>
                        </div>
                        {
                            mainCategories.map(mainCategories => (
                                <div className='' key={mainCategories.id}  >
                                    <img  className='MainCategoriesImages' src={mainCategories.image}   />
                                    <p className='MainCategoriesNames' > {mainCategories.name}</p>
                                </div>
                            ))
                        } 
                        <div className='' key={mainCategories[2]?.id}  > {/* in xd they are 6 Categories so that i added this */}
                            <img  className='MainCategoriesImages' src={mainCategories[2]?.image}   />
                            <p className='MainCategoriesNames' > {mainCategories[2]?.name}</p>
                        </div>
                        <div>
                            <img className='arrowsImg' src="/images/Right.png" style={{marginLeft:'30px'}}/>
                        </div>
                    </div>  

                </div>
            }
        </>
    );
};

export default MainCategories;