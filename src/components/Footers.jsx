import React from "react";
import logofooter from "../../src/assets/img/logomaichaufooter.svg";

export const Footers = () => {
    return (
        <div className="bg-primary h-auto pt-[68px] px-[20px] py-[40px]">
            <div className="flex sm:flex-wrap gap-[88px] m-auto w-[1120px]">
                <div className="sm:w-[100%]">
                    <img
                        className="w-[157px]  h-[100px] sm:h-[80px] sm:w-[126px]"
                        src={logofooter}
                    />
                </div>
                <div className="flex-2 text-left text-color">
                    <div className="font-BeautiqueDisplay mb-4 pb-[20px]">
                        Địa chỉ
                    </div>
                    <div className="font-interRegular text-base mb-2 pb-[12px]">
                        Cơ sở HN1: Số 48 phố Đỗ Quang, P.
                        Trung Hoà, Q. Cầu Giấy, Hà Nội
                    </div>
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
                    <div className="flex-1 grid gap-4 lg:grid-cols-2 sm:grid-cols-1 pb-[32px]">
                        <div className="font-interRegular text-base text-color">
                            <div className="font-BeautiqueDisplay mb-4">
                                Thời gian mở cửa
                            </div>
                            <div className="pb-[12px]">
                                6:30 – 21:30 Monday - Sunday
                            </div>
                        </div>
                        <div className="font-interRegular text-base text-color pb-[32px]">
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
            </div>
        </div>
    );
};
