"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


type ProjectProps = {
  [K in keyof (typeof projectsData)[number]]: (typeof projectsData)[number][K];
} & {
  otherUrl?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  gitHubUrl,
  //make otherUrl optional
  otherUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null); //this is for the scroll animation effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
            {gitHubUrl && (
              <span className="ml-2 mt-2 mb-2 flex">
                <a
                  href={gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-2xl hover:text-gray-600 transition-colors"
                >
                  <FaGithub className="mr-3" />
                </a>
                {otherUrl && (
                <a
                  href={otherUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-2xl hover:text-gray-600 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-3" />
                  {/* <span className="text-base font-semibold">Visit Project</span> */}
                </a>)}
              </span>
            )}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
