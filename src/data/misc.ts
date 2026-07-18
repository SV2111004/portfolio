export interface CodingProfile {
  id: string;
  platform: string;
  handle: string;
  description: string;
  url: string;
}

// GitHub/Codeforces stats intentionally left at 0 — the resume names these
// profiles but doesn't give numbers. Fill in real repo/contribution/rating
// counts once you have them handy.
export const codingProfiles: CodingProfile[] = [
  {
    id: "leetcode",
    platform: "LeetCode",
    handle: "@shubhra21004",
    description:
      "Solved 700+ DSA problems with a 1793 contest rating, consistently sharpening algorithmic thinking through weekly contests",
    url: "https://leetcode.com/u/shubhra21004/",
  },
  {
    id: "github",
    platform: "GitHub",
    handle: "@SV2111004",
    description:
      "Showcasing full-stack development projects, open-source contributions, and personal experiments",
    url: "https://github.com/SV2111004",
  },
  {
    id: "codechef",
    platform: "CodeChef",
    handle: "@shubhraaa_21",
    description:
      "Achieved 2★ with a highest rating of 1420, regularly participating in competitive programming contests",
    url: "https://www.codechef.com/users/shubhraaa_21",
  },
  {
    id: "codeforces",
    platform: "Codeforces",
    handle: "gp.shubhra78",
    description:
      "Solving advanced algorithmic problems and participating in rated contests to improve speed and problem-solving",
    url: "https://codeforces.com/profile/gp.shubhra78",
  },
];

export interface Achievement {
  id: string;
  title: string;
  value: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: "leetcode-rating",
    title: "LeetCode Rating",
    value: "1793",
    description: "Contest rating, with 700+ DSA problems solved.",
  },
  {
    id: "nptel",
    title: "NPTEL Elite",
    value: "Top 1%",
    description: "Cloud Computing certification (IIT Kharagpur), scored 94%.",
  },
  {
    id: "gssoc",
    title: "Open Source",
    value: "GSSoC 2025",
    description: "Contributed bug fixes and feature enhancements to WebDevIn100_Days via GitHub pull requests.",
  },
  {
    id: "sih",
    title: "Hackathon Qualifier",
    value: "SIH 2024",
    description: "Internal round qualifier for Smart India Hackathon with a healthcare system solution.",
  },
  {
    id: "mentoring",
    title: "Peer Mentoring",
    value: "150+ students",
    description: "Mentored a C++ workshop and helped organise IEEE technical events as a Technical CSE Volunteer.",
  },
{
id:"codechef",
title:"codechef rating",
value: "1420",
description: "2 star on codechef",
},
];

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
}

export const education: EducationEntry[] = [
  {
    id: "jiit",
    institution: "Jaypee Institute of Information Technology, Noida",
    degree: "B.Tech, Computer Science & Engineering",
    duration: "2023 — 2027",
    score: "9.3",
    scoreLabel: "CGPA",
    highlights: [
      "Final-year student",
      "Core CS: DSA, OOP, DBMS, Computer Networks, Operating Systems",
    ],
  },
  {
    id: "cvps",
    institution: "City Vocational Public School, Meerut",
    degree: "CBSE, Class XII",
    duration: "2021 — 2022",
    score: "98.8",
    scoreLabel: "Class XII %",
    highlights: ["Class X (2019–2020): 96.6%"],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "profiles", label: "Profiles" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

// TODO: swap "#" for your hosted-resume-PDF URL once you have one live
// (e.g. a link to this same PDF hosted on GitHub Pages, Google Drive, etc.)
export const socialLinks = {
  github: "https://github.com/SV2111004",
  linkedin: "https://www.linkedin.com/in/shubhra-varshney-814015293/",
  email: "mailto:gp.shubhra78@gmail.com",
  resume: "/resume.pdf",
};

export const rotatingTitles = [
  "Software Engineer",
  "Full Stack Developer",
  "AI/ML Engineer",
  "Problem Solver",
  "Open Source Contributor",
];
