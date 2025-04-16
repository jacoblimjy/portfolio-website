import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hawkhubImg from "@/public/hawkhub.png";
import decisionTreeImg from "@/public/decisiontree.png";
import stockifyProImg from "@/public/stockify.png";
import tassImg from "@/public/TASS.png";
import hackImg from "@/public/tiktokshop.jpeg";
import courserecommendationImg from "@/public/courserecommendation.png";
import stocksentimentImg from "@/public/stocksentiment.png";
import travelpalImg from "@/public/travelpal.png";

// lib/data.ts
export const links = [
  { name: "Home",       hash: "#home"       },
  { name: "About",      hash: "#about"      },
  { name: "Experience", hash: "#experience" },
  { name: "Projects",   hash: "#projects"   },
  { name: "Skills",     hash: "#skills"     },
  { name: "Contact",    hash: "#contact"    },
] as const;

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



export const projectsData = [
	{
		title: "HawkHub",
		description:
			"Built a full stack web app to streamline hawker management process and reduce administrative burden. Main Features include 'StockTracker', 'FinanceTracker', and a 'Multi-vendor Ecommerce Space'",
		tags: [
			"Django",
			"React",
			"Material UI",
			"Redux",
			"PostgreSQL",
			"Redis",
			"Postman",
		],
		imageUrl: hawkhubImg,
		gitHubUrl:
			"https://github.com/jacoblimjy/HawkHub-Software-Engineering-Project",
		otherUrl: "https://hawkhub.onrender.com/",
	},
	{
		title: "Stock Price Prediction with Sentiment Analysis",
		description:
			"Engineered an ETLT pipeline with Apache Airflow, streamlining financial data processing and analysis. Developed a stock price predictive model leveraging FinancialBERT for sentiment analysis and LSTM for time series forecasting.",
		tags: [
			"Apache Airflow",
			"PostgreSQL",
			"FinancialBERT",
			"LSTM",
			"Looker Studio",
		],
		imageUrl: stocksentimentImg,
		gitHubUrl: "https://github.com/jacoblimjy/stock-prediction",
	},
	{
		title: "Hybrid Course Recommendation System",
		description:
			"Developed a hybrid recommendation system integrating Collaborative Filtering, Content-based Filtering, LightGCN, and a Skill-Matching model for enhanced course recommendations.",
		tags: ["TensorFlow", "Scikit-Learn", "LightGCN", "LightFM", "spaCy"],
		imageUrl: courserecommendationImg,
		gitHubUrl:
			"https://github.com/jacoblimjy/Hybrid_Course_Recommendation_System",
	},
	{
		title: "TravelPal",
		description:
			"Developed a travel blogging application with user authentication, trip logging, and personalized travel guide recommendations. Implemented a dynamic dashboard for managing trips and viewing travel statistics.",
		tags: ["Vue.js", "Firebase", "TailwindCSS", "Figma"],
		imageUrl: travelpalImg,
		gitHubUrl: "https://github.com/jacoblimjy/TravelPal",
		otherUrl: "https://www.youtube.com/watch?v=mdOf2EuANcI&ab_channel=JacobLim",
	},
	{
		title: "BMI Category Prediction",
		description:
			"Employed various machine learning algorithms to predict BMI categories based on Age, Gender, and Occupation.",
		tags: [
			"Python",
			"scikit-learn",
			"Pandas",
			"Numpy",
			"Matplotlib",
			"Seaborn",
		],
		imageUrl: decisionTreeImg,
		gitHubUrl:
			"https://github.com/jacoblimjy/Kaggle-Project-Sleep-Health-and-Lifestyle/blob/main/Kaggle%20Project%20-%20Sleep%20Health%20and%20Lifestyle.pdf",
	},
	{
		title: "StockifyPro",
		description:
			"StockifyPro is a Django-based web application that combines stock market information with the latest business news.",
		tags: [
			"Django",
			"Python",
			"HTML",
			"CSS",
			"Bootstrap",
			"News API",
			"IEX Cloud API",
		],
		imageUrl: stockifyProImg,
		gitHubUrl: "https://github.com/jacoblimjy/StockifyPro",
	},
	{
		title: "Analysis of Airline Seat Booking System",
		description:
			"Analyzed Airline Seat Booking System's dataset using SQL and Tableau to provide actionable insights to the airline company.",
		tags: ["SQL", "Tableau"],
		imageUrl: tassImg,
		gitHubUrl:
			"https://github.com/jacoblimjy/Analytics-The-Airline-Seat-booking-System-TASS/blob/main/Full%20Analysis%20-%20Airlines%20Comparison/Full%20Analysis%20-%20Airlines%20Comparison.pdf",
	},
	{
		title: "TikTok Shop",
		description:
			"A reimagination of TikTok's Ecommerce feature built for TikTok Hackathon 2023. A full stack web app that allows users to browse and purchase products from TikTok creators and for creators to manage their products.",
		tags: ["Vue 3", "Nuxt 3", "Tailwind"],
		imageUrl: hackImg,
		gitHubUrl:
			"https://github.com/jacoblimjy/Analytics-The-Airline-Seat-booking-System-TASS/blob/main/Full%20Analysis%20-%20Airlines%20Comparison/Full%20Analysis%20-%20Airlines%20Comparison.pdf",
	},
] as const;

export const skillsData = [
	"Python",
	"Java",
	"JavaScript",
  "C++",
	"R",
	"SQL",
	"Airflow",
	"Spark",
	"Hadoop",
	"Tableau",
	"Looker Studio",
	"Power BI",
	"PyTorch",
	"TensorFlow",
  "Scikit-learn",
	"LlamaIndex",
	"Langchain",
	"MongoDB",
	"Django",
	"Firebase",
	"HTML",
	"CSS",
	"React",
	"Next.js",
	"Vue.js",
	"Redux",
  "Tailwind",
	"Material UI",
	"Bootstrap",
  "Git",
	"Excel",
	"Alteryx",
] as const;

