import React from "react";
import {Logo} from "../../assets/svg";

export const Footer = ({footer, absolute, sticky = true, ref}) => {


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


    return (
        <footer ref={ref}
                className={`${
                    absolute
                        ? "absolute bg-white bottom-0 flex justify-between mb-4"
                        :
                        sticky ? `flex justify-between bottom-0 left-4 sticky bg-white mb-4` :
                            `flex justify-between bottom-0 left-4 bg-white mb-4`
                }`}
        >
            {footer && <Logo/>}
            <div className="w-1/5 text-primary">
        <span>
          PO Box 389<br/>Woollahra, Sydney<br/>NSW, Australia 2025
<span onClick={() => {
}} className='cursor-pointer hover:text-black'> +61293277538 </span> <br/>mail@loveart.com <br/>@loveartinterntional
<br/>© 2022 — ABN 69 003 636 575
        </span>
            </div>
            <div className="w-1/5 text-primary">

                {
                    links.map((item, index) => (
                        <div className="cursor-pointer hover:text-black">{item?.title}</div>
                    ))
                }

            </div>
            <div className="w-1/5 text-primary">
                <div>
                    LoveArt acknowledges the Gadigal peoples of the Eora Nation, the traditional custodians of the
                    Sydney region, and recognises their continuous connection to culture, community and Country.
                </div>
                <div className='mt-5'>
                    Site by Patrick Mason
                </div>

            </div>
        </footer>
    );
};
