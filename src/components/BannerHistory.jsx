import React, { useEffect, useRef, useState } from "react";
import bannerHistory from "../assets/img/banerhistory.png";
import cu from "../assets/img/cu.png";
import { useInView } from "framer-motion";

export const BannerHistory = () => {
    const elementRef = useRef(null);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [translateXCu, setTranslateXcu] =
        useState("-100%");
    const [translateXCu1, setTranslateXcu1] =
        useState("300%");

    useEffect(() => {
        const element = elementRef.current;

        const handleScroll = () => {
            const rect = element.getBoundingClientRect();
            const viewHeight = Math.max(
                document.documentElement.clientHeight,
                window.innerHeight
            );

            if (
                rect.top <= viewHeight &&
                rect.bottom >= 0
            ) {
                setTranslateXcu("0%");
                setTranslateXcu1("0%");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    return (
        <div>
            {/* <div
                ref={elementRef}
                className="banner_container"
            >
                <div
                    style={{
                        backgroundImage: `url(${bannerHistory})`,
                    }}
                    className="h-[305px] flex items-center gap-14"
                >
                    <div
                        style={{
                            transition: "all 1.2s linear",
                        }}
                        className={`w-[30%] h-[100%] flex justify-end items-center px-4 translate-x-[${translateXCu}]`}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${cu})`,
                            }}
                            className="h-[268px] w-[151px] text-[36px] flex  items-center text-end text-colorText font-BeautiqueDisplay "
                        >
                            Câu chuyện thương hiệu
                        </div>
                    </div>

                    <div className="w-[70%] px-4">
                        <p
                            style={{
                                transition:
                                    "all 1.2s linear",
                            }}
                            className={`w-[75%] text-left font-interRegular text-base translate-x-[${translateXCu1}]`}
                        >
                            Vào mùa hè 15 năm trước, một
                            người con Tây Bắc, vì đam mê lớn
                            lao với ẩm thực quê mình mà từ
                            bỏ công việc trong ngành tài
                            chính để mở một quán ăn nhỏ mang
                            tên Hằng Mai Châu. Từ đam mê ấy,
                            từng công thức món ăn độc bản đã
                            ra đời, thu hút ngày càng nhiều
                            những tâm hồn yêu ẩm thực miền
                            núi. Và quán nhỏ mang tên Mai
                            Châu ấy đã lớn lên từng ngày,
                            phát triển thành thương hiệu nhà
                            hàng Tây Bắc vang danh khắp cả
                            nước của hôm nay.
                        </p>
                    </div>
                </div>
            </div> */}
            <section ref={ref}>
                <span
                    style={{
                        transform: isInView
                            ? "none"
                            : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s ease-out 1s",
                    }}
                >
                    <div
                        style={{
                            backgroundImage: `url(${bannerHistory})`,
                        }}
                        className="h-[305px] flex items-center gap-14"
                    >
                        <div
                            style={{
                                transition:
                                    "all 1.2s linear",
                            }}
                            className={`w-[30%] h-[100%] flex justify-end items-center px-4 translate-x-[${translateXCu}]`}
                        >
                            <div
                                style={{
                                    backgroundImage: `url(${cu})`,
                                    transform: isInView
                                        ? "none"
                                        : "translateX(-300%)",
                                    opacity: isInView
                                        ? 1
                                        : 0,
                                    transition:
                                        "all 0.9 ease-out 0.7s",
                                }}
                                className="h-[268px] w-[151px] text-[36px] flex  items-center text-end text-colorText font-BeautiqueDisplay "
                            >
                                Câu chuyện thương hiệu
                            </div>
                        </div>

                        <div className="w-[70%] px-4">
                            <p
                                style={{
                                    transform: isInView
                                        ? "none"
                                        : "translateX(200%)",
                                    opacity: isInView
                                        ? 1
                                        : 0,
                                    transition:
                                        "all 0.9s ease-out 0.5s",
                                }}
                                className={`animate__animated animate__bounce w-[75%] text-left font-interRegular text-base translate-x-[${translateXCu1}]`}
                            >
                                Vào mùa hè 15 năm trước, một
                                người con Tây Bắc, vì đam mê
                                lớn lao với ẩm thực quê mình
                                mà từ bỏ công việc trong
                                ngành tài chính để mở một
                                quán ăn nhỏ mang tên Hằng
                                Mai Châu. Từ đam mê ấy, từng
                                công thức món ăn độc bản đã
                                ra đời, thu hút ngày càng
                                nhiều những tâm hồn yêu ẩm
                                thực miền núi. Và quán nhỏ
                                mang tên Mai Châu ấy đã lớn
                                lên từng ngày, phát triển
                                thành thương hiệu nhà hàng
                                Tây Bắc vang danh khắp cả
                                nước của hôm nay.
                            </p>
                        </div>
                    </div>
                </span>
            </section>
        </div>
    );
};
