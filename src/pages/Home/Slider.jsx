import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import {FreeMode, Pagination} from "swiper/modules";
import ArtCard from "../../components/ArtCard/ArtCard";
import React, {useState} from "react";


const serviceData = [
    {
        artist: "Artist 1",
        title: "Sarah Lucas\n" +
            "OOPS!, 2019",
        date: "2021-01-01",
        medium: "Concrete",
        dimensions: "100 x 100 X 100 cm",
        category: 'Sculpture',
        location: 'Sydney',
        price: '10000',
        currency: 'AUD',
        imageUrl: "https://picsum.photos/400/500",
    },
    {
        artist: "Artist 1",
        title: "Sarah Lucas\n" +
            "OOPS!, 2019",
        date: "2021-01-01",
        medium: "Concrete",
        dimensions: "100 x 100 X 100 cm",
        category: 'Sculpture',
        location: 'Sydney',
        price: '10000',
        currency: 'AUD',
        imageUrl: "https://picsum.photos/400/500",
    },
    {
        artist: "Artist 1",
        title: "Sarah Lucas\n" +
            "OOPS!, 2019",
        date: "2021-01-01",
        medium: "Concrete",
        dimensions: "100 x 100 X 100 cm",
        category: 'Sculpture',
        location: 'Sydney',
        price: '10000',
        currency: 'AUD',
        imageUrl: "https://picsum.photos/400/500",
    },
    {
        artist: "Artist 1",
        title: "Sarah Lucas\n" +
            "OOPS!, 2019",
        date: "2021-01-01",
        medium: "Concrete",
        dimensions: "100 x 100 X 100 cm",
        category: 'Sculpture',
        location: 'Sydney',
        price: '10000',
        currency: 'AUD',
        imageUrl: "https://picsum.photos/400/500",
    },
    {
        artist: "Artist 1",
        title: "Sarah Lucas\n" +
            "OOPS!, 2019",
        date: "2021-01-01",
        medium: "Concrete",
        dimensions: "100 x 100 X 100 cm",
        category: 'Sculpture',
        location: 'Sydney',
        price: '10000',
        currency: 'AUD',
        imageUrl: "https://picsum.photos/400/500",
    },
    {
        artist: "Artist 1",
        title: "Sarah Lucas\n" +
            "OOPS!, 2019",
        date: "2021-01-01",
        medium: "Concrete",
        dimensions: "100 x 100 X 100 cm",
        category: 'Sculpture',
        location: 'Sydney',
        price: '10000',
        currency: 'AUD',
        imageUrl: "https://picsum.photos/400/500",

    },
];

const ActiveSlider = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [swiper, setSwiper] = useState(null);
    return (
        <div>
            <Swiper
                onSwiper={setSwiper}
                slidesPerView={'auto'}
                initialSlide={1}
                breakpoints={{
                    600: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                    enabled:true,
                    type:'custom'
                }}
                modules={[Pagination]}
                centeredSlides={true}
                className="max-w-max"
                onPaginationUpdate={(swiper) => {
                    setActiveIndex(swiper.activeIndex)
                }}
            >
                {
                    serviceData.map((item,index) => {
                        return <SwiperSlide key={item.title}
                        onClick={()=>{
                            swiper.slideTo(index);
                        }}
                        >
                            <ArtCard art={item} navigateToArt={false}/>
                        </SwiperSlide>
                    })
                }


            </Swiper>
            <div className="m-4  bottom-0 absolute">
                <span className="text-2xl font-light">{activeIndex + 1}</span> <span
                className='text-solidLove text-2xl font-light'>{serviceData.length}</span>
            </div>

        </div>
    );
};

export default ActiveSlider;