import React from "react";

import { features } from "@/data";
import { Button } from "./ui/MovingBorders";

const Features = () => {
  return (
    <div className=" benefits py-2 w-full">
      <h1 className="heading"  style={{color:"white"}}>
        Key Benefits of <span className="text-purple">Anonysview</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-3 grid-cols-1 gap-10 items-center">
        {/* Left side buttons */}
        <div className="flex flex-col gap-10">
          {features.slice(0, 3).map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="benefits-sec flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className=" benefitsCard lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Center image */}
        <div className="flex flex-col gap-10 eye-img">
        <div className="flex justify-center " style={{borderRadius:"100px"}} >
          <img
            src="/featured.webp"
            alt="Central Image"
               className="w-full max-w-md lg:max-w-lg"
            width="100%"
              style={{ borderRadius: "1rem" }} 
              className="eye-img"
          />
        </div>
          <div className="flex justify-center">
            <img
              src="https://inflact.com/new/img/instagram-viewer/ability-tracker-image.png"
              alt="Central Image"
              className="w-full max-w-md lg:max-w-lg"
              width="100%"
              className="eye-img"
            />
          </div>
        </div>

        {/* Right side buttons */}
        <div className=" benefits flex flex-col gap-10">
          {features.slice(3, 6).map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5 benefits benefitsCard" >
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
