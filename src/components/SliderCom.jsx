import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderCom({sliderData, sliderRef, settingsData}) {

    const [sliderList, setSliderList] = useState(null);

    useEffect(() => {
        setSliderList(sliderData);
    }, [sliderData])
    
  return (
    <>
        <Slider ref={sliderRef} {...settingsData}>
            {
                sliderList?.map((item, index) => (
                <div className="item" key={index}>
                    <img src={item.imgUrl.full_path} alt={item.area} className="img-fluid" />
                </div>
                ))
            }
        </Slider>
    </>
  )
}

export default SliderCom
