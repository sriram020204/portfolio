
export interface Project {
  id: string;
  title: string;
  description: string[];
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  dates: string;
  gpa?: string;
  details?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  description: string[];
  location?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  contact: ContactInfo;
  heroTagline: string;
  aboutMe: string[];
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export const portfolioData: PortfolioData = {
  name: "Ginjala Sri Ram Kumar Reddy",
  role: "AI/ML & NLP Enthusiast",
  contact: {
    email: "sriramginjala60@gmail.com",
    phone: "+91 8790567522",
    linkedin: "https://www.linkedin.com/in/sriram-kumar-reddy-ginjala/",
    github: "https://github.com/sriram020204",
  },
  heroTagline: "Passionate about machine learning and dedicated to advancing technology through impactful projects.",
  aboutMe: [
    "Passionate about machine learning and skilled. Enrolled in a Bachelor’s program in Computer Science Engineering, demonstrating a dedication to lifelong study and advancement.",
    "I’m excited to contribute to unique projects that advance technology and have a meaningful impact."
  ],
  skills: [
    { category: "Languages", skills: ["Python", "Java", "C", "MySQL"] },
    { category: "Machine Learning", skills: ["Deep Learning", "Neural Networks", "Image Processing", "Natural Language Processing (NLP)", "LLM Fine-tuning"] },
    { category: "Data Science & Analytics", skills: ["Data Pre-processing", "Feature Engineering", "Exploratory Data Analysis (EDA)", "Statistical Analysis", "Predictive Modeling"] },
    { category: "Developer Tools", skills: ["Git", "GitHub", "Azure"] },
    { category: "Libraries & Frameworks", skills: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Keras", "NLTK", "Matplotlib", "Seaborn", "PyTorch", "spaCy", "Hugging Face Transformers"] }
  ],
  projects: [
    {
      id: "medico",
      title: "Medical Automation System – Diet Recommendation",
      description: [
        "Developed a personalized diet recommendation system integrated into a medical automation platform.",
        "Leveraged K-Nearest Neighbors (k = 5) to recommend meal plans based on user health records, nutritional requirements, and restrictions.",
        "Enhanced doctor-patient interaction by automating dietary consultations.",
        "Used patient data (e.g., BMI, height, preferences, etc.) to recommend diets.",
        "Created a scalable module integrated with other patient services."
      ],
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
      githubLink: "https://github.com/SlayZ121/Medico",
    },
    {
      id: "electricity-demand",
      title: "Electricity Demand Prediction using LSTM",
      description: [
        "Built a deep learning model using LSTM to forecast electricity consumption based on historical usage, weather, holidays, and temporal features.",
        "The model achieved <8% error, aiding utilities in load balancing and efficient grid management.",
        "Used time series data with external features for contextual forecasting.",
        "Designed model pipeline from data cleaning to deployment-ready results."
      ],
      techStack: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy"],
    },
    {
      id: "spam-classifier",
      title: "Spam vs Ham Text Classifier",
      description: [
        "Built a binary classification system to detect spam SMS using natural language processing and Naive Bayes.",
        "Preprocessing included tokenization, lemmatization, stopword removal, and TF-IDF vectorization.",
        "Addressed class imbalance using RandomOverSampler and validated with ROC-AUC and confusion matrix visualizations.",
        "Full pipeline: Data cleaning, feature extraction, modeling, and evaluation.",
        "Achieved high accuracy and recall with balanced dataset."
      ],
      techStack: ["Python", "Scikit-Learn", "NLTK", "Pandas", "Matplotlib"],
      githubLink: "https://github.com/sriram020204",
    }
  ],
  experience: [
    {
      company: "Quadric IT",
      role: "AI/ML Intern",
      dates: "May 2025 – Present",
      description: [
        "Currently working on extracting eligibility criteria from tender documents.",
        "Developing methods to compare extracted tender information with company profiles.",
        "This is an ongoing project focused on automating and improving the tender bidding process."
      ],
      location: "Hyderabad, Telangana (On-site)"
    }
  ],
  education: [
    {
      institution: "Atal Bihari Vajpayee Indian Institute of Information Technology and Management",
      degree: "BS in Computer Science",
      dates: "Nov. 2022 – June 2026",
      gpa: "7.70/10",
    }
  ]
};
