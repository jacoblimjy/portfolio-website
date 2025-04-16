// import { useActiveSectionContext } from "@/context/active-section-context";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import type { SectionName } from "./types";

// export function useSectionInView(
// 	sectionName: SectionName,
// 	// you can still override threshold if you want, but 0 is fine
// 	threshold = 0
// ) {
// 	const { ref, inView } = useInView({
// 		threshold,
// 		// “lift” the viewport’s detection zone up/down by 50%
// 		rootMargin: "-50% 0px -50% 0px",
// 	});

// 	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

// 	useEffect(() => {
// 		// only auto‑update when user isn’t actively clicking nav
// 		if (inView && Date.now() - timeOfLastClick > 1000) {
// 			setActiveSection(sectionName);
// 		}
// 	}, [inView, setActiveSection, timeOfLastClick, sectionName]);

// 	return { ref };
// }
// lib/hooks/useGlobalScrollSpy.ts
// lib/hooks/useGlobalScrollSpy.ts
// lib/hooks/useGlobalScrollSpy.ts
// lib/hooks.ts
// lib/hooks.ts
// lib/hooks.ts
// lib/hooks.ts
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionLink, SectionName } from "@/lib/types";

export function useSectionInView(sectionName: SectionName, threshold = 0) {
  const { ref, inView } = useInView({
    threshold,
    rootMargin: "-50% 0px -50% 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection, timeOfLastClick]);

  return { ref };
}

export function useGlobalScrollSpy(
	// <-- allow readonly arrays
	sections: readonly SectionLink[]
) {
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		const handler = () => {
			if (Date.now() - timeOfLastClick < 1000) return;
			const midY = window.innerHeight / 2;
			let best: SectionLink | null = null;
			let bestDist = Infinity;

			for (const sec of sections) {
				const id = sec.hash.slice(1);
				const el = document.getElementById(id);
				if (!el) continue;
				const dist = Math.abs(el.getBoundingClientRect().top - midY);
				if (dist < bestDist) {
					bestDist = dist;
					best = sec;
				}
			}

			if (best) setActiveSection(best.name);
		};

		window.addEventListener("scroll", handler, { passive: true });
		handler();
		return () => window.removeEventListener("scroll", handler);
	}, [sections, setActiveSection, timeOfLastClick]);
}
