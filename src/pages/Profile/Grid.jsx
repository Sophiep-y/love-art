import React from "react";
import ImageWithLoading from "../../components/Image/image";

const dummyData = [{
    artist: "Artist 1", title: "Title 1", costAud: 50, valueAud: 100, imageUrl: "https://picsum.photos/400/260",
}, {
    artist: "Artist 2", title: "Title 2", costAud: 60, valueAud: 120, imageUrl: "https://picsum.photos/400/260",
}, {
    artist: "Artist 3", title: "Title 3", costAud: 70, valueAud: 140, imageUrl: "https://picsum.photos/400/260",
}, {
    artist: "Artist 2", title: "Title 2", costAud: 60, valueAud: 120, imageUrl: "https://picsum.photos/400/260",
}, {
    artist: "Artist 3", title: "Title 3", costAud: 70, valueAud: 140, imageUrl: "https://picsum.photos/400/260",
}, {
    artist: "Artist 2", title: "Title 2", costAud: 60, valueAud: 120, imageUrl: "https://picsum.photos/400/260",
}, {
    artist: "Artist 3", title: "Title 3", costAud: 70, valueAud: 140, imageUrl: "https://picsum.photos/400/260",
}, {
    artist: "Artist 2", title: "Title 2", costAud: 60, valueAud: 120, imageUrl: "https://picsum.photos/400/260",
}, {
    artist: "Artist 3", title: "Title 3", costAud: 70, valueAud: 140, imageUrl: "https://picsum.photos/400/260",
}, {
    artist: "Artist 2", title: "Title 2", costAud: 60, valueAud: 120, imageUrl: "https://picsum.photos/400/260",
}, {
    artist: "Artist 3", title: "Title 3", costAud: 70, valueAud: 140, imageUrl: "https://picsum.photos/400/260",
},];

const Grid = ({isValueHidden, isWishList = false, onEnquire, onRemove, className}) => {


    return (<div className={`flex flex-wrap ${className} `}>
        {dummyData?.map((item, index) => (<div
            className={`${index > 1 ? "mt-20" : "mt-0"} h-auto w-30% max-w-md bg-white items-start mr-auto`}
        >
            {/* Image */}
            <div className="h-260 w-30%">
                <ImageWithLoading
                    src={item?.imageUrl}
                    alt="Card Image"
                />
            </div>

            {/* Title */}
            <div className="">
                <h2 className="text-xl font-bold mt-4">{item?.artist}</h2>
            </div>

            {/* Location, Cost, Value */}
            <div className=" min-h-20">
                <p className="text-black text-sm italic">{item?.title}</p>
                {(<div
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
                </div>)}

            </div>


            {/* Enquire, Remove */}
            <div>
                <div
                    className={`w-full transition-opacity duration-500 ease-in  ${isWishList ? ' opacity-100 scale-100' : ' opacity-0 scale-0 h-0'}`}>
                    <div className="py-2 w-full">
                        <button
                            className="  w-full bg-white hover:bg-primary text-black font-semibold hover:text-white py-2  border border-black hover:border-primary"
                        >
                            ENQUIRE
                        </button>
                    </div>
                    <div className="  py-2 w-full">
                        <button
                            className="  w-full bg-white hover:bg-primary text-black font-semibold hover:text-white py-2  border border-black hover:border-primary"
                        >
                            REMOVE
                        </button>
                    </div>
                </div>
                <div
                    className={`flex justify-end items-end  py-2 transition-opacity duration-500 ease-in  ${!isWishList ? ' opacity-100 scale-100' : ' opacity-0 scale-0 h-0'}`}>
                    <p className="text-primary transition duration-300 hover:text-black  font-semibold cursor-pointer">
                        DETAILS</p>
                </div>
            </div>
        </div>))}
    </div>);
};
export default Grid;
