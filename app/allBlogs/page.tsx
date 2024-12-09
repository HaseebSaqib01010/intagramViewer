"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { blogs } from "@/data";
// import FloatingNav from "../components/ui/FloatingNavbar";
// import { navItems } from "../../data";
// import Footer from "../../components/Footer";

const AllBlogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(blogs[0]); 

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
    };

    return (
        <>
        {/* <Floating
        av navItems={navItems} /> */}
        <div className="py-20 px-10">
            <h1 className="heading text-white mb-10">
                Explore <span className="text-purple">Blogs</span>
            </h1>

            <div className="flex gap-10">
                {/* Featured Blog Section (70%) */}
                <div className="flex-1" style={{ flexBasis: "70%" }}>
                    <h2 className="text-white font-bold text-3xl mb-6">Featured Blog</h2>
                    <div className="bg-[#13162D] p-8 rounded-lg">
                        <div className="relative w-full h-96 overflow-hidden rounded-lg mb-6">
                            <img
                                src={selectedBlog.img}
                                alt={selectedBlog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h1 className="text-white text-2xl font-bold mb-4">{selectedBlog.title}</h1>
                        <p className="text-[#BEC1DD] text-lg mb-6">{selectedBlog.des}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                {selectedBlog.iconLists.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="border border-white/[.2] rounded-full bg-black w-10 h-10 flex justify-center items-center"
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                        }}
                                    >
                                        <img src={icon} alt={`icon-${index}`} className="p-2" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center text-purple cursor-pointer">
                                <p className="text-lg">Check Live Site</p>
                                <FaLocationArrow className="ml-3" color="#CBACF9" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Blogs Section (30%) */}
                <div className="flex-1" style={{ flexBasis: "30%" }}>
                    <h2 className="text-white font-bold text-3xl mb-6">Recent Blogs</h2>
                    <div className="flex flex-col gap-6">
                        {blogs.map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#1E2236] p-4 rounded-lg flex gap-4 cursor-pointer"
                                onClick={() => handleBlogClick(item)} // Set the selected blog on click
                            >
                                <div className="w-1/3 h-24 overflow-hidden rounded-lg">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold text-lg mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#BEC1DD] text-sm line-clamp-2">
                                        {item.des}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer/> */}
        </>
    );
};

export default AllBlogs;
