import React from "react";
import ImageWithLoading from "../../components/Image/image";

const dummyData = [
    {
        artist: "Artist 1",
        title: "Title 1",
        costAud: 50,
        valueAud: 100,
        imageUrl: "https://picsum.photos/400/260",
    },
    {
        artist: "Artist 2",
        title: "Title 2",
        costAud: 60,
        valueAud: 120,
        imageUrl: "https://picsum.photos/400/260",
    },
    {
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/260",
    },
    {
        artist: "Artist 2",
        title: "Title 2",
        costAud: 60,
        valueAud: 120,
        imageUrl: "https://picsum.photos/400/260",
    },
    {
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/260",
    }, {
        artist: "Artist 2",
        title: "Title 2",
        costAud: 60,
        valueAud: 120,
        imageUrl: "https://picsum.photos/400/260",
    },
    {
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/260",
    }, {
        artist: "Artist 2",
        title: "Title 2",
        costAud: 60,
        valueAud: 120,
        imageUrl: "https://picsum.photos/400/260",
    },
    {
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/260",
    }, {
        artist: "Artist 2",
        title: "Title 2",
        costAud: 60,
        valueAud: 120,
        imageUrl: "https://picsum.photos/400/260",
    },
    {
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/260",
    },
];

const Grid = ({isValueHidden}) => {
    return (
        <div className="flex flex-wrap justify-start items-start">
            {dummyData?.map((item, index) => (
                <div
                    className={`${
                        index > 1 ? "mt-10" : "mt-0"
                    } h-auto w-30% max-w-md bg-white items-start mr-auto `}
                >
                    {/* Image */}
                    <div className="h-260 w-30%">
                        <ImageWithLoading
                            src={item?.imageUrl}
                            alt="Card Image"
                        />
                    </div>

                    {/* Title */}
                    <div className="px-4">
                        <h2 className="text-xl font-bold mt-4">{item?.artist}</h2>
                    </div>

                    {/* Location, Cost, Value */}
                    <div className="px-4 min-h-20">
                        <p className="text-black text-sm italic">{item?.title}</p>
                        {
                            (<div
                                className={`${isValueHidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} transition-opacity duration-300 ease-in-out`}>
                                <p className="text-black">
                            <span
                                className="text-primary uppercase text-sm">Cost:</span> $
                                    {item?.costAud}
                                </p>
                                <p className="text-black">
                            <span
                                className="text-primary uppercase text-sm">Value:</span> $
                                    {item?.valueAud}
                                </p>
                            </div>)
                        }

                    </div>

                    {/* Details */}
                    <div className="flex justify-end items-end px-4 py-2">
                        <p className="text-primary transition duration-300 hover:text-black  font-semibold cursor-pointer">
                            DETAILS</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Grid;
