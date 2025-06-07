"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useState, useEffect } from "react";
// import meImg from "@/public/meImg.jpg";
import ReactRotatingText from "react-rotating-text";


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  return (
		<section
			ref={ref}
			id="home"
			className="flex flex-col items-center justify-center h-screen text-center"
			// className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
		>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "tween",
							duration: 0.2,
						}}
					>
						{/* <Image
              // src={meImg}
              alt="Jacob portrait"
              width="384" // Double the original width
              height="384" // Double the original height
              quality="95"
              priority={true}
              className="h-64 w-64 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
            /> */}
					</motion.div>

					<motion.span
						className="absolute bottom-0 right-0 text-4xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						{/* 👋 */}
					</motion.span>
				</div>
			</div>

                        <motion.h1
                                className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 px-4"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<div className="text-center mb-2 sm:mb-4 lg:mb-6">
					<span className="font-bold">Hello, I am Jacob!</span>
				</div>

				<ReactRotatingText
					items={["Data Scientist", "Developer"]}
					pause={2000}
					typingInterval={150}
					deletingInterval={70}
					emptyPause={1000}
					cursor={true}
				/>
			</motion.h1>

                        <motion.div
                                className="flex flex-row items-center justify-center gap-3 sm:gap-6 text-lg font-medium mb-6"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                        delay: 0.1,
                                }}
                        >
                                <Link
                                        href="#contact"
                                        className="group px-6 py-3 sm:py-2 text-base sm:text-lg w-auto text-center bg-white/20 border border-white/30 backdrop-blur-md text-white rounded-full shadow outline-none focus:scale-110 hover:scale-110 hover:bg-white/30 active:scale-105 transition"
                                        onClick={() => {
                                                setActiveSection("Contact");
                                                setTimeOfLastClick(Date.now());
                                        }}
                                >
                                        Contact me here
                                </Link>

                                <div className="flex items-center gap-4">
                                        <a
                                                className="w-10 h-10 flex items-center justify-center bg-white/20 border border-white/30 backdrop-blur-md text-white rounded-full shadow transition focus:scale-110 hover:scale-110 hover:bg-white/30 active:scale-105"
                                                href="https://www.linkedin.com/in/jacoblim5/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                        >
                                                <BsLinkedin className="w-6 h-6" />
                                        </a>

                                        <a
                                                className="w-10 h-10 flex items-center justify-center bg-white/20 border border-white/30 backdrop-blur-md text-white rounded-full shadow transition focus:scale-110 hover:scale-110 hover:bg-white/30 active:scale-105"
                                                href="https://github.com/jacoblimjy"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                        >
                                                <BsGithub className="w-6 h-6" />
                                        </a>
                                </div>
                        </motion.div>

			{/* <motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					onClick={() => {
						setActiveSection("Contact");
						setTimeOfLastClick(Date.now());
					}}
				>
					Contact me here{" "}
				</Link> */}

			{/* <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a> */}

			{/* <a
					className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://www.linkedin.com/in/jacoblim5/"
					target="_blank"
				>
					<BsLinkedin />
				</a>

				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                                        href="https://github.com/jacoblimjy"
                                        target="_blank"
                                >
                                        <BsGithub />
                                </a>
                        </motion.div> */}
                </section>
        );
}
