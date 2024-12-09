"use client";

import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { blogs, BlogsType, navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import AppWrapper from "@/components/AppWrapper";

const BlogById = ({ params }: {
    params: { id: string; }
}) => {

    const blogId = params.id;
    const [selectedBlog, setSelectedBlog] = useState<BlogsType | null>(null);

    useEffect(() => {
        if (blogId) {
            const currentBlog = blogs.filter(item => item.id == +blogId);
            setSelectedBlog(currentBlog[0]);
        }
    }, [blogId])


    return (
        <AppWrapper>
            <FloatingNav navItems={navItems} />
            <div className="py-20 px-10">
                <h1 className="heading text-white mb-10">
                    Blog <span className="text-purple">Details</span>
                </h1>

                <div className="flex gap-10">
                    {/* Featured Blog Section (70%) */}
                    <div className="flex-1" style={{ flexBasis: "70%" }}>
                        <h2 className="text-white font-bold text-3xl mb-6">{selectedBlog?.title}</h2>
                        <div className="bg-[#13162D] p-8 rounded-lg">
                            <div className="relative w-full h-96 overflow-hidden rounded-lg mb-6">
                                <img
                                    src={selectedBlog?.img}
                                    alt={selectedBlog?.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h1 className="text-white text-2xl font-bold mb-4">{selectedBlog?.title}</h1>
                            <p className="text-[#BEC1DD] text-lg mb-6">{selectedBlog?.des}</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </AppWrapper>
    );
};

export default BlogById;
