import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hawkhubImg from "@/public/hawkhub.png";
import decisionTreeImg from "@/public/decisiontree.png";
import stockifyProImg from "@/public/stockify.png";
import tassImg from "@/public/TASS.png";
import hackImg from "@/public/tiktokshop.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    company: "SariSuki",
    title: "Senior Analyst, NUS Business Analytics Consulting Team",
    location: "Singapore",
    description:
      "Currently collaborating with SariSuki to predict prices for agricultural products.\n" +
      "I have implemented time series analysis such as ARIMA/SARIMAX modelling to forecast product prices.\n" +
      "Important findings and visualizations were presented to SariSuki Data Science team for actionable insights.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    company: "NUS Computing",
    title: "Teaching Assistant",
    location: "Singapore",
    description:
      "Currently conducting class tutorials and marking assignments for a class of 30 students.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    company: "UOB Kay Hian",
    title: "Data Management Unit Contract Staff",
    location: "Singapore",
    description:
      "Conducted onboarding of UOBKH & Endowus individual accounts while ensuring conformity to internal and regulatory AML/CFT/CDD requirements.\n" +
      "Proactively collaborated with Clients, Trading Representatives (TRs), Client Services, and Compliance to rectify discrepancies and aided in the modification of clients' trade rates when necessary.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
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
  "R",
  "SQL",
  "Tableau",
  "Power BI",
  "Numpy",
  "Pandas",
  "scikit-learn",
  "TensorFlow",
  "PyTorch",
  "Alteryx",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "Django",
  "Firebase",
  "Vue 3",
  "Nuxt 3",
  "Material UI",
  "Bootstrap",
  "ReactJs",
  "Excel",
] as const;
