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
            visible
            date={item.date}
            icon={item.icon}
            iconClassName={
              theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-700 text-white"
            }
            contentStyle={{
              background: theme === "light" ? "#f9fafb" : "#1f2937",
              boxShadow: "none",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light" ? "7px solid #f9fafb" : "7px solid #1f2937",
            }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
              {item.company}
            </h3>
            <h4 className="text-md sm:text-lg font-medium text-gray-600 dark:text-gray-300 italic">
              {item.title}
            </h4>
            <p className="text-sm text-gray-500 mb-2">{item.location}</p>
            <div className="text-left text-gray-700 dark:text-gray-300 space-y-2">
              {item.description.split("\n").map((line, lineIndex) => (
                <p key={lineIndex} className="text-sm">
                  {line}
                </p>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
