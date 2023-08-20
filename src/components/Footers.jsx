import logofooter from "../../src/assets/img/logomaichaufooter.svg";

export const Footers = () => {
    return (
        <div className="bg-primary h-auto pt-[68px] py-[40px]">
            {/* <div className='flex sm:flex-wrap gap-[99px] sm:gap-[32px]  m-auto w-[1121px]'>
        <div className='sm:w-[100%]'>
          <div className='w-[157px] h-[100px] sm:w-[126px] sm:h-[80px]'>
            <img src={logofooter} />
          </div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-1 gap-[88px] sm:gap-[0px]'>
          <div className='text-left sm:w-[100%] text-color'>
            <ul className='font-BeautiqueDisplay  mb-4 sm:mb-[12px] pb-[20px] w-[352px] '>
              <li className='font-BeautiqueDisplay text-[18px] mb-5'>Địa chỉ</li>
              <li className='font-interRegular text-base mb-2 '>
                Cơ sở HN1: Số 48 phố Đỗ Quang, P. Trung Hoà, Q. Cầu Giấy, Hà Nội
              </li>
              <li className='font-interRegular text-base mb-2 '>
                Cơ sở HN2: Số 18 liền kề 9, KĐT Văn Phú, P. Phú La, Q. Hà Đông, Hà Nội
              </li>
              <li className='font-interRegular text-base mb-2'>
                Cơ sở ĐN: 55 - 61 Hồ Nghinh, P. Phước Mỹ, Q. Sơn Trà, Đà Nẵng
              </li>
              <li className='font-interRegular text-base mb-2 sm:mb-0'>
                Cơ sở HB: Tổ Ngọc 2, P. Trung Minh, Kỳ Sơn, Hòa Bình
              </li>
            </ul>
          </div>
          <div>
            <div className='grid sm:w-[100%] gap-[88px] sm:gap-[0px]  grid-cols-2 sm:grid-cols-1 '>
              <div className='font-interRegular text-base text-color'>
                <ul>
                  <li className='font-BeautiqueDisplay text-[18px] mb-5 sm:mb-[20px]'>Thời gian mở cửa</li>
                  <li className='font-interRegular text-base mb-8 sm:mb-[36px]'>6:30 – 21:30 Monday - Sunday</li>
                </ul>
              </div>
              <div className='font-interRegular text-base text-color'>
                <ul className='font-BeautiqueDisplay'>
                  <li className='font-BeautiqueDisplay text-[18px] mb-5 sm:sm:mb-[20px]'>Liên hệ</li>

                  <li className='font-interRegular text-base mb-8 sm:mb-[36px]'>0123456789 MaichauHN@gmail.com</li>
                </ul>
              </div>
            </div>
            <div>
              <button className='text-colorText text-base drop-shadow-xl font-interBold  rounded-full  bg-color px-[20px] py-[10px] sm:w-[100%] h-[100%] w-[80%] '>
                LIÊN HỆ NHƯỢNG QUYỀN
              </button>
            </div>
          </div>
        </div>
      </div> */}

            <div className="m-auto w-[1121px] text-color grid grid-flow-row grid-cols-5 sm:grid-cols-1">
                <div className="col-span-1 sm:pl-[32px]">
                    <div className="w-[157px] h-[100px] sm:w-[126px] sm:h-[80px] col-span-1 ">
                        <img src={logofooter} />
                    </div>
                </div>
                <ul className="font-BeautiqueDisplay  mb-4 sm:mb-[4px]  sm:mt-[32px] pb-[20px] w-[352px] col-span-2  row-span-2 pl-[32px]  ">
                    <li className="font-BeautiqueDisplay text-[18px] mb-5 pr-5">
                        Địa chỉ
                    </li>
                    <li className="font-interRegular text-base mb-2 pr-[24px]">
                        Cơ sở HN1: Số 48 phố Đỗ Quang, P. Trung Hoà, Q. Cầu
                        Giấy, Hà Nội
                    </li>
                    <li className="font-interRegular text-base mb-2 pr-[24px]">
                        Cơ sở HN2: Số 18 liền kề 9, KĐT Văn Phú, P. Phú La, Q.
                        Hà Đông, Hà Nội
                    </li>
                    <li className="font-interRegular text-base mb-2 pr-[24px]">
                        Cơ sở ĐN: 55 - 61 Hồ Nghinh, P. Phước Mỹ, Q. Sơn Trà, Đà
                        Nẵng
                    </li>
                    <li className="font-interRegular text-base mb-2 pr-[24px]">
                        Cơ sở HB: Tổ Ngọc 2, P. Trung Minh, Kỳ Sơn, Hòa Bình
                    </li>
                </ul>
                <div className="grid grid-flow-col grid-cols-2 sm:grid-cols-1 grid-rows-2 sm:grid-rows-3 col-span-2 ">
                    <div className="grid grid-flow-col  col-span-2 sm:col-span-1 sm:grid-rows-2 gap-[88px] sm:gap-[0px]  sm:pl-[32px]">
                        <div className="col-span-1">
                            <div className="font-BeautiqueDisplay text-[18px] mb-5 sm:mb-[20px] w[100%] ">
                                Thời gian mở cửa
                            </div>
                            <div className="font-interRegular text-base ">
                                <div> 6:30 – 21:30</div>
                                <div> Monday - Sunday</div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="font-BeautiqueDisplay text-[18px] mb-5 sm:mb-[20px]">
                                Liên hệ
                            </div>
                            <div className="font-interRegular text-base mb-8 sm:mb-[36px]">
                                <div>0123456789</div>
                                <div>MaichauHN@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 sm:pl-[32px] sm:col-span-1 ">
                        <button className="text-colorText text-base drop-shadow-xl font-interBold   sm:py-[16px] sm:px-[46px]  rounded-full bg-color py-[16px] px-[32px]">
                            LIÊN HỆ NHƯỢNG QUYỀN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
