import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-96 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative mb-5 z-0">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="View Instagram Story Anonymously"
            className="text-center text-[1rem] sm:text-2xl md:text-5xl lg:text-7xl"
          />
          <p
            className=" sub-head text-center sm:tracking-wide md:tracking-wider mb-4 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            View & download Instagram Profile anonymously (without anyone knowing)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
