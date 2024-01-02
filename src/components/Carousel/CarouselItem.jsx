import React from "react";
// .Carousel-item {
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     height: 490px;
//     background-color: #fff;
// }
export const CarouselItem = ({item, width, onClick, handlers}) => {

    return (
        <div className="inline-flex h-max " style={{width: width}} onClick={onClick}   {...handlers}>
            <div>
                <div
                    className={`lightgray 50% / cover no-repeat] flex-shrink-0 w-[437.921px] h-[657.116px] shadow-recommendation bg-cover bg-[url('https://picsum.photos/400/260')] `}/>
            </div>
        </div>
    );
};


