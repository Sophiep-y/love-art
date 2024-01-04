import React, {useState} from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import ActiveSlider from "./Slider";
import ArtDetailSidebarStateLess from "../../components/ArtCard/ArtSidebarStateless";

export default function Recommends() {

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isUnCollapse, setIsUnCollapse] = useState(false);
    const [isNavigation, setIsNavigation] = useState(false);


    const [selectedArtForSidebar, setSelectedArtForSidebar] = useState(
        null
    )


    const toggleSidebar = ({art}) => {
        console.log(art);

        if (art) {
            setSelectedArtForSidebar(art)
        }

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


    return (
        <PrivateLayout title={"Recommends"}>
            <div className='mt-16'>
                <ActiveSlider toggleSidebar={toggleSidebar}></ActiveSlider>
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
    );
}
