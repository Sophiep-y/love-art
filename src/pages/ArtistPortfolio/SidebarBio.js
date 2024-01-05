import {CrossIcon} from "../../assets/svg/cross-icon";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {HamburgerIcon} from "../../assets/svg";
import {formatDateRange} from "./formatted_date";

const SideBarArtistBio = ({icon}) => {
    const navigate = useNavigate();


    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isUnCollapse, setIsUnCollapse] = useState(false);


    const [isNavigation, setIsNavigation] = useState(false);


    const handleExtendClick = () => {
        setIsNavigation(!isNavigation);
    };

    const artist = {
        artist: "Artist 1", title: "Title 1", dateStart: "2021-01-01", dateEnd: "2021-11-01",

    };

    const dateFormatted = formatDateRange(artist.dateStart, artist.dateEnd);


    const introText = `
    Here is the latest from the young but ascending Tom Polo following his inclusion (which was a highlight) in this year's Adelaide Biennial....and I still think he's one of the more interesting painters of his generation in Australia...and one of the few who are actively working towards being more Global. This year he showed in Paris during Paris+ par Art Basel, in Singapore, Brussels and just last week at West Bund in Shanghai.
These are very much iconic Tom... working through colour and ambiguous forms to generate a psychological register of characters and personas.
I've put them in order of my preference. Let me know asap if any are of interest, there's always high demand for his work xxxA
    `

    const bioText = `
    Polo lives and works in Sydney. He received a Bachelor of Fine Arts (Hons. Class 1) and Master of Fine Arts from the College of Fine Arts, UNSW in 2007 and 2011 respectively. Recent solo exhibitions include soft secrets, Art on Paper, Galerie Transit (Brussels, 2022); will you, fill me, Yavuz Gallery (Singapore, 2022); of defence and doubt, Galerie Transit, Mechelen (Belgium, 2018); (These Things) Tell Me More About You, Mornington Peninsular Regional Gallery (Victoria, 2017); and What Goes On Here, Tom Polo for Spectrum Now, Art Gallery of New South Wales (Sydney, 2016). Selected group exhibitions include FREE/STATE, Adelaide Biennial of Australian Art, curated by Sebastian Goldspink, Art Gallery of South Australia (Adelaide, 2022); Ramsay Art Prize, Art Gallery of South Australia (Adelaide, 2021); Contact Us, Cement Fondu (Sydney, 2020); The National 2019: New Australian Art, Art Gallery of New South Wales (Sydney, 2019); Beyond Reason: exploring the logic of the imagination, QUT Art Museum (Brisbane, 2018); Meditation on a bone: Albert Tucker beyond the modern, curated by Glenn Barkley, Heide Museum of Modern Art (Melbourne, 2018); Primavera 2017, Museum of Contemporary Art Australia (Sydney, 2017); Looking at Me Through You, Campbelltown Arts Centre (Sydney, 2017); Painting. More Painting, Australian Centre for Contemporary Art (Melbourne, 2016) and Time & Vision: New work from Australian Artists, The Bargehouse (London, 2012).Polo was a recent finalist in the Geelong Contemporary Art Prize and the National Works on Paper Prize in 2022. He was a finalist in the Ramsay Art Prize, Australia’s premier prize for emerging artists (2021), and has been a finalist several times in the Sir John Sulman Art Prize (2021, 2020, 2017). Polo was the winner of the Brett Whiteley 
    `


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


    const sidebarBaseClasses = "fixed bg-white z-10 shadow-2xl shadow-modalShadowColor py-5";
    const transitionClasses = "transform transition-all duration-300 ease-in-out";

    const sidebarClasses = `${isUnCollapse ? 'block' : 'hidden'}  ${sidebarBaseClasses} py-5 ${isNavigation ? 'w-full' : '  md:w-1/3 w-full'} h-full top-0 bottom-0 pt-0.5 pl-5 ${isNavigation ? 'left-0' : 'right-0'} ${transitionClasses} ${isCollapsed ? 'translate-x-full' : isNavigation ? 'translate-x-0' : '-translate-x-0'}`;

    return (<div>

        {/*open*/}
        <div onClick={(e) => {
            e.stopPropagation();
            onClickIcon();
        }} className="cursor-pointer text-primary text-2xl uppercase hover:text-black">
            {icon ?? <HamburgerIcon/>}
        </div>

        {/*overlay*/}
        {(!isCollapsed) ? <div
            className="fixed top-0 bottom-0 left-0 w-full h-full bg-black opacity-50 z-10"

            onClick={() => {
                toggleSideBar();
            }}
        ></div> : null}

        {/*sidebar*/}
        <div className={`overflow-y-auto ${sidebarClasses} p-4`}>
            {/*close*/}
            <div
                className="fixed top-4 right-4 cursor-pointer"
                onClick={(e) => {
                    toggleSideBar();
                }}
            >
                <CrossIcon/>
            </div>


            <div>
                <h2 className="text-2xl font-light mt-4 cursor-pointer">{artist?.artist}</h2>
                <p className="text-primary text-2xl italic font-light">{artist?.title}</p>
                <p className="text-black font-light my-5">{dateFormatted[0]} &#x2E3A;<br/>{dateFormatted[1]}</p>
            </div>

            {/*intro*/}
            <div>
                {introText}
            </div>


            {/*bio*/}
            <div className='uppercase text-primary my-4'>
                Artist Bio
            </div>
            <div>
                {bioText}
            </div>


            <div className="py-2 w-full mr-10 my-10">
                <button
                    className="  w-full bg-white hover:bg-primary text-black font-semibold hover:text-white py-2  border border-black hover:border-primary"
                    onClick={() => {
                        navigate(`/artist/${artist?.id}`);
                    }}
                >
                    ENQUIRE
                </button>
            </div>


            <div className='text-primary text-sm' style={{whiteSpace: "pre-line"}}>
                {`Please notify us by email (amanda@loveart.com) or text (+61 418164462) or phone (+61 2 93277538) depending on the urgency if you are interested in purchasing a work or require more information.\n
                Please remember that this information is provided only to you, the intended recipient, and must not to be passed on to third parties. It is provided on the basis that when acquiring a work on our advice, you deal with galleries and other art institutions through us or notify them of LoveArt's role as your advisor. Following this protocol ensures that your acquisitions are invoiced through LoveArt which in turn facilitates their acurate inclusion in your online catalogue - clients.LoveArt.com - and the negotiation of our fee from the purchase price of the work. This means that, subject to the retainer, our advice is cost neutral to you.
               `}
            </div>
        </div>
    </div>);
}

export default SideBarArtistBio;