import React from 'react';
import Slider from "react-slick";
import STORIES from '../../json/STORIES.json'

export default function BannerCarousel() {
    return (
        <Slider
            autoplay={true}
            swipe
            draggable={true}
            infinite
            speed={500}
            fade
            autoplaySpeed={2000}
            touchMove
        >
            {STORIES.filter(story => story.carsousel).map(story => <div key={story.heading}>
                <div className="img-bg" style={{ backgroundImage: `url(${story.imgUrl})` }}></div>
            </div>)}

        </Slider>
    );
}
