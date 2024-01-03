import React, {useState} from "react";
import ImageWithLoading from "../../components/Image/image";

const dummyData = [
    {
        id: 1,
        artist: "Artist 1",
        title: "Title 1",
        costAud: 50,
        valueAud: 100,
        imageUrl: "https://picsum.photos/400/259",
        date: "2021-01-01",
    },
    {
        id: 2,
        artist: "Artist 2",
        title: "Title 2",
        costAud: 60,
        valueAud: 120,
        imageUrl: "https://picsum.photos/400/260",
        date: "2021-01-01",

    },
    {
        id: 3,
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/261",
        date: "2021-01-01",

    },
    {
        id: 4,
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/258",
        date: "2021-01-01",

    },
];

const Grid = () => {


    const [hoveringItem, setHoveringItem] = useState(null);


    return (
        <div className="flex flex-wrap">
            {dummyData?.map((item, index) => (
                <div
                    className={`${
                        index > 1 ? "mt-10" : "mt-0"
                    } h-auto w-30% max-w-md mx-auto  bg-white overflow-hidden  ${hoveringItem === item.id? 'grayscale':''}  `}
                    onMouseEnter={
                        () => setHoveringItem(item.id)
                    }

                    onMouseLeave={
                        () => setHoveringItem(false)
                    }

                >
                    {/* Image */}
                    <div className="h-260 w-30% shadow-recommendation">
                        {/*<img*/}
                        {/*  className="h-full w-full object-cover"*/}
                        {/*  src={item?.imageUrl}*/}
                        {/*  alt="Card Image"*/}
                        {/*/>*/}
                        <ImageWithLoading
                            src={item?.imageUrl}
                            alt="Card Image"
                        />
                    </div>

                    {/* Title */}
                    <div>
                        <h2 className="text-xl font-bold mt-4">{item?.artist}</h2>
                    </div>

                    {/* Location, Cost, Value */}
                    <div>
                        <p className="text-black text-sm italic">{item?.title}</p>
                        <p className="text-black">
                            <span className="text-primary uppercase text-sm">Cost:</span> $
                            {item?.costAud}
                        </p>
                        <p className="text-black">
                            <span className="text-primary uppercase text-sm">Value:</span> $
                            {item?.valueAud}
                        </p>
                    </div>

                    {/* Details */}
                    <div
                        className={`flex justify-end items-end py-2  ${hoveringItem === item.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out cursor-pointer`}>
                        <p className="text-gray-600 font-semibold" onClick={()=>{}}>DETAILS &#8594;</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Grid;
