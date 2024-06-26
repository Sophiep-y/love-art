import React from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import ActiveSlider from "./Slider";
import ArtDetailSidebarStateLess from "../../components/ArtCard/ArtSidebarStateless";
import userArtDetailSidebar from "../../hooks/useArtDetailSidebar";
import AnimationLayout from "../../components/AnimationLayout/AnimationLayout";
import { useDataQuery } from "../../hooks/crud/data.query";
import { API_END_POINTS } from "../../utils/api-endpoint";

const Recommends = () => {
  const {
    isCollapsed,
    isUnCollapse,
    isNavigation,
    selectedArtForSidebar,
    toggleSidebar,
  } = userArtDetailSidebar();

  const { data: recommendList } = useDataQuery({
    url: API_END_POINTS.recommendation,
  });

  return (
    <AnimationLayout>
      <PrivateLayout title={"Recommends"} className="max-h-screen">
        <div className="md:mt-4 mt-0">
          <ActiveSlider toggleSidebar={toggleSidebar}></ActiveSlider>
          <div className="mt-16"></div>
          <ArtDetailSidebarStateLess
            art={selectedArtForSidebar}
            showIcon={false}
            isCollapsed={isCollapsed}
            isUnCollapse={isUnCollapse}
            isNavigation={isNavigation}
            toggleSidebar={toggleSidebar}
          ></ArtDetailSidebarStateLess>
        </div>
      </PrivateLayout>
    </AnimationLayout>
  );
};

export default Recommends;
