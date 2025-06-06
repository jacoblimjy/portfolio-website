"use client";

import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
	const { ref } = useSectionInView("Experience");
	const { theme } = useTheme();

	return (
		<motion.section
			ref={ref}
			className="scroll-mt-[4.5rem] sm:scroll-mt-[6rem] mb-12 max-w-[90%] sm:max-w-[60rem] mx-auto text-center px-4 sm:px-8"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="experience"
		>
			<SectionHeading>My Experience</SectionHeading>
			<div className="grid grid-cols-1 gap-8">
                                {experiencesData.map((item, index) => (
                                        <motion.div
                                                key={index}
                                                className="group relative flex flex-col bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-xl shadow-xl transition-transform hover:-translate-y-2"
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                        >
						{/* Icon Badge */}
                                                <div
                                                        className="absolute -top-5 right-5 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md shadow-md"
                                                >
                                                        <div className="text-xl text-white">
                                                                {item.icon}
                                                        </div>
                                                </div>

						<div className="text-left">
							<h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
								{item.company}
							</h3>
							<h4 className="text-md sm:text-lg font-medium text-gray-600 dark:text-gray-300 italic">
								{item.title}
							</h4>
							<p className="text-sm text-gray-500">{item.location}</p>
							<p className="text-sm text-gray-500">{item.date}</p>
						</div>

                                                <div className="mt-4 text-left text-gray-200 space-y-2">
                                                        <ul className="space-y-2">
                                                                {item.description.split("\n").map((line, lineIndex) => (
                                                                        <li key={lineIndex} className="flex items-start gap-2 text-sm">
                                                                                <BsCheckCircle className="text-green-400 w-4 h-4 mt-[2px] flex-shrink-0" />
                                                                                <span>{line}</span>
                                                                        </li>
                                                                ))}
                                                        </ul>
                                                </div>

						{/* Hover Effect */}
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-black/50 rounded-lg transition-opacity"></div>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
