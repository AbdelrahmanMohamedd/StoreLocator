import React, {  useState , useEffect } from 'react';
import './styles/4Slider.css';
import axios from 'axios';
import HeroSlider , {Slide} from 'hero-slider';



const Slider = () => {

    const [image1,setImage1] = useState();
    const [image2,setImage2] = useState();


    const fetchingSlider = async () =>{
        const response = await axios.get('https://api-task.bit68.com/en/api/slider_image/')
        .then((response)=>{
            console.log(response.data.results);
            setImage1(response.data.results[0].image); 
            setImage2(response.data.results[1].image); 
        }) 
    }


    useEffect(()=> {
        fetchingSlider();
    },[])

    


    return (
            <>
            {
                image1 && image2 && 
                <div className='Slider'  > 
                    <HeroSlider 
                        slidingAnimation="left_to_right" 
                        orientation="horizontal"
                        initialSlide={1} 
                        onBeforeChange={(previousSlide, nextSlide)=> console.log("onBeforeChange" ,previousSlide, nextSlide)}   
                        onChange={nextSlide=>console.log("onChange" , nextSlide)}
                        onAfterChange={nextSlide => console.log("onAfterChange",nextSlide)}
                        style={{backgroundColor:'rgba(0,0,0,0.33)' , zIndex: '-1'}}
                        settings = {{
                            slidingDuration:250, 
                            slidingDelay:100, 
                            shouldAutoPlay:true ,
                            shouldDisplayButtons:true, 
                            autoplayDuration:2000, 
                            height:"600px"
                        }}
                        >
                        <Slide className="Slides" background={{backgroundImage:image1, backgroundAttachment:"fit"  }} />
                        <Slide className="Slides" background={{backgroundImage:image2, backgroundAttachment:"fixed"  }} /> 
                    </HeroSlider> 
                </div>
                }
            </>
    );
};

export default Slider;