import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import {Pagination} from "swiper/modules";
import ArtCard from "../../components/ArtCard/ArtCard";
import React, {useState} from "react";
import {useDataQuery} from "../../hooks/crud/data.query";
import {API_END_POINTS} from "../../utils/api-endpoint";


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
        artistBio: `Bedford lived and worked in Western Australia. Selected solo exhibitions include Paddy Bedford: Crossing Frontiers, The Museum of Contemporary Aboriginal Art (Utrecht, 2011); Remembering Forward: Australian Aboriginal Painting Since 1960, Museum Ludwig (Cologne, 2010); Paddy Bedford, Museum of Contemporary Art (Sydney, 2006); Blood on the Spinifex, Ian Potter Museum of Art (Melbourne, 2002-2003); Land Mark, Mirror Mark, Drill Hall Gallery Australian National University and Columbia State University (2000); Kluge - Ruhe Collection of Aboriginal Art, University of Virginia (Virginia, 2000); and Mapping Our Countries, Australian Museum (Sydney, 1999-2000). His work resides in the AGNSW, Sydney, NGV, Melbourne and private and corporate collections in Australia and overseas. His work was also included in the Musée du Quai Branly in Paris.`,
        artDescription: `Bedford’s sparse calm fields of monochrome picketed with white dots in rounding forms sit confidently in any good contemporary Australian collection. While his paintings combine important family dreamings, such as emu, turkey and cockatoo with roads, rivers, the living areas for traditional life and camp life, stock yards and country visited while mustering, they also speak to abstract expressionism’s Ad Reinhardt, Barnet Newman and Franz Kline and Surrealism’s Miro. His history, likely to outway any western artist folklore, is one thwarted with nomadicism and murder, and like his character, these works radiate stoicism.`,
        imageUrl: "https://picsum.photos/400/500",
        provenance: "Acquired directly from the artist by the present owner in 2019",

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
        artistBio: `Bedford lived and worked in Western Australia. Selected solo exhibitions include Paddy Bedford: Crossing Frontiers, The Museum of Contemporary Aboriginal Art (Utrecht, 2011); Remembering Forward: Australian Aboriginal Painting Since 1960, Museum Ludwig (Cologne, 2010); Paddy Bedford, Museum of Contemporary Art (Sydney, 2006); Blood on the Spinifex, Ian Potter Museum of Art (Melbourne, 2002-2003); Land Mark, Mirror Mark, Drill Hall Gallery Australian National University and Columbia State University (2000); Kluge - Ruhe Collection of Aboriginal Art, University of Virginia (Virginia, 2000); and Mapping Our Countries, Australian Museum (Sydney, 1999-2000). His work resides in the AGNSW, Sydney, NGV, Melbourne and private and corporate collections in Australia and overseas. His work was also included in the Musée du Quai Branly in Paris.`,
        artDescription: `Bedford’s sparse calm fields of monochrome picketed with white dots in rounding forms sit confidently in any good contemporary Australian collection. While his paintings combine important family dreamings, such as emu, turkey and cockatoo with roads, rivers, the living areas for traditional life and camp life, stock yards and country visited while mustering, they also speak to abstract expressionism’s Ad Reinhardt, Barnet Newman and Franz Kline and Surrealism’s Miro. His history, likely to outway any western artist folklore, is one thwarted with nomadicism and murder, and like his character, these works radiate stoicism.`,
        imageUrl: "https://picsum.photos/400/500",
        provenance: "Acquired directly from the artist by the present owner in 2019",

    }, {
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
        artistBio: `Bedford lived and worked in Western Australia. Selected solo exhibitions include Paddy Bedford: Crossing Frontiers, The Museum of Contemporary Aboriginal Art (Utrecht, 2011); Remembering Forward: Australian Aboriginal Painting Since 1960, Museum Ludwig (Cologne, 2010); Paddy Bedford, Museum of Contemporary Art (Sydney, 2006); Blood on the Spinifex, Ian Potter Museum of Art (Melbourne, 2002-2003); Land Mark, Mirror Mark, Drill Hall Gallery Australian National University and Columbia State University (2000); Kluge - Ruhe Collection of Aboriginal Art, University of Virginia (Virginia, 2000); and Mapping Our Countries, Australian Museum (Sydney, 1999-2000). His work resides in the AGNSW, Sydney, NGV, Melbourne and private and corporate collections in Australia and overseas. His work was also included in the Musée du Quai Branly in Paris.`,
        artDescription: `Bedford’s sparse calm fields of monochrome picketed with white dots in rounding forms sit confidently in any good contemporary Australian collection. While his paintings combine important family dreamings, such as emu, turkey and cockatoo with roads, rivers, the living areas for traditional life and camp life, stock yards and country visited while mustering, they also speak to abstract expressionism’s Ad Reinhardt, Barnet Newman and Franz Kline and Surrealism’s Miro. His history, likely to outway any western artist folklore, is one thwarted with nomadicism and murder, and like his character, these works radiate stoicism.`,
        imageUrl: "https://picsum.photos/400/500",
        provenance: "Acquired directly from the artist by the present owner in 2019",

    }, {
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
        artistBio: `Bedford lived and worked in Western Australia. Selected solo exhibitions include Paddy Bedford: Crossing Frontiers, The Museum of Contemporary Aboriginal Art (Utrecht, 2011); Remembering Forward: Australian Aboriginal Painting Since 1960, Museum Ludwig (Cologne, 2010); Paddy Bedford, Museum of Contemporary Art (Sydney, 2006); Blood on the Spinifex, Ian Potter Museum of Art (Melbourne, 2002-2003); Land Mark, Mirror Mark, Drill Hall Gallery Australian National University and Columbia State University (2000); Kluge - Ruhe Collection of Aboriginal Art, University of Virginia (Virginia, 2000); and Mapping Our Countries, Australian Museum (Sydney, 1999-2000). His work resides in the AGNSW, Sydney, NGV, Melbourne and private and corporate collections in Australia and overseas. His work was also included in the Musée du Quai Branly in Paris.`,
        artDescription: `Bedford’s sparse calm fields of monochrome picketed with white dots in rounding forms sit confidently in any good contemporary Australian collection. While his paintings combine important family dreamings, such as emu, turkey and cockatoo with roads, rivers, the living areas for traditional life and camp life, stock yards and country visited while mustering, they also speak to abstract expressionism’s Ad Reinhardt, Barnet Newman and Franz Kline and Surrealism’s Miro. His history, likely to outway any western artist folklore, is one thwarted with nomadicism and murder, and like his character, these works radiate stoicism.`,
        imageUrl: "https://picsum.photos/400/500",
        provenance: "Acquired directly from the artist by the present owner in 2019",

    }, {
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
        artistBio: `Bedford lived and worked in Western Australia. Selected solo exhibitions include Paddy Bedford: Crossing Frontiers, The Museum of Contemporary Aboriginal Art (Utrecht, 2011); Remembering Forward: Australian Aboriginal Painting Since 1960, Museum Ludwig (Cologne, 2010); Paddy Bedford, Museum of Contemporary Art (Sydney, 2006); Blood on the Spinifex, Ian Potter Museum of Art (Melbourne, 2002-2003); Land Mark, Mirror Mark, Drill Hall Gallery Australian National University and Columbia State University (2000); Kluge - Ruhe Collection of Aboriginal Art, University of Virginia (Virginia, 2000); and Mapping Our Countries, Australian Museum (Sydney, 1999-2000). His work resides in the AGNSW, Sydney, NGV, Melbourne and private and corporate collections in Australia and overseas. His work was also included in the Musée du Quai Branly in Paris.`,
        artDescription: `Bedford’s sparse calm fields of monochrome picketed with white dots in rounding forms sit confidently in any good contemporary Australian collection. While his paintings combine important family dreamings, such as emu, turkey and cockatoo with roads, rivers, the living areas for traditional life and camp life, stock yards and country visited while mustering, they also speak to abstract expressionism’s Ad Reinhardt, Barnet Newman and Franz Kline and Surrealism’s Miro. His history, likely to outway any western artist folklore, is one thwarted with nomadicism and murder, and like his character, these works radiate stoicism.`,
        imageUrl: "https://picsum.photos/400/500",
        provenance: "Acquired directly from the artist by the present owner in 2019",

    }, {
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
        artistBio: `Bedford lived and worked in Western Australia. Selected solo exhibitions include Paddy Bedford: Crossing Frontiers, The Museum of Contemporary Aboriginal Art (Utrecht, 2011); Remembering Forward: Australian Aboriginal Painting Since 1960, Museum Ludwig (Cologne, 2010); Paddy Bedford, Museum of Contemporary Art (Sydney, 2006); Blood on the Spinifex, Ian Potter Museum of Art (Melbourne, 2002-2003); Land Mark, Mirror Mark, Drill Hall Gallery Australian National University and Columbia State University (2000); Kluge - Ruhe Collection of Aboriginal Art, University of Virginia (Virginia, 2000); and Mapping Our Countries, Australian Museum (Sydney, 1999-2000). His work resides in the AGNSW, Sydney, NGV, Melbourne and private and corporate collections in Australia and overseas. His work was also included in the Musée du Quai Branly in Paris.`,
        artDescription: `Bedford’s sparse calm fields of monochrome picketed with white dots in rounding forms sit confidently in any good contemporary Australian collection. While his paintings combine important family dreamings, such as emu, turkey and cockatoo with roads, rivers, the living areas for traditional life and camp life, stock yards and country visited while mustering, they also speak to abstract expressionism’s Ad Reinhardt, Barnet Newman and Franz Kline and Surrealism’s Miro. His history, likely to outway any western artist folklore, is one thwarted with nomadicism and murder, and like his character, these works radiate stoicism.`,
        imageUrl: "https://picsum.photos/400/500",
        provenance: "Acquired directly from the artist by the present owner in 2019",

    }, {
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
        artistBio: `Bedford lived and worked in Western Australia. Selected solo exhibitions include Paddy Bedford: Crossing Frontiers, The Museum of Contemporary Aboriginal Art (Utrecht, 2011); Remembering Forward: Australian Aboriginal Painting Since 1960, Museum Ludwig (Cologne, 2010); Paddy Bedford, Museum of Contemporary Art (Sydney, 2006); Blood on the Spinifex, Ian Potter Museum of Art (Melbourne, 2002-2003); Land Mark, Mirror Mark, Drill Hall Gallery Australian National University and Columbia State University (2000); Kluge - Ruhe Collection of Aboriginal Art, University of Virginia (Virginia, 2000); and Mapping Our Countries, Australian Museum (Sydney, 1999-2000). His work resides in the AGNSW, Sydney, NGV, Melbourne and private and corporate collections in Australia and overseas. His work was also included in the Musée du Quai Branly in Paris.`,
        artDescription: `Bedford’s sparse calm fields of monochrome picketed with white dots in rounding forms sit confidently in any good contemporary Australian collection. While his paintings combine important family dreamings, such as emu, turkey and cockatoo with roads, rivers, the living areas for traditional life and camp life, stock yards and country visited while mustering, they also speak to abstract expressionism’s Ad Reinhardt, Barnet Newman and Franz Kline and Surrealism’s Miro. His history, likely to outway any western artist folklore, is one thwarted with nomadicism and murder, and like his character, these works radiate stoicism.`,
        imageUrl: "https://picsum.photos/400/500",
        provenance: "Acquired directly from the artist by the present owner in 2019",

    }, {
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
        artistBio: `Bedford lived and worked in Western Australia. Selected solo exhibitions include Paddy Bedford: Crossing Frontiers, The Museum of Contemporary Aboriginal Art (Utrecht, 2011); Remembering Forward: Australian Aboriginal Painting Since 1960, Museum Ludwig (Cologne, 2010); Paddy Bedford, Museum of Contemporary Art (Sydney, 2006); Blood on the Spinifex, Ian Potter Museum of Art (Melbourne, 2002-2003); Land Mark, Mirror Mark, Drill Hall Gallery Australian National University and Columbia State University (2000); Kluge - Ruhe Collection of Aboriginal Art, University of Virginia (Virginia, 2000); and Mapping Our Countries, Australian Museum (Sydney, 1999-2000). His work resides in the AGNSW, Sydney, NGV, Melbourne and private and corporate collections in Australia and overseas. His work was also included in the Musée du Quai Branly in Paris.`,
        artDescription: `Bedford’s sparse calm fields of monochrome picketed with white dots in rounding forms sit confidently in any good contemporary Australian collection. While his paintings combine important family dreamings, such as emu, turkey and cockatoo with roads, rivers, the living areas for traditional life and camp life, stock yards and country visited while mustering, they also speak to abstract expressionism’s Ad Reinhardt, Barnet Newman and Franz Kline and Surrealism’s Miro. His history, likely to outway any western artist folklore, is one thwarted with nomadicism and murder, and like his character, these works radiate stoicism.`,
        imageUrl: "https://picsum.photos/400/500",
        provenance: "Acquired directly from the artist by the present owner in 2019",

    },
];

const ActiveSlider = ({toggleSidebar}) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [swiper, setSwiper] = useState(null);
    const {data:recommendList}=useDataQuery
    ({
        url: API_END_POINTS.recommendation,
    });
    return (
        <div className='flex items-center justify-center '>
            <Swiper
                onSwiper={setSwiper}
                slidesPerView={'auto'}
                initialSlide={1}
                breakpoints={{
                    md: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    800: {
                        slidesPerView: 2.25,
                        spaceBetween: 50,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                    enabled: true,
                    type: 'custom'
                }}
                modules={[Pagination]}
                centeredSlides={true}
                className="max-w-max h-2/3 items-center justify-center"
                onPaginationUpdate={(swiper) => {
                    setActiveIndex(swiper.activeIndex)
                }}
            >
                {
                    recommendList?.map((item, index) => {
                        return <SwiperSlide key={item.title}
                                            onClick={() => {
                                                swiper.slideTo(index);
                                            }}
                                            className="md:pt-8 pt-0"
                        >
                            <ArtCard art={item} navigateToArt={false} toggleSidebar={toggleSidebar}/>
                        </SwiperSlide>
                    })
                }
            </Swiper>

            <div className="md:block hidden  m-4 bottom-0 left-0 fixed z-20 ">
                <span className=" text-2xl font-light">{activeIndex + 1}</span> <span
                className='text-solidLove text-2xl font-light'>{recommendList?.length}</span>
            </div>

        </div>
    );
};

export default ActiveSlider;