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
import Link from "next/link";
const theme = createTheme({});
import InstagramStoryViewerFAQ from "../components/ui/FAQ";
import TranslationWrapper from "../components/TranslationWrapper";
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
const Home = () => {
  return (
    <I18nextProvider i18n={i18n}>
    <MantineProvider theme={theme}>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-max">
          <FloatingNav navItems={navItems} className="max-w-full mx-auto" />
          <Hero />
          <InstagramStoryViewer />
          {/* <Grid /> */}



          <Tricks />
          <Features />
          <Approach />
          <InstagramStoryViewerFAQ />
          <Blogs />

          <Footer />
        </div>
        {/* <Link href="/blogs" legacyBehavior>
          <a style ={{color:"white"}}>Blog</a>
        </Link>
        <Link href="/allBlogs" legacyBehavior>
          <a>All Blogs</a>
        </Link> */}
      </main>
    </MantineProvider>
    </I18nextProvider>
  );
};

export default Home;
