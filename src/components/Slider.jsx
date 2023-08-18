import React from "react";
import slider from "../assets/img/slider.png";

export const Slider = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${slider})`,
                    backgroundSize: " cover",
                }}
                className="flex justify-center items-center w-[100%] h-[520px] sm:h-[228px]"
            >
                <div className="sm:text-[32px] text-[56px] text-color font-BeautiqueDisplayMedium  ">
                    Về chúng tôi
                </div>
            </div>
        </div>
    );
};
