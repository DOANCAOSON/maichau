import React from "react";
import logo from "../../src/assets/img/logo.png";
import logofooter from "../../src/assets/img/logomaichaufooter.svg";

export const Footers = () => {
    return (
        <div className="bg-primary h-[385px] pt-[68px]">
            <div className="grid gap-4 grid-cols-3 m-auto w-[1120px]">
                <div>
                    <img
                        className="w-[157px] h-[100px]"
                        src={logofooter}
                    />
                </div>
                <div className="text-left text-color">
                    <div className="font-BeautiqueDisplay mb-4">
                        Địa chỉ
                    </div>
                    <div className="font-interRegular text-base mb-2">
                        Cơ sở HN1: Số 48 phố Đỗ Quang, P.
                        Trung Hoà, Q. Cầu Giấy, Hà Nội
                    </div>
                    <div className="font-interRegular text-base mb-2">
                        Cơ sở HN2: Số 18 liền kề 9, KĐT Văn
                        Phú, P. Phú La, Q. Hà Đông, Hà Nội
                    </div>
                    <div className="font-interRegular text-base mb-2">
                        Cơ sở ĐN: 55 - 61 Hồ Nghinh, P.
                        Phước Mỹ, Q. Sơn Trà, Đà Nẵng
                    </div>
                    <div className="font-interRegular text-base mb-2">
                        Cơ sở HB: Tổ Ngọc 2, P. Trung Minh,
                        Kỳ Sơn, Hòa Bình
                    </div>
                </div>
                <div>
                    <div className="grid gap-4 grid-cols-2">
                        <div className="font-interRegular text-base text-color">
                            <div className="font-BeautiqueDisplay mb-4">
                                Thời gian mở cửa
                            </div>
                            <div>
                                6:30 – 21:30 Monday - Sunday
                            </div>
                        </div>
                        <div className="font-interRegular text-base text-color">
                            <div className="font-BeautiqueDisplay mb-4">
                                Liên hệ
                            </div>
                            <div>
                                0123456789
                                MaichauHN@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="mt-[39px]">
                        <btn className="text-colorText  drop-shadow-xl  mb-[39px] rounded-full  bg-color px-[20px] py-[10px]">
                            LIÊN HỆ NHƯỢNG QUYỀN
                        </btn>
                    </div>
                </div>
            </div>
        </div>
    );
};
