import React from "react";
import logofooter from "../../src/assets/img/logomaichaufooter.svg";

export const Footers = () => {
    return (
        <div className="bg-primary h-auto pt-[68px] px-[20px] py-[40px]">
            {/* <div className="flex m-auto w-[1121px]">
                <div className="w-[157px] mr-[88px] h-[100px] sm:w-[126px] sm:h-[80px]">
                    <img src={logofooter} />
                </div>

                <div className="text-left text-color ">
                    <div className="font-BeautiqueDisplay mb-4 pb-[20px]">
                        Địa chỉ
                    </div>
                    <p className="font-interRegular text-base mb-2 pb-[12px]">
                        Cơ sở HN1: Số 48 phố Đỗ Quang, P.
                        Trung Hoà, Q. Cầu Giấy, Hà Nội
                    </p>
                    <div className="font-interRegular text-base mb-2 pb-[12px]">
                        Cơ sở HN2: Số 18 liền kề 9, KĐT Văn
                        Phú, P. Phú La, Q. Hà Đông, Hà Nội
                    </div>
                    <div className="font-interRegular text-base mb-2 pb-[12px]">
                        Cơ sở ĐN: 55 - 61 Hồ Nghinh, P.
                        Phước Mỹ, Q. Sơn Trà, Đà Nẵng
                    </div>
                    <div className="font-interRegular text-base mb-2 pb-[12px]">
                        Cơ sở HB: Tổ Ngọc 2, P. Trung Minh,
                        Kỳ Sơn, Hòa Bình
                    </div>
                </div>
                <div>
                    <div className="grid gap-[88px] w-[352px] grid-cols-2 sm:grid-cols-1 pb-[32px]">
                        <div className="font-interRegular text-base text-color">
                            <div className="font-BeautiqueDisplay mb-4">
                                Thời gian mở cửa
                            </div>
                            <div className="pb-[12px]">
                                6:30 – 21:30 Monday - Sunday
                            </div>
                        </div>
                        <div className="w-[425px] font-interRegular text-base text-color pb-[32px]">
                            <div className="font-BeautiqueDisplay mb-4">
                                Liên hệ
                            </div>
                            <div className="pb-[12px]">
                                0123456789
                                MaichauHN@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="pb-[32px]">
                        <button className="text-colorText text-base drop-shadow-xl font-interBold  rounded-full  bg-color px-[20px] py-[10px] sm:w-[100%] h-[100%] lg:w-[80%] ">
                            LIÊN HỆ NHƯỢNG QUYỀN
                        </button>
                    </div>
                </div>
            </div> */}

            <div className="m-auto w-[1121px] flex gap-[99px]">
                <img
                    className="w-[157px] sm:w-[100%] "
                    src={logofooter}
                />
                <div className="flex gap-[88px]">
                    <div className="sm:w-[100%] text-left text-color">
                        <ul className="font-BeautiqueDisplay mb-4 pb-[20px]">
                            Địa chỉ
                            <li className="my-[12px] mt-[20px] font-interRegular text-base">
                                Cơ sở HN1: Số 48 phố Đỗ
                                Quang, P. Trung Hoà, Q. Cầu
                                Giấy, Hà Nội
                            </li>
                            <li className="my-[12px] font-interRegular text-base">
                                Cơ sở HN1: Số 48 phố Đỗ
                                Quang, P. Trung Hoà, Q. Cầu
                                Giấy, Hà Nội
                            </li>
                            <li className="my-[12px] font-interRegular text-base">
                                Cơ sở HN1: Số 48 phố Đỗ
                                Quang, P. Trung Hoà, Q. Cầu
                                Giấy, Hà Nội
                            </li>
                            <li className="my-[12px] font-interRegular text-base">
                                Cơ sở HN1: Số 48 phố Đỗ
                                Quang, P. Trung Hoà, Q. Cầu
                                Giấy, Hà Nội
                            </li>
                        </ul>
                    </div>
                    <div className="sm:w-[100%]">
                        <div className="flex gap-[88px] text-left text-color">
                            <ul className="font-BeautiqueDisplay mb-4  pb-[20px] gap-[12px]">
                                Thời Gian Mở Cửa
                                <li className="my-[12px]  mt-[20px] font-interRegular text-base">
                                    6:30 – 21:30 Monday -
                                    Sunday
                                </li>
                            </ul>
                            <ul className="font-BeautiqueDisplay">
                                Liên hệ
                                <li className="my-[12px]  mt-[20px] font-interRegular text-base">
                                    0123456789
                                    MaichauHN@gmail.com
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
        </div>
    );
};
