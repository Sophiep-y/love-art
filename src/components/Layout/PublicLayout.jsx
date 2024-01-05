import React from "react";
import AnimationLayout from "../AnimationLayout/AnimationLayout";

const PublicLayout = ({children}) => {
    return (
        <AnimationLayout>
            <div>{children}</div>
        </AnimationLayout>
    );
};

export default PublicLayout;
