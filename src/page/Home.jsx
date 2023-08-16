import React from "react";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { BannerHistory } from "../components/BannerHistory";
import { Artircle } from "../components/Artircle";
import { Footers } from "../components/Footers";

export const Home = () => {
    return (
        <div className="h-auto">
            <div>
                <Header />
                <Slider />
                <BannerHistory />
                <Artircle />
                <Footers />
            </div>
        </div>
    );
};
