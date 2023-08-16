import React from "react";
import slider from "../assets/img/slider.png";

export const Slider = () => {
    return (
        <div>
            <div className="h-[520px] relative">
                <img src={slider} alt="slider" />
                <h1 className="font-BeautiqueDisplayMedium text-[56px] text-color absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                    Về chúng tôi
                </h1>
            </div>
        </div>
    );
};
