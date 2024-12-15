export const navItems = [
  { name: "Story Viewer", link: "/" },
  { name: "Contact", link: "/contact" },
];

export const gridItems = [
  {
    id: 1,
    title: " No Account Needed",
    description:
      "Skip the hassle of signing up or logging in. With Anonysview, you only need the username or link of the Instagram profile or post you want to view.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/a1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: " Unlimited Free Access",
    description:
      "Enjoy unrestricted access to Instagram profiles, stories, and reels at no cost.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Download Instagram Content",
    description:
      "Save Instagram stories, reels, and posts directly to your device without compromising your anonymity",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "Unlimited Free Access",
    description:
      "Enjoy unrestricted access to Instagram profiles, stories, and reels at no cost. Use it as often as you like, whenever you need.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "User-Friendly Design",
    description:
      "Our clean and intuitive interface makes finding what you're looking for easy. Whether tech-savvy or a beginner, you'll feel right at home.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/a2.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Safe and Secure",
    description:
      "We prioritize your PrivacyPrivacy by using advanced encryption to keep your data safe. ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export interface BlogsType {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

export const blogs: BlogsType[] = [
  {
    id: 1,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends Lorem ipsum dolor sit amet. Eos excepturi beatae est vero doloribus ut odit distinctio qui molestias dolores eum voluptatum deleniti hic dolorem officiis sed natus fugit? Eos nulla atque et labore officia ut quam illum et voluptate magnam qui neque delectus cum quidem nesciunt qui molestiae odit Et distinctio consequuntur qui excepturi galisum non maiores earum est Quis officiis ut consequatur totam animi velitQuo itaque omnis non consequatur asperiores ut alias quidem et dolores dolore! Id tenetur enim ut numquam quod qui maiores dignissimos id consequatur minus sit aliquam inventore qui nostrum soluta? Et debitis repellat ut voluptatibus placeat aut inventore dicta aut quis accusantium ea dolor nostrum in beatae veniam In unde nemo qui iusto eligendi ut blanditiis porro in delectus facilis. Eos ducimus vero est quaerat neque et nihil modi aut amet tempore est rerum enim in voluptatum repudiandae hic corrupti facilis?",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 2,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 3,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 4,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 5,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 6,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
];

export const tricks = [
  {
    name: "Open Instagram",
    title: "Launch Instagram from any browser or the app on your device.",
  },
  {
    name: "Get the Username:",
    title:
      "Obtain the Instagram username of the account whose story you wish to view",
  },
  {
    name: "Input Username:",
    title:
      "Paste the Instagram username into the input field of Highlights and Stories.",
  },
  {
    name: "Click Get Stories:",
    title:
      "Once you've entered the username, click the Get Stories button. The tool will immediately fetch and display the user's available stories.",
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
    title: "Browse Anonymously",
    desc: "View Instagram profiles and content without anyone knowing.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Fast and Reliable",
    desc: " Access Instagram content instantly without delays or complications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Save favorite Moments",
    desc: "Download Instagram reels, stories, and posts quickly.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Privacy Guaranteed",
    desc: "We never log or share your data. Your actions are your own.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "No Hidden Fees:",
    desc: "Enjoy unlimited access to all features at no cost.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 6,
    title: "Simple Navigation:",
    desc: "Explore content quickly and effortlessly, with no learning curve.",
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
  userProfile: (username: string) => string;
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
  userProfile: (username: string) =>
    `https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${username}`,
};
