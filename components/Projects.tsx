"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

type ProjectProps = {
  [K in keyof (typeof projectsData)[number]]: (typeof projectsData)[number][K];
} & { otherUrl?: string };

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selected, setSelected] = useState<ProjectProps | null>(null);

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-[4.5rem] sm:scroll-mt-[6rem] mb-12 max-w-[90%] sm:max-w-[70rem] mx-auto text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projects"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer bg-white/20 border border-white/30 backdrop-blur-md rounded-xl shadow-xl overflow-hidden group transition-transform hover:-translate-y-2"
            onClick={() => setSelected(project)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="h-40 w-full object-cover group-hover:opacity-90"
              quality={95}
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-200 mb-2 overflow-hidden max-h-16">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <li key={idx} className="px-2 py-1 text-xs bg-white/20 rounded-full text-gray-200">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
        <motion.div
          className="bg-gray-900/90 backdrop-blur-lg border border-white/20 rounded-xl max-w-lg w-full p-6 relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold text-white mb-2">{selected.title}</h3>
            <Image
              src={selected.imageUrl}
              alt={selected.title}
              className="w-full h-48 object-cover rounded mb-4"
              quality={95}
            />
            <p className="text-gray-200 mb-4 whitespace-pre-line">{selected.description}</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {selected.tags.map((tag, idx) => (
                <li key={idx} className="px-2 py-1 text-xs bg-white/20 rounded-full text-gray-200">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 text-lg">
              {selected.gitHubUrl && (
                <a
                  href={selected.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  <FaGithub />
                </a>
              )}
              {selected.otherUrl && (
                <a
                  href={selected.otherUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
