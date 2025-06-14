// components/Header.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useGlobalScrollSpy } from "../lib/hooks";

export default function Header() {
	// 👇 kick off the scroll‑spy
	// by passing the links to the hook
	useGlobalScrollSpy(links);

	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
                <header className="z-[999] relative">
                        <motion.div
                                className="hidden sm:block fixed top-0 left-1/2 h-[6rem] w-full rounded-none border border-white/30 bg-white/10 backdrop-blur-md shadow-lg shadow-black/[0.05] sm:top-6 sm:h-[5rem] sm:w-[50rem] sm:rounded-full dark:border-white/20 dark:bg-gray-900/40"
                                initial={{ y: -100, x: "-50%", opacity: 0 }}
                                animate={{ y: 0, x: "-50%", opacity: 1 }}
                        />
                        <nav className="flex fixed top-[0.3rem] left-1/2 h-14 -translate-x-1/2 py-3 sm:top-[2rem] sm:h-[initial] sm:py-2">
                                <ul className="flex w-[24rem] flex-wrap items-center justify-center gap-y-2 text-[0.9rem] sm:text-[1rem] font-medium text-gray-200 sm:w-[initial] sm:flex-nowrap sm:gap-6">
					{links.map((link) => (
						<motion.li
							key={link.hash}
							className="h-full flex items-center justify-center relative"
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								href={link.hash}
								onClick={() => {
									setActiveSection(link.name);
									setTimeOfLastClick(Date.now());
								}}
                                                                className={clsx(
                                                                        "flex w-full items-center justify-center px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200",
                                                                        {
                                                                                "text-white": activeSection === link.name,
                                                                        }
                                                                )}
							>
                                                                {link.name}
                                                                {activeSection === link.name && (
                                                                        <motion.span
                                                                                layoutId="activeSection"
                                                                                className="absolute inset-0 -z-10 rounded-full bg-white/25 dark:bg-gray-700/50"
                                                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                                        />
                                                                )}
                                                        </Link>
                                                </motion.li>
                                        ))}
				</ul>
			</nav>
		</header>
	);
}

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { links } from "@/lib/data";
// import Link from "next/link";
// import clsx from "clsx";
// import { useActiveSectionContext } from "@/context/active-section-context";

// export default function Header() {
//   const { activeSection, setActiveSection, setTimeOfLastClick } =
//     useActiveSectionContext();

//   return (
//     <header className="z-[999] relative">
//       <motion.div
//         className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
//         initial={{ y: -100, x: "-50%", opacity: 0 }}
//         animate={{ y: 0, x: "-50%", opacity: 1 }}
//       ></motion.div>

//       <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
//         <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
//           {links.map((link) => (
//             <motion.li
//               className="h-3/4 flex items-center justify-center relative"
//               key={link.hash}
//               initial={{ y: -100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//             >
//               <Link
//                 className={clsx(
//                   "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
//                   {
//                     "text-gray-950 dark:text-gray-200":
//                       activeSection === link.name,
//                   }
//                 )}
//                 href={link.hash}
//                 onClick={() => {
//                   setActiveSection(link.name);
//                   setTimeOfLastClick(Date.now());
//                 }}
//               >
//                 {link.name}

//                 {link.name === activeSection && (
//                   <motion.span
//                     className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
//                     layoutId="activeSection"
//                     transition={{
//                       type: "spring",
//                       stiffness: 380,
//                       damping: 30,
//                     }}
//                   ></motion.span>
//                 )}
//               </Link>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }
