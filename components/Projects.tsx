"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

type ProjectProps = {
	[K in keyof (typeof projectsData)[number]]: (typeof projectsData)[number][K];
} & {
	otherUrl?: string;
};

export default function Projects() {
        const { ref } = useSectionInView("Projects", 0.5);
        const [query, setQuery] = useState("");

        const filteredProjects = projectsData.filter(
                (project) =>
                        project.title.toLowerCase().includes(query.toLowerCase()) ||
                        project.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
        );

        return (
                <motion.section
                        ref={ref}
                        className="scroll-mt-[4.5rem] sm:scroll-mt-[6rem] mb-12 max-w-[60rem] px-4 sm:px-8 text-center text-justify"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="projects"
		>
                        <SectionHeading>My Projects</SectionHeading>
                        <input
                                type="text"
                                placeholder="Search projects..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="mt-6 w-full sm:w-1/2 px-4 py-2 border rounded-md dark:bg-gray-800"
                        />
                        <div className="grid gap-8 mt-8">
                                {filteredProjects.map((project, index) => (
                                        <Project key={index} {...project} />
                                ))}
                        </div>
		</motion.section>
	);
}

function Project({
	title,
	description,
	tags,
	imageUrl,
	gitHubUrl,
	otherUrl,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			style={{ scale: scaleProgress, opacity: opacityProgress }}
			className="group relative border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 dark:border-gray-700"
		>
			<div className="flex flex-col sm:flex-row items-stretch">
				<div className="flex flex-col justify-between p-6 sm:w-1/2 lg:w-2/3">
					<h3 className="text-lg sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
						{title}
					</h3>
					<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
						{description}
					</p>
					<ul className="flex flex-wrap gap-2 mb-4">
						{tags.map((tag, index) => (
							<li
								key={index}
								className="px-3 py-1 text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full uppercase tracking-wide"
							>
								{tag}
							</li>
						))}
					</ul>
					<div className="flex items-center gap-4">
						{gitHubUrl && (
							<a
								href={gitHubUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub Repository"
								className="text-gray-800 dark:text-white text-lg sm:text-xl hover:text-blue-600 dark:hover:text-blue-400 transition"
							>
								<FaGithub />
							</a>
						)}
						{otherUrl && (
							<a
								href={otherUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Live Project"
								className="text-gray-800 dark:text-white text-lg sm:text-xl hover:text-blue-600 dark:hover:text-blue-400 transition"
							>
								<FaExternalLinkAlt />
							</a>
						)}
					</div>
				</div>

				<div className="relative sm:w-1/2 lg:w-1/3 flex-shrink-0 py-4">
					<Image
						src={imageUrl}
						alt={title}
						quality={95}
						className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:-rotate-2"
					/>
				</div>
			</div>
		</motion.div>
	);
}
