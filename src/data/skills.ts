export interface SkillNode {
  id: string;
  label: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  color: "jali" | "ochre" | "brick";
  skills: SkillNode[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    color: "jali",
    skills: [
      { id: "c", label: "C" },
      { id: "cpp", label: "C++" },
      { id: "python", label: "Python" },
      { id: "js", label: "JavaScript" },
    ],
  },
  {
    id: "core-cs",
    label: "Core CS",
    color: "ochre",
    skills: [
      { id: "dsa", label: "Data Structures & Algorithms" },
      { id: "oop", label: "OOP" },
      { id: "dbms", label: "DBMS" },
      { id: "cn", label: "Computer Networks" },
      { id: "os", label: "Operating Systems" },
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    color: "brick",
    skills: [
      { id: "aws", label: "AWS (EC2, S3, IAM)" },
      { id: "docker", label: "Docker" },
      { id: "linux", label: "Linux" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    color: "jali",
    skills: [
      { id: "node", label: "Node.js" },
      { id: "express", label: "Express.js" },
      { id: "fastapi", label: "FastAPI" },
      { id: "rest", label: "REST APIs" },
      { id: "jwt", label: "JWT Authentication" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    color: "ochre",
    skills: [
      { id: "mongodb", label: "MongoDB" },
      { id: "mysql", label: "MySQL" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    color: "brick",
    skills: [
      { id: "react", label: "React.js" },
      { id: "html", label: "HTML" },
      { id: "css", label: "CSS" },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    color: "jali",
    skills: [
      { id: "ml", label: "Machine Learning" },
      { id: "genai", label: "Generative AI" },
      { id: "llm", label: "LLM Integration" },
      { id: "eval", label: "Model Evaluation" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    color: "ochre",
    skills: [
      { id: "git", label: "Git" },
      { id: "github", label: "GitHub" },
      { id: "postman", label: "Postman" },
      { id: "streamlit", label: "Streamlit" },
    ],
  },
];
