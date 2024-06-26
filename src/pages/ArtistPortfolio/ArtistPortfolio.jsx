import { useParams } from "react-router-dom";
import React from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import { CrossIcon } from "../../assets/svg/cross-icon";
import Grid from "./Grid";
import Sidebar from "../../components/Sidebar/Sidebar";
import SideBarArtistBio from "./SidebarBio";
import { formatDateRange } from "./formatted_date";
import useIsMobile from "../../hooks/useIsMobile";
import AnimationLayout from "../../components/AnimationLayout/AnimationLayout";

const ArtistPortfolio = () => {
  const { id } = useParams();

  const artist = {
    artist: "Artist 1",
    title: "Title 1",
    dateStart: "2021-01-01",
    dateEnd: "2021-11-01",
  };

  const dateFormatted = formatDateRange(artist.dateStart, artist.dateEnd);
  const isMobile = useIsMobile();

  return (
    <AnimationLayout>
      <PrivateLayout
        pageTitle="Archive"
        noHeader
        footer
        footer_on_stick={false}
      >
        <div
          className={`${isMobile ? "" : "flex justify-between"} items-start p-5`}
        >
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-light  cursor-pointer">
                {artist?.artist}
              </h2>
              <p className="text-primary text-2xl italic font-light">
                {artist?.title}
              </p>
              <p className="text-black font-light my-5">
                {dateFormatted[0]} &#x2E3A;
                <br />
                {dateFormatted[1]}
              </p>
              <SideBarArtistBio
                icon={
                  <div
                    className={`text-primary text-2xl cursor-pointer uppercase ${isMobile ? "my-10" : "my-60 "} hover:text-black`}
                  >
                    {isMobile ? "Show Info →" : "INFO"}
                  </div>
                }
              />
            </div>

            {isMobile && <Sidebar icon={<CrossIcon />} fromSidebarNav={true} />}
          </div>

          <div className={`${isMobile ? "w-full" : "w-3/5 mt-20"}`}>
            <Grid />
          </div>

          {!isMobile && <Sidebar icon={<CrossIcon />} fromSidebarNav={true} />}
        </div>

        <div className="my-10"></div>
      </PrivateLayout>
    </AnimationLayout>
  );
};

export default ArtistPortfolio;
