import React, {useState} from 'react';
import {CarouselItem} from "./CarouselItem";
import {useSwipeable} from 'react-swipeable';

const Carousel = ({contents}) => {

    const [activeIndex, setActiveIndex] = useState(1);


    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= contents.length) {
            newIndex = contents.length - 1;
        }

        setActiveIndex(newIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex - 1),
        onSwipedRight: () => updateIndex(activeIndex + 1),
        swipeDuration: 0,
        preventScrollOnSwipe: true,
        trackMouse: true,
        onSwiped: (eventData) => console.log("User Swiped!", eventData),
        onSwiping: () => console.log('swiping'),
        onSwipedUp: () => console.log('up'),
        touchEventOptions: {passive: true},
    });

    return (<div>
            <div className=" w-full flex flex-col justify-center items-center overflow-x-auto"
                 style={{touchAction: 'pan-y'}}>
                <div
                    className="whitespace-nowrap transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translate(-${60* activeIndex/(contents.length-1)}%)`,
                    }}
                >
                    {contents.map((item, index) => {
                        return <CarouselItem handlers={handlers} item={item} width={"25%"} onClick={() => {
                            updateIndex(index);
                        }}/>;
                    })}
                </div>
            </div>
            <div className="m-4">
                <span className="text-2xl font-light">{activeIndex + 1}</span> <span
                className='text-solidLove text-2xl font-light'>{contents.length}</span>
            </div>

        </div>

    );
};

export default Carousel;
