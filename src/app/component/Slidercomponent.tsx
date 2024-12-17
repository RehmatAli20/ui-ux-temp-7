"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; 

import "swiper/css";

const cars = [
  {
    id: 1,
    name: "Koenigsegg",
    logo: "/icon/heart.png",
    image: "/images/fer.png",
    price: "$99.00/",
    fule: "80L",
    Person: "2",
  },
  {
    id: 2,
    name: "Nissan GT - R",
    logo: "/icon/heart.png",
    image: "/images/mer.png",
    price: "$80.50/",
    fule: "90L",
    Person: "4",
  },
  {
    id: 3,
    name: "Rolls - Royce",
    logo: "/icon/heart.png",
    image: "/images/Rose.png",
    price: "$96.00/",
    fule: "70L",
    Person: "4",
  },
  {
    id: 4,
    name: "Nissan GT - R",
    logo: "/icon/heart.png",
    image: "/images/mer.png",
    price: "$80.00/",
    fule: "120L",
    Person: "2",
  },
  // { id: 5, name: "Toyota Supra", description: "Japanese Icon", image: "/images/supra.jpg", logo: "/icon/heart.png",g" },
  // { id: 6, name: "BMW i8", description: "Hybrid Supercar", image: "/images/bmw.jpg", logo: "/logos/bmw-logo.png" },
];

export default function SliderComponent() {
  return (
    <div className="2xl:w-[1440px] md:w-[98%] m-auto mt-8">
      {/* Desktop View */}
      <div className="w-[98%]  bg-transparent m-auto h-[44px] flex justify-between items-center ">
        <p className="text-customgray text-[24px] ml-4 ">Popular Car</p>
        <button className="text-customblue text-[24px] mr-4">View All</button>
      </div>

      <div className="hidden lg:flex justify-around gap-6 p-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className="h-[388px] w-[304px]  shadow-lg rounded-lg bg-white
             flex flex-col   items-center
            "
          >
            <div className="w-[90%] m-auto mt-5 h-[20%] flex justify-between  ">
              <div>
                <h3 className="text-xl font-bold">{car.name}</h3>
                <p className="text-customgray">Sport</p>
              </div>
              <div>
                <Image
                  src={car.logo}
                  alt="image"
                  width={20}
                  height={20}
                ></Image>
              </div>
            </div>
            <div className=" w-[100%] h-[64px] flex justify-center relative bottom-9">
              <Image src={car.image} alt="car" width={204} height={64}></Image>
            </div>
            <div className="w-[95%] h-[30%]  flex justify-evenly flex-col">
              <div className="w-[100%] h-[24px]  flex gap-8">
                <div className=" w-[58px] h-[24px] flex gap-2">
                  <Image
                    src={"/icon/gas.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="text-customgray">{car.fule}</p>
                </div>

                <div className=" w-[58px] h-[24px] flex gap-1">
                  <Image
                    src={"/icon/circle.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="text-customgray">Manual</p>
                </div>

                <div className=" w-[58px] h-[24px] flex gap-1">
                  <Image
                    src={"/icon/profile.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="text-customgray">{car.Person}People</p>
                </div>
              </div>

              <div className="w-[100%] h-[60px]  flex justify-evenly items-center">
                <div className="w-[116px] h-[44px]  flex justify-center items-center">
                  <p>{car.price}</p>
                  <p className="text-customgray">day</p>
                </div>
                <button className="w-[116px] h-[44px] bg-customblue rounded-[4px] text-customwhite">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.2} // Show a part of the next card for better visibility
          loop={true}
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id}>
              <div
                key={car.id}
                className=" h-[286px] sm:h-[400px] sm:w-[85%]  w-[240px] mx-auto  mt-4 mb-4  shadow-lg rounded-lg bg-white
             flex flex-col   items-center"
              >
                <div className="w-[90%] m-auto mt-5 h-[20%] flex justify-between ">
                  <div>
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <p className="text-customgray">Sport</p>
                  </div>
                  <div>
                    <Image
                      src={car.logo}
                      alt="image"
                      width={20}
                      height={20}
                    ></Image>
                  </div>
                </div>
                <div className=" w-[100%] h-[64px] flex justify-center relative bottom-9">
                  <Image
                    src={car.image}
                    alt="car"
                    width={204}
                    height={64}
                  ></Image>
                </div>
                <div className="w-[95%] h-[30%] flex justify-evenly flex-col">
                  <div className="w-[100%] h-[24px] flex justify-evenly gap-8">
                    <div className=" w-[58px] h-[24px] flex gap-2">
                      <Image
                        className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
                        src={"/icon/gas.png"}
                        alt="icon"
                        width={24}
                        height={24}
                      ></Image>
                      <p className="text-customgray text-[10px] sm:text-[16px]">{car.fule}</p>
                    </div>

                    <div className=" w-[58px] h-[24px] flex gap-1">
                      <Image
                                              className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"

                        src={"/icon/circle.png"}
                        alt="icon"
                        width={24}
                        height={24}
                      ></Image>
                      <p className="text-customgray text-[10px] sm:text-[16px]">Manual</p>
                    </div>

                    <div className=" w-[58px] h-[24px] flex gap-1">
                      <Image
                                              className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"

                        src={"/icon/profile.png"}
                        alt="icon"
                        width={24}
                        height={24}
                      ></Image>
                      <p className="text-customgray text-[10px] sm:text-[16px]">{car.Person}People</p>
                    </div>
                  </div>

                  <div className="w-[100%] h-[60px] flex justify-evenly items-center">
                    <div className="w-[116px] h-[44px]  flex justify-center  items-center">
                      <p>{car.price}</p>
                      <p className="text-customgray">day</p>
                    </div>
                    <button className=" w-[116px]  h-[44px] bg-customblue rounded-[4px] text-customwhite">
                      Rent Now
                    </button>
                  </div>
                </div>

               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
