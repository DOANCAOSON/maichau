import React from "react";
import logo from "../../src/assets/img/logo.png";
import bar from "../../src/assets/img/Vector.png";

export const Header = () => {
    return (
        <div className="w-[100%] flex justify-center bg-primary">
            <div className="sm:w-[100%] sm:h-[73px] sm:px-[2]  lg:w-[1120px] lg:h-[126px] m-auto flex justify-between items-center">
                <a href="#" className="w-[20%]">
                    <img
                        className="lg:h-[100px] sm:ml-[20px]  lg:w-[100px] sm:mr-[4px] sm:w-[48px] sm:h-[31]"
                        src={logo}
                        alt="logo"
                    />
                </a>
                <div className="flex items-center w-[80%] ">
                    <div className="sm:hidden lg:flex flex gap-x-[40px] justify-end items-center  font-BeautiqueDisplay  text-color ">
                        <a
                            href="#"
                            className="leading-[40px]  border-b-[3px] border-backgroundColorWhite "
                        >
                            Về chúng tôi
                        </a>
                        <a
                            href="#"
                            className="leading-[40px] "
                        >
                            Thực Đơn
                        </a>
                        <a
                            href="#"
                            className=" leading-[40px] "
                        >
                            Tin Tức
                        </a>
                        <a
                            href="#"
                            className=" leading-[40px] "
                        >
                            Hình ảnh
                        </a>
                        <a
                            href="#"
                            className=" leading-[40px] "
                        >
                            Tuyển dụng
                        </a>
                    </div>
                </div>
                <div className="flex">
                    <button className="sm:h-[33px]  lg:h-[54px] w-[189px] h-[54px] ml-[20%] font-Inter rounded-full  bg-backgroundColorWhite text-colorText text-base font-bold">
                        Đặt Bàn ngày
                    </button>
                </div>
                <div className="lg:hidden sm:ml-[20px] sm:mr-[20px] w-[32px] ml-[12px] ">
                    <img src={bar} alt="" />
                </div>
            </div>
        </div>
    );
};
