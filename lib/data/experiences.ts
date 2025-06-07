import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
	{
		company: "GovTech",
		title: "Data Science Intern",
		location: "Singapore",
		description:
			"Building an AI-driven public sensing web application to analyze data from social media, news media, and REACH platforms, providing insights on trending topics, traction, sentiment, and demographics to inform public communications and policy action.\n" +
			"Enhancing LLM-driven analysis through prompt engineering and model optimization, improving the accuracy and contextual relevance of insights for decision-making.",
		icon: React.createElement(CgWorkAlt),
		date: "2024 - Present",
	},
	{
		company: "NUS Computing",
		title: "Teaching Assistant",
		location: "Singapore",
		description:
      "Assisted in a course covering the software development life cycle, front-end development (HTML, CSS, JavaScript), JavaScript frameworks like Vue.js, Firebase Firestore, version control with Git, project management (SCRUM), and DevOps.\n" +
			"Supported project-based learning, enabling students to develop and deploy full-stack web applications.\n" +
      "Facilitated discussions on ethical considerations in data usage and privacy laws.\n" +
      "Conducted tutorials and provided feedbacks students' projects and assignments.",
		icon: React.createElement(LuGraduationCap),
		date: "2023 - Present",
	},
	{
		company: "Income Insurance Limited",
		title: "Machine Learning Engineer Intern",
		location: "Singapore",
		description:
			"Spearheaded the development and implementation of a cutting-edge Generative AI solution utilizing LlamaIndex and large language models, automating the extraction of critical features from highly complex and unstructured insurance policy documents. This automation reduced the review time by 80% and the features are subsequently integrated into downstream propensity models, enhancing predictive accuracy.\n" +
			"Evaluated and optimized the Retrieval-Augmented Generation (RAG) agent to ensure high accuracy and efficiency.\n" +
			"Presented findings and documentation to senior management, effectively communicating benefits and workflow improvements.",
		icon: React.createElement(CgWorkAlt),
		date: "May 2024 - Aug 2024",
	},
	{
		company: "SariSuki",
		title: "Senior Analyst, NUS Business Analytics Consulting Team",
		location: "Singapore",
		description:
			"Collaborated with SariSuki to develop predictive models for agricultural product prices, utilizing advanced techniques such as ARIMA, SARIMAX, and LSTM to significantly improve forecasting accuracy.\n" +
			"Important findings and visualizations were presented to SariSuki Data Science team for actionable insights.",
		icon: React.createElement(CgWorkAlt),
		date: "Oct 2023 - May 2024",
	},
	{
		company: "UOB Kay Hian",
		title: "Data Management Contract Officer",
		location: "Singapore",
		description:
			"Managed onboarding of UOBKH & Endowus individual accounts while ensuring conformity to AML/CFT/CDD requirements.\n" +
			"Utilized standard document management tools to create comprehensive logs and maintain essential databases.\n" +
			"Proactively collaborated with Clients, Trading Representatives (TRs), Client Services, and Compliance to rectify discrepancies and aided in the modification of clients' trade rates when necessary.",
		icon: React.createElement(CgWorkAlt),
		date: "Nov 2021 - May 2022",
	},
] as const;

