import React from "react";
import Image from "next/image";

const cars = [
  {
    id: 1,
    name: "All New Rush",
    logo: "/icon/heart.png",
    image: "/images/car1.png",
    price: "$99.00/",
    fule: "80L",
    Person: "2",
    types: "SUV",
  },
  {
    id: 2,
    name: "CR  - V",
    logo: "/icon/redheart.png",
    image: "/images/car2.png",
    price: "$80.50/",
    fule: "90L",
    Person: "4",
    types: "SUV",
  },
  {
    id: 3,
    name: "All New Rush",
    logo: "/icon/heart.png",
    image: "/images/car3.png",
    price: "$96.00/",
    fule: "70L",
    Person: "4",
    types: "SUV",
  },
  {
    id: 4,
    name: "CR  - V",
    logo: "/icon/redheart.png",
    image: "/images/car4.png",
    price: "$80.00/",
    fule: "120L",
    Person: "2",
    types: "SUV",
  },

  {
    id: 5,
    name: "MG ZX Exclusice",
    logo: "/icon/redheart.png",
    image: "/images/car6.png",
    price: "$80.00/",
    fule: "80L",
    Person: "2",
    types: "SUV",
  },

  {
    id: 6,
    name: "New MG ZS",
    logo: "/icon/heart.png",
    image: "/images/car5.png",
    price: "$80.00/",
    fule: "74L",
    Person: "2",
    types: "Hatchback",
  },

  {
    id: 7,
    name: "MG ZX Excite",
    logo: "/icon/redheart.png",
    image: "/images/car6.png",
    price: "$80.00/",
    fule: "80L",
    Person: "2",
    types: "SUV",
  },

  {
    id: 8,
    name: "New MG ZS",
    logo: "/icon/heart.png",
    image: "/images/car5.png",
    price: "$80.00/",
    fule: "120L",
    Person: "2",
    types: "Hatchback",
  },
];

export default function Recomended() {
  return (
    <div className="   2xl:w-[1440px] mt-8 m-auto  md:w-[98%] h-auto mb-7 2xl:h-[873px]">
      <div className="w-[98%] m-auto h-[44px] flex justify-between items-center ">
        <p className="text-customgray text-[24px] ml-4 ">Recomended Car</p>
      </div>

      <div
        className="  
        w-[100%]   flex flex-wrap justify-around gap-6  p-4"
      >
        {cars.map((car) => (
          <div
            key={car.id}
            className="h-[240px] w-[327px] sm:h-[388px] sm:w-[80%]  sm:flex sm:flex-col sm:items-center sm:justify-between
             md:h-[388px] md:w-[304px]  shadow-lg rounded-lg bg-white
              md:flex md:flex-col   md:items-center
             "
          >
            <div
              className="
             w-[90%] m-auto mt-5 h-[20%] flex justify-between  "
            >
              <div>
                <h3 className="text-xl font-bold">{car.name}</h3>
                <p className="text-customgray">{car.types}</p>
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
            <div
              className=" relative left-[30px] top-8 sm:top-0 sm:left-0 w-[100%] sm:relative sm:bottom-9 sm:flex sm:flex-col sm:items-center
              md:h-[64px] md:flex md:justify-center md:relative md:bottom-9"
            >
              <Image
                className="w-[142px] h-[64px] sm:w-[340px] sm:h-[108px]  md:w-[204px] md:h-[100px]"
                src={car.image}
                alt="car"
                width={204}
                height={100}
              ></Image>
            </div>
            <div
              className=" mt-[40px] h-[74px] w-[100%]  sm:relative  sm:bottom-2 sm:h-[150px] sm:flex sm:flex-col sm:items-center
             sm:justify-around md:relative md:bottom-0
              md:w-[90%] md:h-[30%]  md:flex md:justify-evenly md:flex-col"
            >
              <div
                className="  w-[55px] h-fit  relative left-[230px] bottom-20 sm:relative sm:left-0 sm:bottom-0 flex  flex-col justify-evenly
               sm:w-[100%] sm:h-[24px]  
               sm:flex sm:justify-evenly sm:flex-row
                md:flex md:justify-normal md:gap-8"
              >
                <div className=" w-[70px]  sm:w-[58px]   h-[24px] flex gap-2">
                  <Image
                    className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
                    src={"/icon/gas.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="text-customgray text-[12px] sm:text-[16px]">
                    {car.fule}
                  </p>
                </div>

                <div className=" w-[70px]  sm:w-[58px] h-[24px] flex gap-1">
                  <Image
                    className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
                    src={"/icon/circle.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="text-customgray text-[12px] sm:text-[16px]">
                    Manual
                  </p>
                </div>

                <div className=" w-[70px]  sm:w-[58px] h-[24px] flex gap-1">
                  <Image
                    className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
                    src={"/icon/profile.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="text-customgray text-[12px]  sm:text-[16px]">
                    4People
                  </p>
                </div>
              </div>

              <div className="w-[100%] h-[60px] flex justify-around items-center sm:flex sm:justify-evenly  sm:items-center">
                <div
                  className="relative bottom-16  sm:relative sm:bottom-0
                 w-[116px] h-[44px]  flex justify-center items-center"
                >
                  <p>{car.price}</p>
                  <p className="text-customgray">day</p>
                </div>
                <button
                  className=" sm:relative sm:bottom-0
                 relative bottom-16
                 w-[116px]  h-[44px] bg-customblue rounded-[4px] text-customwhite"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[100px]  w-[100%] flex justify-center items-center ">
        <button className="w-[156px] h-[44px] bg-customblue text-customwhite  border-transparent rounded-[5px]">
          {" "}
          Show more car
        </button>
        <p className=" relative left-[25%]  md:relative  md:left-[30%] xl:relative xl:left-[37%] text-customgray text-[20px]">
          {" "}
          120 Car
        </p>
      </div>
    </div>
  );
}
