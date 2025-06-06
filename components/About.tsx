"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
		<motion.section
			ref={ref}
			className="scroll-mt-[4.5rem] sm:scroll-mt-[6rem] mb-12 max-w-[60rem] text-center text-justify px-4 sm:px-8"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
                        <p className="text-base sm:text-lg mb-3">
				👋 I am Lim Jacob, an undergraduate studying in the National University
				of Singapore (NUS) School of Computing.
			</p>
                        <p className="text-base sm:text-lg mb-3">
				My course of study is Business Analytics with a specialization in
				Machine Learning. I am also taking a second major in Quantitative
				Finance. My key interests are in the areas of {""}
				<span className="italic">
					Data Science, AI/ML Engineering and Software Engineering.
				</span>
			</p>

                        <p className="text-base sm:text-lg mb-3">
				I am a highly motivated individual who is always eager to learn new
				things and take on new challenges. I am also a strong believer in the
				importance of teamwork and collaboration. I am always looking for
				opportunities to work with others and learn from them. When not coding,
				I enjoy travelling 🛫, exercising🏋🏻‍♂️ and reading📖.
			</p>

			<p>
                                <span className="text-base sm:text-lg underline">
					I am currently looking for full-time internship opportunities!
				</span>
			</p>
		</motion.section>
	);
}
