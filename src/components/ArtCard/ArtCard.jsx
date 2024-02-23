import ImageWithLoading from "../Image/image";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import LoveButton from "../../assets/svg/love-button";

const ArtCard = ({art, index, navigateToArt = true, toggleSidebar}) => {
    const navigate = useNavigate();
    const [isLoved, setIsLoved] = useState(false)


    return (<div
        className={`${index > 1 ? "mt-10" : "mt-0"} h-auto w-30% max-w-md mx-auto  bg-white overflow-hidden`}

        onClick={() => {
            if (navigateToArt) navigate('/artwork/1')
        }}
    >

        {/* Image */}
        <div className=" w-30% shadow-recommendation">
            {/*<img*/}
            {/*  className="h-full w-full object-cover"*/}
            {/*  src={item?.imageUrl}*/}
            {/*  alt="Card Image"*/}
            {/*/>*/}
            <ImageWithLoading
                src={'https://picsum.photos/400/500'}
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
            <p className="italic font-light">{decodeURIComponent(art?.title)}</p>
        </div>

        {/* Details */}
        <div>
            <p className=" text-primary font-light">{art?.detail}</p>
        </div>

        {/* Dimensions */}
        <div>
            <p className=" text-primary font-light">{art?.dimensions}</p>
        </div>


        {/* Details */}
        <div
            className={`flex justify-between items-center py-2  cursor-pointer`}>
            <p className='text-black'>{art?.purchase_price_orig} AUD</p>

            <div className='font-light hover:text-black text-primary' onClick={() => {
                toggleSidebar({art: art})
            }}>DETAILS


            </div>

        </div>


    </div>)

}

export default ArtCard;