import React from "react";

export default function FilterSidebar() {
  return (
    <div className="2xl:w-[360px]  lg:w-[18%]  hidden lg:block    bg-[#FFFFFF]   ">
      <div className="h-[352px] w-[176px]  ml-6  flex flex-col justify-between mb-14">
        <p className=" text-md text-customgray">TYPE</p>

        <div className="h-[24px] w-[176px]  flex  gap-2 items-center ">
          <input type="checkbox" className="h-[20px] w-[20px]" />
          <h1 className="flex gap-1">
            Sport <p className="text-customgray">(12)</p>
          </h1>
        </div>

        <div className="h-[24px] w-[176px]  flex  gap-2 items-center ">
          <input type="checkbox" className="h-[20px] w-[20px]" />
          <h1 className="flex gap-1">
            SUV <p className="text-customgray">(10)</p>
          </h1>
        </div>
        <div className="h-[24px] w-[176px]  flex  gap-2 items-center ">
          <input type="checkbox" className="h-[20px] w-[20px]" />
          <h1 className="flex gap-1">
            MPV<p className="text-customgray">(16)</p>
          </h1>
        </div>
        <div className="h-[24px] w-[176px]  flex  gap-2 items-center ">
          <input type="checkbox" className="h-[20px] w-[20px]" />
          <h1 className="flex gap-1">
            Sedan<p className="text-customgray">(14)</p>
          </h1>
        </div>
        <div className="h-[24px] w-[176px]  flex  gap-2 items-center ">
          <input type="checkbox" className="h-[20px] w-[20px]" />
          <h1 className="flex gap-1">
            Coupe <p className="text-customgray">(14)</p>
          </h1>
        </div>

        <div className="h-[24px] w-[176px]  flex  gap-2 items-center ">
          <input type="checkbox" className="h-[20px] w-[20px]" />
          <h1 className="flex gap-1">
            Hatchback<p className="text-customgray">(12)</p>
          </h1>
        </div>
      </div>

      <div className="h-[240px] w-[176px]  ml-6  flex flex-col mb-14 justify-between ">
        <p className="text-md text-customgray">CAPACITY</p>

        <div className="h-[24px] w-[176px]  flex  gap-2 items-center ">
          <input type="checkbox" className="h-[20px] w-[20px]" />
          <h1 className="flex gap-1">
            2 Person <p className="text-customgray">(10)</p>
          </h1>
        </div>

        <div className="h-[24px] w-[176px]  flex  gap-2 items-center ">
          <input type="checkbox" className="h-[20px] w-[20px]" />
          <h1 className="flex gap-1">
            4 Person<p className="text-customgray">(14)</p>
          </h1>
        </div>
        <div className="h-[24px] w-[176px]  flex  gap-2 items-center ">
          <input type="checkbox" className="h-[20px] w-[20px]" />
          <h1 className="flex gap-1">
            6 Person<p className="text-customgray">(16)</p>
          </h1>
        </div>
        <div className="h-[24px] w-[176px]  flex  gap-2 items-center ">
          <input type="checkbox" className="h-[20px] w-[20px]" />
          <h1 className="flex gap-1">
            8 or More<p className="text-customgray">(12)</p>
          </h1>
        </div>
      </div>

      <div className="w-80 mx-auto ml-6  mb-14">
        <p className="text-gray-500 text-md mb-2">PRICE</p>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className="w-[60%] h-3 bg-[#91A3BF] rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5
                   [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-customblue
                 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:border-2 
                   [&::-webkit-slider-thumb]:rounded-full"
        />
        <p className="text-gray-700 mt-2 font-medium">Max. $100.00</p>
      </div>
    </div>
  );
}
