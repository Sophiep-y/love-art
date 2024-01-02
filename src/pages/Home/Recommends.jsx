import React from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import Carousel from "../../components/Carousel/Carousel";
import {recommendedData} from "./Carousel";

export default function Recommends() {
    return (
        <PrivateLayout title={"Recommends"}>
                <Carousel contents={recommendedData}>
                </Carousel>
        </PrivateLayout>
    );
}
