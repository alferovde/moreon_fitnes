import {useState, useEffect} from "react";
import Slider from "react-slick";
import axios from 'axios'
import style from './stoks_slider.module.scss'
import type { StoksTitle, StoksIArray } from "../../../../interfaces/any_interfaces";

import { REACT_APP_DEV_DOMAIN, REACT_APP_DEV_IMG } from "../../../../store/env";
const Stoks_slider = () => {
    const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className:style.slider,
    dotsClass:style.slider_dots,
    // slide:style.slide_item,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        
        }
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:true,
             dots: false,
        }
      }
    ],
    appendDots: dots  => {
    return (
      
        <ul className={style.slider_dots}>
          {dots.map((item, index) => {
          
            return (
              <li key={index} className={item.props.className !== 'slick-active' ? style.slider_dot : style.slider_dot_active}>{item.props.children}</li>
            );
          })}
        </ul>
   
    )
  },
  prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow /> ,
    

  };


   function CustomPrevArrow  (props)  {
    const { className, onClick } = props;
 console.log('prev',props.className.includes('slick-disabled'))
    return (
        <div
            
            className={props.className.includes('slick-disabled') !== true ? style.prev_arrow : style.prev_arrow_disabled  }
            onClick={onClick}
        >
    
        </div>
    );
};

 function CustomNextArrow  (props) {
    const { className, onClick } = props;

      console.log('next',props.className.includes('slick-disabled'))
    return (
        <div
            className={props.className.includes('slick-disabled') !== true ? style.next_arrow : style.next_arrow_disabled  }
            onClick={onClick}
        >
           
        </div>
    );
};
  


    const [stokcs, setStoks] = useState<StoksIArray>();
    const [currentStokc, setCurrentStokc] =useState<string|number>(1)


  function getMainPage(){
    axios({
  method: 'get',
  url: `${REACT_APP_DEV_DOMAIN}/stocks_slider/${currentStokc}`,
  
  
})
  .then(function (response) {

    setStoks(response?.data)
 
  });
  }

  useEffect(()=>{
  getMainPage()
  },[currentStokc])



  function renderStoks(){

   return stokcs?.stocks_titles?.map((item:StoksTitle, index:number)=>{
       return <button 
       className={currentStokc !== item.id ? style.btn_header : style.btn_header_active
        
       } key={index}
        onClick={()=>setCurrentStokc(item.id)}
         > {item.title} </button>
    })
  }

  function renderSliderItems(){
   return stokcs?.stocks_imgs?.map(item=>{
      return <div className="">
        <img src={`${REACT_APP_DEV_IMG}${item.img}`} alt="" />
      </div>
    })
  }


  return (
    <section className={`${style.stoks_slioder} container`}>

        <h2>Акции</h2>

        <div className={style.stoks_slioder_menu}>
          {renderStoks()}
        </div>


       <div className="slider-container ">
      <Slider {...settings}>
        {renderSliderItems()}
      </Slider>
    </div>
    </section>
  )
}

export default Stoks_slider
