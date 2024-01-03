import {useNavigate, useParams} from "react-router-dom";
import React from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import {CrossIcon} from "../../assets/svg/cross-icon";
import ImageWithLoading from "../../components/Image/image";


const SingleArt = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const art = {
        id: 4,
        artist: "Artist 3",
        title: "Title 3",
        costAud: 70,
        valueAud: 140,
        imageUrl: "https://picsum.photos/400/258",
        date: "2021-01-01",
        material: "acrylic, Flashe and wax pastel on canvas",
        dimensions: "100 x 100 cm",
    };


    return (
        <PrivateLayout pageTitle="Archive" noHeader footer={false}>
            <div className="flex justify-between items-start p-5">
                <div>
                    {/* Title */}
                    <div className='flex items-center justify-between'>
                        <h2 className="mt-8 cursor-pointer" onClick={() => {
                            navigate(`/artist/${art.id}`);
                        }}>{art?.artist}</h2>
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
                        className={`flex justify-between items-center my-5  cursor-pointer`}>
                        <p className='text-black'>1000 AUD</p>
                    </div>
                </div>
                <div className="w-3/5 mt-20">
                    <div className="shadow-recommendation">
                        <ImageWithLoading
                            src={art?.imageUrl}
                            alt="Card Image"
                        />
                    </div>
                </div>
                <div className='cursor-pointer' onClick={() => {
                    // go back to the previous page if possible
                    // else go to the home page

                    if (window.history.length > 2) {
                        window.history.back();
                    } else {
                        navigate('/recommendations');
                    }

                }}>
                    <CrossIcon/>
                </div>
            </div>
            <div className='my-10'></div>
        </PrivateLayout>
    );

};


export default SingleArt;