import React from "react";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import ActiveSlider from "./Slider";

export default function Recommends() {
    return (
        <PrivateLayout title={"Recommends"}>
            <div className='mt-16'>
                <ActiveSlider></ActiveSlider>
            </div>
        </PrivateLayout>
    );
}
