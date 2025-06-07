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
                        className="scroll-mt-[4.5rem] sm:scroll-mt-[6rem] mb-12 max-w-[90%] sm:max-w-[70rem] mx-auto text-center px-4 sm:px-8"
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
                                                className="group relative flex flex-col bg-white/20 border border-white/30 backdrop-blur-md p-6 rounded-xl shadow-xl transition-transform hover:-translate-y-2"
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
                                                        <h3 className="text-xl font-semibold text-white mb-1">
                                                                {item.company}
                                                        </h3>
                                                        <h4 className="text-base text-gray-200 mb-1">
                                                                {item.title}
                                                        </h4>
                                                        <p className="text-sm text-gray-300">{item.location}</p>
                                                        <p className="text-sm text-gray-300">{item.date}</p>
						</div>

                                                <div className="mt-4 text-left text-gray-200 space-y-2">
                                                        <ul className="space-y-2">
                                                                {item.description.split("\n").map((line, lineIndex) => (
                                                                        <li key={lineIndex} className="flex items-start gap-2 text-sm text-gray-200">
                                                                                <BsCheckCircle className="text-green-400 w-4 h-4 mt-[2px] flex-shrink-0" />
                                                                                <span>{line}</span>
                                                                        </li>
                                                                ))}
                                                        </ul>
                                                </div>

                                                {/* Hover Effect */}
                                                <div className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all"></div>
                                        </motion.div>
                                ))}
                        </div>
		</motion.section>
	);
}
