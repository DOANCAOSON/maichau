import React from "react";
import logofooter from "../../src/assets/img/logomaichaufooter.svg";

export const Footers = () => {
    return (
        <div className="bg-primary h-auto pt-[68px] px-[20px] py-[40px]">
            <div className="flex sm:flex-wrap gap-[99px] sm:gap-[32px] m-auto w-[1121px]">
                <div className="sm:w-[100%]">
                    <div className="w-[157px] h-[100px] sm:w-[126px] sm:h-[80px]">
                        <img src={logofooter} />
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-[88px] sm:gap-[0px]">
                    <div className="text-left sm:w-[100%] text-color">
                        <ul className="font-BeautiqueDisplay  mb-4 sm:mb-[12px] pb-[20px] w-[352px] sm:w-[300px]">
                            <li className="font-BeautiqueDisplay text-[18px] mb-5">
                                Địa chỉ
                            </li>
                            <li className="font-interRegular text-base mb-2 ">
                                Cơ sở HN1: Số 48 phố Đỗ
                                Quang, P. Trung Hoà, Q. Cầu
                                Giấy, Hà Nội
                            </li>
                            <li className="font-interRegular text-base mb-2 ">
                                Cơ sở HN2: Số 18 liền kề 9,
                                KĐT Văn Phú, P. Phú La, Q.
                                Hà Đông, Hà Nội
                            </li>
                            <li className="font-interRegular text-base mb-2">
                                Cơ sở ĐN: 55 - 61 Hồ Nghinh,
                                P. Phước Mỹ, Q. Sơn Trà, Đà
                                Nẵng
                            </li>
                            <li className="font-interRegular text-base mb-2 sm:mb-0">
                                Cơ sở HB: Tổ Ngọc 2, P.
                                Trung Minh, Kỳ Sơn, Hòa Bình
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="grid sm:w-[100%] gap-[88px] sm:gap-[0px]  grid-cols-2 sm:grid-cols-1 ">
                            <div className="font-interRegular text-base text-color">
                                <ul>
                                    <li className="font-BeautiqueDisplay text-[18px] mb-5 sm:mb-[20px]">
                                        Thời gian mở cửa
                                    </li>
                                    <li className="font-interRegular text-base mb-8 sm:mb-[36px]">
                                        6:30 – 21:30 Monday
                                        - Sunday
                                    </li>
                                </ul>
                            </div>
                            <div className="font-interRegular text-base text-color">
                                <ul className="font-BeautiqueDisplay">
                                    <li className="font-BeautiqueDisplay text-[18px] mb-5 sm:sm:mb-[20px]">
                                        Liên hệ
                                    </li>

                                    <li className="font-interRegular text-base mb-8 sm:mb-[36px]">
                                        0123456789
                                        MaichauHN@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button className="text-colorText text-base drop-shadow-xl font-interBold  rounded-full  bg-color px-[20px] py-[10px] sm:w-[100%] h-[100%] w-[80%] ">
                                LIÊN HỆ NHƯỢNG QUYỀN
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="m-auto w-[1121px]  gap-[99px]">
                <div className="flex gap-">
                    <div className="" >
                        <div className="w-[157px] h-[100px]">
                                <img className="w-[157px]  sm:w-[100%] object-cover " src={logofooter} />
                        </div>
                    </div>
                    <div className="flex gap-[88px]">
                        <div className="sm:w-[100%] text-left text-color">
                            <ul className="font-BeautiqueDisplay mb-4 pb-[20px]">
                                Địa chỉ
                                <li className="my-[12px] mt-[20px] font-interRegular text-base">
                                    Cơ sở HN1: Số 48 phố Đỗ Quang, P. Trung Hoà,
                                    Q. Cầu Giấy, Hà Nội
                                </li>
                                <li className="my-[12px] font-interRegular text-base">
                                    Cơ sở HN1: Số 48 phố Đỗ Quang, P. Trung Hoà,
                                    Q. Cầu Giấy, Hà Nội
                                </li>
                                <li className="my-[12px] font-interRegular text-base">
                                    Cơ sở HN1: Số 48 phố Đỗ Quang, P. Trung Hoà,
                                    Q. Cầu Giấy, Hà Nội
                                </li>
                                <li className="my-[12px] font-interRegular text-base">
                                    Cơ sở HN1: Số 48 phố Đỗ Quang, P. Trung Hoà,
                                    Q. Cầu Giấy, Hà Nội
                                </li>
                            </ul>
                        </div>
                        <div className="sm:w-[100%]">
                            <div className="flex gap-[88px] text-left text-color">
                                <ul className="font-BeautiqueDisplay mb-4  pb-[20px] gap-[12px]">
                                    Thời Gian Mở Cửa
                                    <li className="my-[12px]  mt-[20px] font-interRegular text-base">
                                        6:30 – 21:30 Monday - Sunday
                                    </li>
                                </ul>
                                <ul className="font-BeautiqueDisplay">
                                    Liên hệ
                                    <li className="my-[12px]  mt-[20px] font-interRegular text-base">
                                        0123456789 MaichauHN@gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div className="w-[100%]  text-color">
                                <button className="text-colorText text-base drop-shadow-xl font-interBold  rounded-full  bg-color px-[20px] py-[10px] sm:w-[100%] h-[100%] lg:w-[80%]">
                                    Liên hệ nhượng quyền
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
