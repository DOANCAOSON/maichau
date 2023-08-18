import React, { useEffect, useRef, useState } from "react";
import cu from "../assets/img/cu2.svg";
import iconHeading from "../assets/img/iconHeading.png";
import food from "../assets/img/food.png";
import connguoi from "../assets/img/connguoi.png";
import time from "../assets/img/time.png";
import { useInView } from "framer-motion";
import "../../src/assets/css/artivre.css";

import {
    HiArrowLeft,
    HiArrowRight,
    HiOutlineArrowCircleRight,
    HiOutlineArrowCircleLeft,
} from "react-icons/hi";
import "animate.css";

const APIFake = [
    {
        id: "1",
        btn: "Ẩm thực",
        description:
            "Từ nguồn nguyên liệu ngọt lành 100% vận chuyển từ Tây Bắc, gian bếp Hằng Mai Châu không ngừng sáng tạo để làm nên những món ăn biến đổi theo từng mùa nguyên liệu, nhưng luôn mang đậm bản sắc núi rừng Từng món ăn được tạo ra, là kết tinh của thanh khiết từ nguyên liệu Tây Bắc và nồng ấm từ tình yêu người đầu bếp Mai Châu.",
        img: food,
    },
    {
        id: "2",
        btn: "Không gian",
        description:
            "Món ngon phải được thưởng trước cảnh đẹp. Thực khách khi bước chân vào Hằng Mai Châu sẽ cảm nhận thật rõ hơi thở núi rừng được truyền đạt qua từng chi tiết nội thất. Từ cách bày biện không gian, đồng phục nhân viên đến trang trí và phục vụ món ăn, Hằng Mai Châu mang đến trải nghiệm ẩm thực tròn vẹn sắc hương Tây Bắc. Với xx phòng VIP và không gian chung sức chứa lên đến xx bàn",
        img: time,
    },
    {
        id: "3",
        btn: "Con người",
        description:
            "Phục vụ từ tâm - Đó là tôn chỉ mà Hằng Mai Châu luôn hướng đến trong đào tạo con người. Với đội ngũ đến từ đa vùng miền, Hằng Mai Châu luôn nỗ lực giúp nhân viên tìm hiểu và thấm nhuần văn hoá vùng miền, từ đó truyền tình yêu văn hoá vào phong thái ứng xử và phục vụ khách hàng.",
        img: connguoi,
    },
];

export const Artircle = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [test, settest] = useState(true);

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: false });

    useEffect(() => {
        if (selectedItem >= APIFake.length) {
            setSelectedItem(0);
        }
        if (selectedItem <= -1) {
            setSelectedItem(2);
        }
        return () => {};
    }, [selectedItem]);

    const handleItemClick = (index) => {
        setSelectedItem(index);
        setCurrentIndex(index);
    };
    const handleItemClickRight = () => {
        setSelectedItem(selectedItem + 1);
        settest(false);
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex + 1 + APIFake.length) %
                APIFake.length
        );
    };

    const handleItemClickLeft = () => {
        setSelectedItem(selectedItem - 1);
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + APIFake.length) %
                APIFake.length
        );
    };

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${cu})`,
                    backgroundRepeat: "no-repeat",
                }}
                className="h-[638px] relative sm:h-auto pb-0 sm:bg-none sm:pb-[90px] w-[100%] mt-[56px] flex justify-center sm:px-[20px] sm:py-[32px]"
            >
                <div
                    ref={ref1}
                    className="sm:w[100%] w-[1120px] sm:w-[100%] "
                >
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="lg:h-[90px] w-[50%] sm:w-[100%] sm:mb-[12px]">
                            <ul
                                style={{
                                    transform: isInView1
                                        ? "none"
                                        : "translateY(-200%)",
                                    opacity: isInView1
                                        ? 1
                                        : 0,
                                    transition:
                                        "all 0.7s ease-out 1.2s",
                                }}
                                className="text-colorText text-left text-[32px] sm:text-lg"
                            >
                                Nét
                                <span className="font-interBold ml-2 text-[32px] sm:text-lg">
                                    Tây Bắc
                                </span>
                                <br />
                                <div className="w-[100%] flex items-center ">
                                    <div className="flex mr-9 text-[32px] sm:text-lg">
                                        trong từng chi tiết
                                    </div>
                                    <div>
                                        <img
                                            className="w-[55px] h-[41px] "
                                            src={
                                                iconHeading
                                            }
                                        />
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div
                            style={{
                                transform: isInView1
                                    ? "none"
                                    : "translateY(-200%)",
                                opacity: isInView1 ? 1 : 0,
                                transition:
                                    "all 0.7s ease-out 1.2s",
                            }}
                            className="grid grid-cols-3 gap-6 sm:gap-3 sm:grid-cols-2 sm:text-base font-inter500 "
                        >
                            {APIFake.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor:
                                            selectedItem ===
                                            index
                                                ? "#A82825"
                                                : "#FFFFFF",
                                        cursor: "pointer",
                                        color:
                                            selectedItem ===
                                            index
                                                ? "#FFFFFF"
                                                : "#888888",
                                        border:
                                            selectedItem ===
                                            index
                                                ? "none"
                                                : "1px solid #888888",
                                    }}
                                    onClick={() =>
                                        handleItemClick(
                                            index
                                        )
                                    }
                                    className=" text-center font-interBoldSemiBold sm:text-base block py-[16px] px-[32px] rounded-full sm:py-[10px] sm:px-[20px] hover:bg-primary"
                                >
                                    {item.btn}
                                </div>
                            ))}
                        </div>

                        <section className="mt-[56px] flex sm:flex-wrap gap-[32px] relative  ">
                            <div class="payment-address-form">
                                <div
                                    style={{
                                        transform: isInView1
                                            ? "none"
                                            : "translatex(300%)",
                                        opacity: isInView1
                                            ? 1
                                            : 1,
                                        transition:
                                            "all 0.7s ease-out 1.2s",
                                    }}
                                    className=" sm:w-[100%] font-BeautiqueDisplay text-[56px] sm:text-[40px] text-left mb-[24px] relative parent"
                                >
                                    0
                                    {
                                        APIFake[
                                            currentIndex
                                        ].id
                                    }
                                    .
                                    <span>
                                        {
                                            APIFake[
                                                currentIndex
                                            ].btn
                                        }
                                    </span>
                                    <div className="absolute bottom-0 left-0 w-[30%] h-[5px] bg-primary"></div>
                                </div>
                                <img
                                    style={{
                                        transform: isInView1
                                            ? "none"
                                            : "translateX(-300%)",
                                        opacity: isInView1
                                            ? 1
                                            : 1,
                                        transition:
                                            "all 0.7s ease-out 1.2s",
                                    }}
                                    s
                                    src={
                                        APIFake[
                                            currentIndex
                                        ].img
                                    }
                                />
                                <div
                                    style={{
                                        transform: isInView1
                                            ? "none"
                                            : "translateX(300%)",
                                        opacity: isInView1
                                            ? 1
                                            : 1,
                                        transition:
                                            "all 0.7s ease-out 1.2s",
                                    }}
                                    className="text-left font-interRegular text-lg sm:pb-10 sm:mt-20px"
                                >
                                    <p>
                                        {
                                            APIFake[
                                                currentIndex
                                            ].description
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className=" sm:w-[100%] absolute right-0 bottom-0">
                                <div className="flex justify-end sm:justify-between gap-[32px]">
                                    <div>
                                        <HiArrowLeft
                                            style={{
                                                fontSize: 24,
                                            }}
                                            onClick={() =>
                                                handleItemClickLeft()
                                            }
                                            className="hidden sm:block"
                                        />
                                        <HiOutlineArrowCircleLeft
                                            onClick={() =>
                                                handleItemClickLeft()
                                            }
                                            className="h-[48px] w-[48px]  sm:hidden"
                                        />
                                    </div>
                                    <div>
                                        <HiArrowRight
                                            style={{
                                                fontSize: 24,
                                            }}
                                            onClick={() =>
                                                handleItemClickRight()
                                            }
                                            className="bg-#11111 hidden sm:block "
                                        />
                                        <HiOutlineArrowCircleRight
                                            onClick={() =>
                                                handleItemClickRight()
                                            }
                                            className="h-[48px] w-[48px] sm:hidden "
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
