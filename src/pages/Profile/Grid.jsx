import React from "react";

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

const Grid = () => {
    const imageUrl = "https://picsum.photos/400/260";
    return (
        <div className="flex flex-wrap">
            {dummyData?.map((item, index) => (
                <div
                    className={`${
                        index > 1 ? "mt-10" : "mt-0"
                    } h-auto w-30% max-w-md mx-auto  bg-white rounded-md overflow-hidden `}
                >
                    {/* Image */}
                    <div className="h-260 w-30%">
                        <img
                            className="h-full w-full object-cover"
                            src={item?.imageUrl}
                            alt="Card Image"
                        />
                    </div>

                    {/* Title */}
                    <div className="px-4">
                        <h2 className="text-xl font-bold mt-4">{item?.artist}</h2>
                    </div>

                    {/* Location, Cost, Value */}
                    <div className="px-4">
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
                    <div className="flex justify-end items-end px-4 py-2">
                        <p className="text-gray-600 font-semibold">DETAILS</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Grid;
