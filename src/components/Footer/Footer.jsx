import React, {useEffect, useState} from "react";
import {Logo} from "../../assets/svg";
import useIsMobile from "../../hooks/useIsMobile";

export const Footer = ({footer, absolute, sticky = true, ref, className}) => {

    const links = [
        {
            title: "About",
            link: "#",
        },

        {
            title: "Services",
            link: "#",
        },

        {
            title: "Projects",
            link: "#",
        },

        {
            title: "Love[f]Art",
            link: "#",
        },

        {
            title: "News",
            link: "#",
        },

        {
            title: "Contact",
            link: "#",
        },

        {
            title: "Client Login",
            link: "#",
        }
    ]


    const isMobile = useIsMobile();

    return (

        <div>
            {footer && isMobile && <Logo className='m-4'/>}

            <footer ref={ref}
                    className={`${className} ${
                        absolute
                            ? "absolute bg-white bottom-0 md:flex block justify-between mb-4"
                            :
                            sticky ? `md:flex  block justify-between bottom-0 left-4 sticky bg-white mb-4` :
                                `flex justify-between bottom-0 left-4 bg-white mb-4`
                    }  md:m-0 m-4`}
            >

                {/*logo*/}
                {!isMobile && footer && <Logo/>}

                {/*address*/}
                <div className="md:w-1/5 w-full text-primary">
        <span>
          PO Box 389<br/>Woollahra, Sydney<br/>NSW, Australia 2025
<span onClick={() => {
}} className='cursor-pointer hover:text-black'> +61293277538 </span> <br/>mail@loveart.com <br/>@loveartinterntional
<br/>© 2022 — ABN 69 003 636 575
        </span>


                </div>

                {/*links*/}
                <div className="md:w-1/5 w-1/2 text-primary">

                    {
                        links.map((item, index) => (
                            <div className="cursor-pointer hover:text-black">{item?.title}</div>
                        ))
                    }

                </div>

                {/*about*/}
                <div className="w-1/5 text-primary md:block hidden">
                    <div>
                        LoveArt acknowledges the Gadigal peoples of the Eora Nation, the traditional custodians of the
                        Sydney region, and recognises their continuous connection to culture, community and Country.
                    </div>
                    <div className='mt-5'>
                        Site by Patrick Mason
                    </div>

                </div>
            </footer>
            {footer && isMobile && <div className='m-4 text-primary'>
                Site by Patrick Mason
            </div>}
        </div>
    );
};
