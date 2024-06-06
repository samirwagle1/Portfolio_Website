"use client"

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
// import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
          <div className='relative'>
            <motion.div 
              className='relative'
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{ type: "tween", duration: 0.5}}
            >
              
            <Image
              src="/samir.jpg"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95" 
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            /></motion.div>

            <motion.span 
              className='text-4xl absolute bottom-0 right-0'
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{ type: "spring", stiffness: 125, delay: 0.5, duration: 0.7,}}>
                🙌
            </motion.span>
          </div>
      </div>

      <motion.h1
        className="mb-10 mt-10 px-4 font-medium text-2xl !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Samir.</span> I'm a{" "}
        <span className="font-bold">Software Engineer</span> with{" "}
        <span className="font-bold">0 years</span> of experience <span className="font-bold">(Fresher)</span>. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg leading-normal font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 group-hover:scale-150 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 border-gray-900 hover:border-1 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="group-hover:rounded-full group-hover:translate-x-1  group-hover:bg-gray-800 group-hover:text-white   group-hover:scale-150 transition" />
        </a>

        <a
          className="bg-white  p-5 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-5 text-3xl text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:text-white/60"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare/>
        </a>
      </motion.div>

    </section>
  )
}
