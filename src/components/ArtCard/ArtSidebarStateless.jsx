import {CrossIcon} from "../../assets/svg/cross-icon";
import React from "react";
import {HamburgerIcon} from "../../assets/svg";
import ImageWithLoading from "../Image/image";


const ArtDetailSidebarStateLess = ({
                                       art,
                                       icon,
                                       showIcon = true,
                                       isCollapsed,
                                       isUnCollapse,
                                       isNavigation,
                                       toggleSidebar
                                   }) => {


    const info = {
        artist: {
            title: "Artist",
            value: art?.artist,
            needMargin: false,
        },
        title: {
            title: "Title",
            value: art?.title,
            needMargin: false,
        },
        date: {
            title: "Date",
            value: art?.date,
            needMargin: false,
        },
        medium: {
            title: "Medium",
            value: art?.medium,
            needMargin: false,
        },
        dimensions: {
            title: "Dimensions",
            value: art?.dimensions,
            needMargin: false,
        },
        category: {
            title: "Category",
            value: art?.category,
            needMargin: false,
        },
        location: {
            title: "Location",
            value: art?.location,
            needMargin: false,
        },
        price: {
            title: "Price",
            value: `${art?.currency} ${art?.price}`,
            needMargin: false,
        },

        artistBio: {
            title: "Artist Bio",
            value: art?.artistBio,
            needMargin: true,
        },
        artDescription: {
            title: "Work Description",
            value: art?.artDescription,
            needMargin: true,
        },
        provenance: {
            title: "Provenance",
            value: art?.provenance,
            needMargin: true,
        },

    }


    const sidebarBaseClasses = "absolute bg-white z-10 shadow-2xl shadow-modalShadowColor py-5";
    const transitionClasses = "transform transition-all duration-300 ease-in-out";
    const sidebarClasses = `${isUnCollapse ? 'block' : 'hidden'}  ${sidebarBaseClasses} py-5 ${isNavigation ? 'w-full'
        : 'w-1/3'} h-full top-0 pt-0.5 pl-5 ${isNavigation ? 'left-0' : 'right-0'} ${transitionClasses} ${isCollapsed ? 'translate-x-full' : isNavigation ? 'translate-x-0' : '-translate-x-0'}`;


    return (<div>

        {/*open*/}

        {showIcon &&
            <div onClick={(e) => {
                e.stopPropagation();
                toggleSidebar({art:null});
            }} className="cursor-pointer text-primary text-2xl uppercase hover:text-black">
                {icon ?? <HamburgerIcon/>}
            </div>}


        {/*overlay*/}
        {(!isCollapsed) ? <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10 duration-300 ease-in-out "
            onClick={() => {
                toggleSidebar({art:null});
            }}
        ></div> : null}

        {/*sidebar*/}
        <div className={`${sidebarClasses} overflow-y-scroll `}>
            {/*close*/}
            <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={(e) => {
                    toggleSidebar({art:null});
                }}
            >
                <CrossIcon/>
            </div>


            <div>
                {/*artist*/}
                <div className="text-2xl">
                    {art?.artist}
                </div>
                {/*title*/}
                <div className="text-2xl italic ">
                    {art?.title}
                </div>
                {/*image*/}
                <div className="shadow-recommendation mr-8 my-4">
                    <ImageWithLoading
                        src={art?.imageUrl}
                        alt="Card Image"
                    />
                </div>

                {/*info*/}
                {
                    info && Object.keys(info).map((key, index) => {
                        const item = info[key];
                        return (<div key={index} className='mr-8 '>
                            <div className={`flex items-start justify-items-start  ${item.needMargin ? 'my-8' : ''}`}>
                                <div className={`text-primary w-32 w-min-32`}>
                                    {item.title}
                                </div>
                                <div className="text-black font-light w-4/5">
                                    {item.value}
                                </div>
                            </div>
                        </div>);
                    })
                }

                {/*button*/}
                <div className="w-full my-10">
                    <div className=" py-2 w-full">
                        <button
                            className="  w-full bg-white hover:bg-primary text-black font-semibold hover:text-white py-2  border border-black hover:border-primary"
                            onClick={() => {
                            }}
                        >
                            ENQUIRE
                        </button>
                    </div>
                </div>

            </div>


        </div>
    </div>);
}

export default ArtDetailSidebarStateLess;