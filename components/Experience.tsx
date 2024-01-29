"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-12 mb-12">
      <SectionHeading>My Experience</SectionHeading>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {experiencesData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col bg-opacity-20 p-6 rounded-lg shadow-lg ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
            >
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {item.company}
                    </h3>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white italic">
                      {item.title}
                    </h3>
                    <p className="text-gray-500">{item.location}</p>
                    <p className="text-gray-500">{item.date}</p>
                  </div>
                  <div
                    className={`text-xl ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="mt-4 text-gray-700 dark:text-gray-300">
                  {item.description.split("\n").map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className="mt-4 text-gray-700 dark:text-gray-300"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
