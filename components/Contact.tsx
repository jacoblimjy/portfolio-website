"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { BsLinkedin } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8 },
    },
  };

  // Animation variants for the buttons
  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.25 },
      textShadow: "0 0 5px rgba(255,255,255,0.8)",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    },
    press: { scale: 0.9 },
  };

  // Button styling for a 3D effect
  const buttonStyle = {
    background: "linear-gradient(145deg, #1c5da7, #3498db)",
    boxShadow: "3px 3px 6px #0e2e4e, -3px -3px 6px #3a6ea5",
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="flex items-center justify-center h-screen text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-lg mx-auto">
        {" "}
        {/* This div will wrap your content and ensure it doesn't stretch too wide */}
        <SectionHeading>Get in touch</SectionHeading>
        <p className="mb-8">Feel free to reach out to me!</p>
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <motion.a
            href="https://www.linkedin.com/in/jacoblim5/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium"
            style={buttonStyle}
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="press"
          >
            <BsLinkedin className="mr-3" size="1.5em" />
            Connect on LinkedIn
          </motion.a>
          <motion.a
            href="mailto:jacoblim145@gmail.com"
            className="inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium"
            style={buttonStyle}
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="press"
          >
            <IoIosMail className="mr-3" size="1.5em" />
            Send Me an Email
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
