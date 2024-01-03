import React from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import Carousel from "../../components/Carousel/Carousel";
import {recommendedData} from "./Carousel";
import ArtDetailSidebar from "./ArtDetailSideBar";

export default function Recommends() {
    return (
        <PrivateLayout title={"Recommends"}>
            <ArtDetailSidebar icon={<div>Details</div>}></ArtDetailSidebar>

                <Carousel contents={recommendedData}>
                </Carousel>
        </PrivateLayout>
    );
}
