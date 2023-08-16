import React from "react";
import logo from "../../src/assets/img/logo.png";

export const Header = () => {
    return (
        <div className="w-[100%] flex justify-center bg-primary">
            <div className="w-[1120px] h-[126px] m-auto flex justify-between items-center">
                <div className="w-[20%]">
                    <img
                        className="h-[100px] w-[100px]"
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className="flex items-center w-[80%] ">
                    <div className="flex justify-end items-center  font-BeautiqueDisplay  text-color ">
                        <div className="w-[113px] h-[40px] leading-[40px]  border-b-[3px] border-backgroundColorWhite ">
                            Về chúng tôi
                        </div>
                        <div className="w-[113px] h-[40px] leading-[40px] ">
                            Thực Đơn
                        </div>
                        <div className="w-[113px] h-[40px] leading-[40px] ">
                            Tin Tức
                        </div>
                        <div className="w-[113px] h-[40px] leading-[40px] ">
                            Hình ảnh
                        </div>
                        <div className="w-[113px] h-[40px] leading-[40px] ">
                            Tuyển dụng
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="w-[189px] h-[54px] ml-[20%] font-Inter rounded-full  bg-backgroundColorWhite text-colorText text-base font-bold">
                        Đặt Bàn ngày
                    </button>
                </div>
            </div>
        </div>
    );
};
