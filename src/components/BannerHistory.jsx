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
                        className=" sm:h-auto lg:h-[305px] flex sm:py-[32px] lg:py-[18px]  "
                    >
                        <div
                            style={{
                                transition:
                                    "all 1.2s linear",
                            }}
                            className={`sm:pl-px-[25px] sm:pr-px-[20px] w-[30%] h-auto flex justify-end  px-4 `}
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
                                className="sm:w-[119px] h-[211px] sm:text-lg lg:h-[268px] lg:w-[151px] lg:text-3xl flex  items-center text-end text-colorText font-BeautiqueDisplay "
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
                                className={`w-[100%] text-left font-interRegular text-base m-0`}
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
