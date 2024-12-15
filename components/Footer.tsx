import { socialMedia } from "@/data";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72">
        {/* <img
          src="/footer-grid.svg"
          alt="grid"
        // className="w-full h-full opacity-50 "
        /> */}
      </div>
     
          {/* <h1 style={{ color: "white", fontSize: "2rem" }}>Contact</h1>
          <p className="md:text-base text-sm md:font-normal font-light" style={{ color: "white" }}>
            If you have any questions, complaints, or claims with respect the our Services, please send us a message to: support@insta.com and contact@insta.com
          </p> */}
        <div className="flex mt-6 md:flex-row flex-col justify-between items-center">

          <p className="md:text-base text-sm md:font-normal font-light" style={{ color: "white" }}>
            Copyright © 2024 Instagram Viewer
          </p>
     
      
      
      

        <div className="flex items-center md:gap-3 gap-6">
          {/* {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))} */}
          <div
            
            className="w-30 h-8 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 p-6"
          >
            <Link href="/privacyPolicy" legacyBehavior>
              <a style={{ color: "white" }}>Privacy Policy</a>
            </Link>
          </div>
          <div

            className="w-30 h-8 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 p-6"
          >
            <Link href="/" legacyBehavior>
              <a style={{ color: "white" }}>Story Viewer</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
