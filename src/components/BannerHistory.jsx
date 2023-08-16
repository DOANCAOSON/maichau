import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import bannerHistory from "../assets/img/banerhistory.png";
import cu from "../assets/img/cu.png";
import { useInView } from "framer-motion";

export const BannerHistory = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

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
                        className="sm:h-[100%] h-[500px] lg:h-[305px] flex sm:py-[32px] lg:py-[18px]  "
                    >
                        <div className=" flex items-center sm:items-start m-auto ">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ amount: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                }}
                                className={`sm:pl-px-[25px] sm:pr-px-[20px] w-[30%] h-auto flex justify-end  px-4 `}
                            >
                                <div
                                    style={{
                                        backgroundImage: `url(${cu})`,
                                    }}

                                    className="h-[260px] w-[129px] text-4xl sm:text-lg sm:h-[250px]  flex  items-center text-end text-colorText font-BeautiqueDisplay "
                                >
                                    Câu chuyện thương hiệu
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ amount: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                }}
                                className="w-[70%] px-4">
                                <p

                                    className={`w-[60%] sm:w-[100%] text-left font-interRegular text-base m-0`}
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
                            </motion.div>

                        </div>
                    </div>
                </span>
            </section>
        </div>
    );
};
