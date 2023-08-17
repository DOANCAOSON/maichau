import React, { useEffect, useRef, useState } from "react";
import cu from "../assets/img/cu2.svg";
import iconHeading from "../assets/img/iconHeading.png";
import food from "../assets/img/food.png";
import connguoi from "../assets/img/connguoi.png";
import time from "../assets/img/time.png";
import { useInView } from "framer-motion";
import "../../src/assets/css/artivre.css";
import "animate.css";
import Item from "./Item";

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
    const [test, settest] = useState(true);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

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
                className="h-[638px] relative sm:h-auto lg:pb-0 sm:pb-[90px] w-[100%] mt-[56px] flex justify-center sm:px-[20px] sm:py-[32px]"
            >
                <div className="sm:w[100%] lg:w-[1120px] sm:w-[100%] lg:h-[740px] transition-all">
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="lg:h-[90px] w-[50%] sm:w-[100%] sm:mb-[12px]">
                            <ul className="text-colorText text-left text-[32px] sm:text-lg">
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
                        <div className="grid grid-cols-3 gap-6 sm:gap-3 sm:grid-cols-2 sm:text-base font-inter500 ">
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
                                    className="text-center font-interBoldSemiBold sm:text-base block py-[16px] px-[32px] rounded-full sm:py-[10px] sm:px-[20px]"
                                >
                                    {item.btn}
                                </div>
                            ))}
                        </div>
                    </div>
                    {APIFake.map((item, indexedDB) => {
                        return (
                            <Item
                                active={
                                    indexedDB ===
                                    selectedItem
                                }
                                key={`item_${item.id}_${indexedDB}`}
                                data={item}
                                handleItemClickRight={
                                    handleItemClickRight
                                }
                                handleItemClickLeft={
                                    handleItemClickLeft
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
