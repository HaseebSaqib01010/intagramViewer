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
import i18n from "../i18n";
import AppWrapper from "@/components/AppWrapper";
// import { I18nextProvider } from 'react-i18next';
const Home = () => {
 
  return (
    // <I18nextProvider i18n={i18n}>
    // <MantineProvider theme={theme}>

    //   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">

    //   </main>
    // </MantineProvider>
    // </I18nextProvider>
    <AppWrapper>
      {/* <div className="max-w-7xl w-max"> */}
      <FloatingNav navItems={navItems} className="max-w-full mx-auto" />
      <Hero />
      <InstagramStoryViewer />
      <ContentSection
        title='' titleHighlight='Welcome to Anonysview'
        content="At Anonysview, we make it easy for you to explore Instagram content anonymously. Whether you're curious about someone's stories, reels, or posts, our platform offers a seamless way to browse without revealing your identity. Signing up, logging in, or worrying about leaving a trace is unnecessary. Just access Instagram privately, anytime.
        Designed with privacy and simplicity, Anonysview is perfect for anyone who values discretion. With just a few clicks, you can view Instagram stories and profiles or download content for later. It's fast, secure, and entirely free to use. 
        Start your journey with Anonysview, the most trusted Anonymous Instagram Stories Viewer, and experience private browsing like never before.
"
      />

      {/* <Tricks /> */}

      <Features />
      <Grid />
      <Approach />
      <ContentSection title='' titleHighlight='Final Thoughts' content="Anonysview is designed to make your Instagram experience private, secure, and effortless. Whether you’re staying updated on someone’s stories, saving reels for later, or browsing profiles out of curiosity, our platform ensures you can do it all privately and without restrictions.
There are no logins, sign-ups, or complications—just straightforward access to the Instagram content you want. With Anonysview, the ultimate Anonymous Instagram Stories Viewer, you can confidently explore.
Try it today and experience the easiest way to view and save Instagram content anonymously.

"/>

      <InstagramStoryViewerFAQ />
      {/* <Blogs /> */}
 
      <Footer />
      {/* </div> */}
    </AppWrapper>
  );
};

export default Home;
