import React from "react";
import Image from "next/image";

export default function Topnav() {
  return (
    <div className=" h-[260px] m-auto w-full flex items-center md:h-[124px] 2xl:w-[1440px] relative">
      <div className="h-[357px] w-[768px] flex items-center justify-center 2xl:w-[1320px] md:h-[44px] m-auto md:flex">
        <h1 className="text-customblue w-[108px] h-[28px] font-bold text-[28px] absolute top-10 left-10 md:text-customblue md:h-[44px] md:font-bold md:text-[24px] md:left-[70px]">
          MORENT
        </h1>

        <div className="w-full flex justify-center gap-10 items-center md:h-[44px] md:w-[492px] md:bg-customwhite md:rounded-[70px] shadow-sm md:border-[1px] md:absolute md:left-[260px] md:flex">
          <div className="border-[1px] md:border-none w-[263px] gap-4 h-[48px] flex items-center bg-customwhite shadow-sm md:shadow-none md:bg-transparent rounded-[5px] md:h-[44px] md:flex md:items-center md:w-[90%] md:gap-5">
            <div>
              <Image src="/icon/search.png" className="relative left-3" alt="icon" width={24} height={24} />
            </div>
            <input type="text" className="h-[42px] w-[90%] border-none outline-none" placeholder="Search Something here.." />
          </div>

          <div className="w-[48px] h-[48px] flex items-center justify-center shadow-sm md:shadow-none md:border-none border-[1px] rounded-[5px] bg-customwhite md:bg-transparent">
            <Image src="/icon/filter.png" className="md:absolute md:right-4 top-3" alt="icon" width={24} height={24} />
          </div>
        </div>

        <div className="absolute top-10 right-6 flex justify-end items-center md:top-10 md:w-[236px] md:h-[44px] md:right-6 md:flex md:justify-between md:items-center">
          <div className="hidden md:flex border-[1px] h-[44px] w-[44px] rounded-[50%] justify-center items-center">
            <Image src="/icon/heart.png" alt="icon" width={24} height={24} />
          </div>
          <div className="hidden md:flex border-[1px] h-[44px] w-[44px] rounded-[50%] justify-center items-center">
            <Image src="/icon/noti.png" alt="icon" width={24} height={24} />
          </div>
          <div className="hidden md:flex border-[1px] h-[44px] w-[44px] rounded-[50%] justify-center items-center">
            <Image src="/icon/setting.png" alt="icon" width={24} height={24} />
          </div>

          <Image src="/icon/Profil.png" className="md:relative md:top-1" alt="icon" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
