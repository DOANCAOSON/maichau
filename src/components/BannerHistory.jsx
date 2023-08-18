import React, { useEffect, useRef, useState } from "react";
import bannerHistory from "../assets/img/banerhistory.png";
import cu from "../assets/img/cu.png";
import { useInView } from "framer-motion";

export const BannerHistory = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div>
            <section ref={ref}>
                <div>
                    <div
                        style={{
                            background: `url(${bannerHistory}) contain `,
                        }}
                        className="sm:h-[100%] h-[305px] flex sm:py-[32px] py-[18px] bg-no-repeat"
                    >
                        <div className="w-[814px]  flex m-auto">
                            <div className="flex gap-[35px] items-center sm:items-start m-auto ">
                                <div className="overflow-hidden sm:pl-px-[25px] sm:pr-px-[20px] w-[20%] h-auto flex justify-end">
                                    <div
                                        style={{
                                            background: `url(${cu}) no-repeat`,
                                            backgroundSize:
                                                "auto",

                                            transform:
                                                isInView
                                                    ? "none"
                                                    : "translateX(-200%)",
                                            opacity:
                                                isInView
                                                    ? 1
                                                    : 1,
                                            transition:
                                                "all 0.5s ease-out 0.8s",
                                        }}
                                        className="sm:text-[28px] leading-[140%] h-[268px] w-[151px] text-end items-center  text-4xl sm:text-lg sm:h-[250px] sm:w-[119px] flex text-colorText font-BeautiqueDisplay "
                                    >
                                        Câu chuyện thương
                                        hiệu
                                    </div>
                                </div>
                                <div className="overflow-hidden w-[80%]">
                                    <p
                                        style={{
                                            transform:
                                                isInView
                                                    ? "none"
                                                    : "translateX(100%)",
                                            transition:
                                                "all 0.5s ease-out 0.8s",
                                        }}
                                        className="sm:w-[100%] leading-[140%] text-left font-interRegular text-base m-0"
                                    >
                                        Vào mùa hè 15 năm
                                        trước, một người con
                                        Tây Bắc, vì đam mê
                                        lớn lao với ẩm thực
                                        quê mình mà từ bỏ
                                        công việc trong
                                        ngành tài chính để
                                        mở một quán ăn nhỏ
                                        mang tên Hằng Mai
                                        Châu. Từ đam mê ấy,
                                        từng công thức món
                                        ăn độc bản đã ra
                                        đời, thu hút ngày
                                        càng nhiều những tâm
                                        hồn yêu ẩm thực miền
                                        núi. Và quán nhỏ
                                        mang tên Mai Châu ấy
                                        đã lớn lên từng
                                        ngày, phát triển
                                        thành thương hiệu
                                        nhà hàng Tây Bắc
                                        vang danh khắp cả
                                        nước của hôm nay.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
