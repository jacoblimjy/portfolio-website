"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
                        <VerticalTimeline lineColor={theme === "light" ? "#e5e7eb" : "#374151"}>
                                {experiencesData.map((item, index) => (
                                        <VerticalTimelineElement
                                                key={index}
                                                visible={true}
                                                contentStyle={{
                                                        background: theme === "light" ? "#f5f5f5" : "#1f2937",
                                                        color: theme === "light" ? "#1f2937" : "#f5f5f5",
                                                }}
                                                contentArrowStyle={{
                                                        borderRight: `7px solid ${theme === "light" ? "#f5f5f5" : "#1f2937"}`,
                                                }}
                                                date={item.date}
                                                iconStyle={{
                                                        background: theme === "light" ? "#fff" : "#374151",
                                                        color: theme === "light" ? "#374151" : "#fff",
                                                }}
                                                icon={item.icon}
                                        >
                                                <h3 className="text-lg font-semibold">{item.company}</h3>
                                                <h4 className="text-md italic text-gray-600 dark:text-gray-300">
                                                        {item.title} - {item.location}
                                                </h4>
                                                <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                                                        {item.description.split("\n").map((line, lineIndex) => (
                                                                <p key={lineIndex}>{line}</p>
                                                        ))}
                                                </div>
                                        </VerticalTimelineElement>
                                ))}
                        </VerticalTimeline>
		</motion.section>
	);
}
