import hawkhubImg from "@/public/hawkhub.png";
import decisionTreeImg from "@/public/decisiontree.png";
import stockifyProImg from "@/public/stockify.png";
import tassImg from "@/public/TASS.png";
import hackImg from "@/public/tiktokshop.jpeg";
import courserecommendationImg from "@/public/courserecommendation.png";
import stocksentimentImg from "@/public/stocksentiment.png";
import travelpalImg from "@/public/travelpal.png";

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

