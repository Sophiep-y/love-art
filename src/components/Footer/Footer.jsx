import React from "react";
import { footerContent } from "./content";
import { Logo } from "../../assets/svg";

export const Footer = ({ footer, absolute , sticky=true, ref}) => {
  return (
    <footer ref={ref}
      className={`${
        absolute
          ? "absolute bg-white bottom-0 flex justify-between mb-4"
          :
            sticky? `flex justify-between bottom-0 left-4 sticky bg-white mb-4`:
            `flex justify-between bottom-0 left-4 bg-white mb-4`
      }`}
    >
      {footer && <Logo />}
      {/* {footerContent?.map((item) => ( */}
      <div className="w-1/5 text-primary">
        <span>
          LoveArt acknowledges the Gadigal peoples of the Eora Nation, the
          traditional custodians of the Sydney region, and recognises their
          continuous connection to culture, community and Country.
        </span>
      </div>
      {/* ))} */}
      <div className="w-1/5 text-primary">
        <span>
          TEL. +61293277538 <br /> EMAIL. mail@loveart.com
          <br /> INSTA. @loveartinterntional
          <br />© 2022 — ABN 69 003 636 575
        </span>
      </div>
      <div className="w-1/5 text-primary">
        <span>
          61 Ocean St <br />
          Woollahra, Sydney 2025 <br />
          NSW, Australia
        </span>
      </div>
    </footer>
  );
};
