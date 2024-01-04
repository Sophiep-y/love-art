import {CrossIcon} from "../../assets/svg/cross-icon";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {HamburgerIcon} from "../../assets/svg";
import ImageWithLoading from "../../components/Image/image";


const art = {
    artist: "Artist 1",
    title: "Sarah Lucas\n" +
        "OOPS!, 2019",
    date: "2021-01-01",
    medium: "Concrete",
    dimensions: "100 x 100 X 100 cm",
    category: 'Sculpture',
    location: 'Sydney',
    price: '10000',
    currency: 'AUD',
    artistBio: `Bedford lived and worked in Western Australia. Selected solo exhibitions include Paddy Bedford: Crossing Frontiers, The Museum of Contemporary Aboriginal Art (Utrecht, 2011); Remembering Forward: Australian Aboriginal Painting Since 1960, Museum Ludwig (Cologne, 2010); Paddy Bedford, Museum of Contemporary Art (Sydney, 2006); Blood on the Spinifex, Ian Potter Museum of Art (Melbourne, 2002-2003); Land Mark, Mirror Mark, Drill Hall Gallery Australian National University and Columbia State University (2000); Kluge - Ruhe Collection of Aboriginal Art, University of Virginia (Virginia, 2000); and Mapping Our Countries, Australian Museum (Sydney, 1999-2000). His work resides in the AGNSW, Sydney, NGV, Melbourne and private and corporate collections in Australia and overseas. His work was also included in the Musée du Quai Branly in Paris.`,
    artDescription: `Bedford’s sparse calm fields of monochrome picketed with white dots in rounding forms sit confidently in any good contemporary Australian collection. While his paintings combine important family dreamings, such as emu, turkey and cockatoo with roads, rivers, the living areas for traditional life and camp life, stock yards and country visited while mustering, they also speak to abstract expressionism’s Ad Reinhardt, Barnet Newman and Franz Kline and Surrealism’s Miro. His history, likely to outway any western artist folklore, is one thwarted with nomadicism and murder, and like his character, these works radiate stoicism.`,
    imageUrl: "https://picsum.photos/400/500",
    provenance: "Acquired directly from the artist by the present owner in 2019",
}




const info = {
    artist: {
        title: "Artist",
        value: art.artist,
        needMargin: false,
    },
    title: {
        title: "Title",
        value: art.title,
        needMargin: false,
    },
    date: {
        title: "Date",
        value: art.date,
        needMargin: false,
    },
    medium: {
        title: "Medium",
        value: art.medium,
        needMargin: false,
    },
    dimensions: {
        title: "Dimensions",
        value: art.dimensions,
        needMargin: false,
    },
    category: {
        title: "Category",
        value: art.category,
        needMargin: false,
    },
    location: {
        title: "Location",
        value: art.location,
        needMargin: false,
    },
    price: {
        title: "Price",
        value: `${art.currency} ${art.price}`,
        needMargin: false,
    },

    artistBio: {
        title: "Artist Bio",
        value: art.artistBio,
        needMargin: true,
    },
    artDescription: {
        title: "Work Description",
        value: art.artDescription,
        needMargin: true,
    },
    provenance: {
        title: "Provenance",
        value: art.provenance,
        needMargin: true,
    },

}


const ArtDetailSidebar = ({icon}) => {
    const navigate = useNavigate();

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isUnCollapse, setIsUnCollapse] = useState(false);

    const [isNavigation, setIsNavigation] = useState(false);

    const handleExtendClick = () => {
        setIsNavigation(!isNavigation);
    };


    const toggleSideBar = () => {
        if (isNavigation) {
            setIsNavigation(false);
        } else {
            if (isUnCollapse) {
                setIsCollapsed(!isCollapsed);
                setTimeout(() => {
                    setIsUnCollapse(!isUnCollapse);
                }, 300);

            } else {
                setIsUnCollapse(!isUnCollapse);
                setTimeout(() => {
                    setIsCollapsed(!isCollapsed);
                }, 0);

            }

        }
    };


    const handleNavigation = (to) => {
        handleExtendClick();
        setTimeout(() => {
            navigate(to);
            toggleSideBar();
        }, 300);

    };


    const onClickIcon = () => {
        toggleSideBar();
    };


    const sidebarBaseClasses = "absolute bg-white z-999 shadow-2xl shadow-modalShadowColor py-5";
    const transitionClasses = "transform transition-all duration-300 ease-in-out";

    const sidebarClasses = `${isUnCollapse ? 'block' : 'hidden'}  ${sidebarBaseClasses} py-5 ${isNavigation ? 'w-full'
        : 'w-1/3'} h-full top-0 pt-0.5 pl-5 ${isNavigation ? 'left-0' : 'right-0'} ${transitionClasses} ${isCollapsed ? 'translate-x-full' : isNavigation ? 'translate-x-0' : '-translate-x-0'}`;

    return (<div className='block z-999 '>

        {/*open*/}
        <div onClick={(e) => {
            e.stopPropagation();
            onClickIcon();
        }} className="cursor-pointer text-primary text-2xl uppercase hover:text-black">
            {icon ?? <HamburgerIcon/>}
        </div>

        {/*overlay*/}
        {(!isCollapsed) ? <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-999"

            onClick={() => {
                toggleSideBar();
            }}
        ></div> : null}

        {/*sidebar*/}
        <div className={`${sidebarClasses} overflow-y-scroll `}>


            {/*close*/}
            <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={(e) => {
                    toggleSideBar();
                }}
            >
                <CrossIcon/>
            </div>


            <div>
                {/*artist*/}
                <div className="text-2xl">
                    {art.artist}
                </div>
                {/*title*/}
                <div className="text-2xl italic ">
                    {art.title}
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

export default ArtDetailSidebar;