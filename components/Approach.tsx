import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";


const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading" style={{ color: "white" }}>
        How to use <span className="text-purple">Instagram Story</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="No Account or App Registration Needed"
          icon={<AceternityIcon order={"1"} />}
          des="StoriesDown is a free online tool that enables you to view and download Insta stories without the knowledge of the author and no Instagram limitation. You do not need to login or install any third-party software. Our Instagram stalking function makes us completely in Incognito mode. So you are watching anyone’s Instagram stories, photos, reels videos, posts privately."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
            colors={[
              [91, 81, 216],
              [193, 53, 132],
            ]}
          />
        </Card>
        <Card
          title="Anonymous Instagram Viewer - 100% Anonymity"
          icon={<AceternityIcon order={"2"} />}
          des="You can do anything and keep an eye on anyone. We do not save any story or file on our servers. Our IgAnony viewer makes your presence invisible to the account owners. It means that you are 100% anonymous, no matter what OS(iOS/Android or Window/MAC) or device(computer/smartphone/tablet) that you are using."
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 255, 255]

            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Instagram Story Downloader - Fast & Free"
          icon={<AceternityIcon order={"3"} />}
          des="Instagram story downloader provided by StoriesDown is fast and free. Our tool provides downloads in original/source quality. As Insta stories are temporary and usually disappear within 24 hours, it is up to you if you want to save on your device for watching later or using for online marketing strategy. Just type the username, you can download all stories, photos, videos quickly."
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[253, 29, 29]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
