export const navItems = [
  { name: "About", link: "#about" },
  { name: "Blogs", link: "#blogs" },
  { name: "Features", link: "#features" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const blogs = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const tricks = [
 {
    name: "Open Instagram",
    title: "Launch Instagram from any browser or the app on your device."
  },
  {
    name: "Get the Username:",
    title: "Obtain the Instagram username of the account whose story you wish to view"
  },
   {
    name: "Input Username:",
    title: "Paste the Instagram username into the input field of Highlights and Stories.",
    
  },
  {
 
    name: "Click Get Stories:",
    title: "Once you've entered the username, click the Get Stories button. The tool will immediately fetch and display the user's available stories.",
  },
  {
   
    name: "View Stories, Posts, Highlights, and Reels :",
    title: "You can choose to either view the story anonymously",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const features = [
  {
    id: 1,
    title: "Watch IG Stories anonymous",
    desc: "Stay up to date with all the latest Instagram user updates while maintaining your anonymity and privacy.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Watch Photo Profile anonymously",
    desc: "Easily and quickly browse photo profiles anonymously using Watch Photo Profile.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Free Story Viewer",
    desc: "InstaView is an app that enables users to anonymously view and access Instagram Stories without leaving any traces or disclosing their identity to the story owner.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Viewer Without Registration",
    desc: "Access Instagram Stories effortlessly, without the necessity of logging in or creating an account.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export type RequestUrls = {
  posts: (username: string) => string;
  stories: (username: string) => string;
  reels: (username: string) => string;
  highlights: (username: string) => string;
  highlightsById: (id: string) => string;
};
export const request_urls: RequestUrls = {
  posts: (username: string) =>
    `https://instagram-scraper-api2.p.rapidapi.com/v1/posts?username_or_id_or_url=${username}`,
  stories: (username: string) =>
    `https://instagram-scraper-api2.p.rapidapi.com/v1/stories?username_or_id_or_url=${username}`,
  reels: (username: string) =>
    `https://instagram-scraper-api2.p.rapidapi.com/v1/reels?username_or_id_or_url=${username}`,
  highlights: (username: string) =>
    `https://instagram-scraper-api2.p.rapidapi.com/v1/highlights?username_or_id_or_url=${username}`,
  highlightsById: (id: string) =>
    `https://instagram-scraper-api2.p.rapidapi.com/v1/highlight_info?highlight_id=${id}`,
};
