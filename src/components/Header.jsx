import React from "react";
import logo from "../../src/assets/img/logo.png";
import bar from "../../src/assets/img/Vector.png";
import "animate.css";

export const Header = (isOpen) => {
    return (
        <div className="w-[100%] flex justify-center bg-primary">
            <div className="w-[1120px] flex  items-center sm:w-[100%] sm:h-[73px] sm:px-[2px]">
                <a href="#" className="w-[20%] ">
                    <img
                        className="h-[126px] w-[126px] sm:w-[48px] sm:h-[31px] sm:ml-[20px] sm:mr-[4px]"
                        src={logo}
                        alt="logo"
                    />
                </a>
                <div className="flex items-center justify-end w-[80%] ">
                    <div className="sm:hidden flex gap-x-[40px] justify-end items-center font-BeautiqueDisplay text-color ">
                        <a
                            href="#"
                            className="leading-[40px]  border-b-[3px] border-backgroundColorWhite "
                        >
                            Về chúng tôi
                        </a>
                        <a href="#" className="leading-[40px] ">
                            Thực Đơn
                        </a>
                        <a href="#" className=" leading-[40px] ">
                            Tin Tức
                        </a>
                        <a href="#" className=" leading-[40px] ">
                            Hình ảnh
                        </a>
                        <a href="#" className=" leading-[40px] ">
                            Tuyển dụng
                        </a>
                        <a className="ml-[54px]" href="#">
                            <button className="animate__animated animate__swing animate__headshake sm:h-[33px] lg:h-[54px] w-[189px] h-[54px] font-Inter rounded-full bg-backgroundColorWhite text-colorText text-base font-bold">
                                Đặt Bàn ngày
                            </button>
                        </a>
                    </div>
                </div>
                <div className="hidden sm:block sm:ml-[20px] sm:mr-[20px] w-[32px] h-[32px] ml-[12px] ">
                    <img src={bar} alt="" />
                </div>
            </div>
        </div>
    );
};
