"use client";

import React from 'react'
import { FloatingNav } from '../../components/ui/FloatingNavbar';
import { navItems } from '../../data';
import ContentSection from '../../components/ui/ContentSection';
import Footer from '../../components/Footer';
import AppWrapper from '@/components/AppWrapper';
import InstagramStoryViewer  from '@/components/InstagramStoryViewer';
import Features from '../../components/Features';
const page = () => {
    return (
        <AppWrapper>
            <FloatingNav navItems={navItems} className="max-w-full" />
            {/* <InstagramStoryViewer/> */}
            <div className='mt-20' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <h1 className="heading" style={{ color: "white" }}>
                    <span className="text-purple">Your Privacy </span>
                    Matters 


                </h1> 
             <div  className="text-white-300 md:mt-10 my-5 text-justify " style={{ color: "white",fontSize:"1.3rem"}} >
                <p>At Anonysview we understand the importance of PrivacyPrivacy. Here how we keep your data secure:</p>
                <li>
                    <b>Strict No-Log Policy : </b>
                     We don’t store or track your browsing activity.
                </li>
                <li>
                    <b>Encryption Technology: </b>
                    All interactions protect your information from cyber threats.

                </li>
                <li>
                    <b> Regular Security Updates : </b>
                    We continuously improve our platform to safeguard against potential risks.
                </li>
                    <h2>Browse Instagram with peace of mind, knowing your personal information is protected.</h2>
            </div>
            </div>
            <Features/>
            <Footer />
        </AppWrapper>
    )

}

export default page
