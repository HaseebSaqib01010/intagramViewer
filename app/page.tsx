"use client";

import { navItems } from "@/data";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Tricks from "@/components/Tricks";
import Approach from "@/components/Approach";
import Features from "@/components/Features";
import Blogs from "@/components/Blogs";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import InstagramStoryViewer from "../components/InstagramStoryViewer";
import ContentSection from "@/components/ui/ContentSection";

const theme = createTheme({});

const Home = () => {
  return (
    <MantineProvider theme={theme}>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <InstagramStoryViewer />
          {/* <Grid /> */}

          <div className="mt-20">
            <ContentSection
              title="Welcome to"
              titleHighlight="Instagram Story"
              content="Instagram stories have become a popular feature on the platform, allowing users to share photos and videos that disappear after 24 hours. They are a fun and engaging way to share moments with your followers. However, sometimes you might want to view Instagram stories without the poster knowing, which is where an IG viewer comes in handy.Instagram stories have become a popular feature on the platform, allowing users to share photos and videos that disappear after 24 hours. They are a fun and engaging way to share moments with your followers. However, sometimes you might want to view Instagram stories without the poster knowing, which is where an IG viewer comes in handy."
            />
          </div>

          <Tricks />
          <Features />
          <Approach />
          <Blogs />
          <Footer />
        </div>
      </main>
    </MantineProvider>
  );
};

export default Home;
