import React, { Component } from "react";
import Slider from "react-slick";

export default class Fade extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='banners-container'>
                <div className='banner-title'>
                    <h1>If it's handcrafted, vintage, custom, or unique, it's on Artsy.</h1>
                    <link href="https://fonts.googleapis.com/css?family=Hepta+Slab&display=swap" rel="stylesheet"></link>
                </div>
                <Slider {...settings}>
                    <div>
                        <img src="https://i.ytimg.com/vi/K59404x4D5w/maxresdefault.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="https://img.mshanken.com/d/wso/bolt/Featured/Ratings/dailywinepicks_1600.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="https://elysianjewellery.com/wp-content/uploads/2017/08/banner-handcraft.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="https://i.ytimg.com/vi/vswMmEtF31o/maxresdefault.jpg" alt=""/>
                    </div>
                </Slider>
            </div>
        );
    }
}