import ImageWithLoading from "../Image/image";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import LoveButton from "../../assets/svg/love-button";

const ArtCard = ({art, index}) => {
    const navigate = useNavigate();
    const [isLoved, setIsLoved] = useState(false)


    return (<div
        className={`${index > 1 ? "mt-10" : "mt-0"} h-auto w-30% max-w-md mx-auto  bg-white overflow-hidden`}
    >

        {/* Image */}
        <div className="h-260 w-30% shadow-recommendation">
            {/*<img*/}
            {/*  className="h-full w-full object-cover"*/}
            {/*  src={item?.imageUrl}*/}
            {/*  alt="Card Image"*/}
            {/*/>*/}
            <ImageWithLoading
                src={art?.imageUrl}
                alt="Card Image"
            />
        </div>

        {/* Title */}
        <div className='flex items-center justify-between'>
            <h2 className="mt-8 cursor-pointer" onClick={() => {
                navigate(`/artist/${art.id}`);
            }}>{art?.artist}</h2>

            <div className=' transition-colors duration-300  ease-in-out ' onClick={() => {
                setIsLoved(!isLoved)
            }}>
                <LoveButton isLoved={isLoved}></LoveButton>

            </div>

        </div>

        {/* title */}
        <div>
            <p className="italic font-light">{art?.title}</p>
        </div>

        {/* Details */}
        <div>
            <p className=" text-primary font-light">{art?.material}</p>
        </div>

        {/* Dimensions */}
        <div>
            <p className=" text-primary font-light">{art?.dimensions}</p>
        </div>


        {/* Details */}
        <div
            className={`flex justify-between items-center py-2  cursor-pointer`}>
            <p className='text-black'>1000 AUD</p>
            <p className="font-light hover:text-black text-primary " onClick={() => {
            }}>DETAILS</p>
        </div>

    </div>)

}

export default ArtCard;