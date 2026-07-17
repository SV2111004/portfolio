import resqnetImg from "../assets/projects/resqnet.png";
import metroImg from "../assets/projects/metro.png";
import aiDocImg from "../assets/projects/ai-doc.png";
export interface Project {
  id: string;
  name: string;
  tagline: string;
  stack: string[];
  coverImage: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  learnings: string;
  demoUrl?: string;
  githubUrl?: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "resqnet",
    name: "ResQNet",
    tagline: "A real-time disaster response platform connecting citizens, responders, and command.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "React Leaflet"],
    coverImage: resqnetImg,
    problem:
      "During emergencies, citizen reports need to reach the right responder fast, with a clear sense of severity and location — not sit in a queue for manual triage.",
    solution:
      "Built a MERN platform where Socket.io broadcasts citizen-reported emergencies to a command-center dashboard in real time, and an automatic priority-scoring system ranks each report as it comes in.",
    architecture:
      "Responder assignment runs on live GPS: Dijkstra's algorithm (implemented from scratch) finds optimal routing, and the Haversine formula picks the nearest available responder and shelter. Role-based access control (Citizen, Responder, Admin) is enforced with JWT authentication.",
    challenges:
      "Keeping the dashboard consistent across many simultaneous socket connections while priority scores and responder positions update live, without the map or mission list ever showing stale state.",
    learnings:
      "Hands-on experience combining classic graph algorithms with a real-time event system — routing logic that's usually a batch computation had to work correctly on live, constantly-changing data.",
    demoUrl: "https://res-q-net-chi.vercel.app/",
    githubUrl: "https://github.com/SV2111004/ResQNet",
    screenshots: [],
  },
  {
    id: "smart-metro",
    name: "Smart Metro Management System",
    tagline: "A 25-station metro network simulation with routing, fares, and patrol optimization.",
    stack: ["C++", "OOP", "Graph Algorithms", "Dijkstra", "Chinese Postman Problem"],
    coverImage: metroImg,
    problem:
      "Modeling a metro system realistically means handling more than shortest paths — fare logic, staff operations, and network-wide maintenance routes all need to be represented too.",
    solution:
      "Modeled a 25-station weighted metro network in C++ using object-oriented design, with separate user and staff modes, smart-card fare handling, and multi-station facility management.",
    architecture:
      "Two algorithms sit on top of the same weighted graph: Dijkstra's algorithm for shortest-path routing between stations, and a solution to the Chinese Postman Problem for optimizing patrol routes that need to cover every edge in the network.",
    challenges:
      "The Chinese Postman Problem is a different class of problem from shortest-path routing — getting patrol routes to cover the full network efficiently, rather than just point-to-point, took a different algorithmic approach than the fare/routing side of the system.",
    learnings:
      "Solidified graph theory fundamentals by applying two distinct algorithms to the same underlying data structure for two genuinely different real-world goals.",
    githubUrl: "https://github.com/SV2111004/Metro-system",
    screenshots: [],
  },
  {
    id: "ai-doc-intel",
    name: "AI Document Intelligence System",
    tagline: "Turns PDFs into summaries, Q&A, structured planners, and multi-speaker podcasts.",
    stack: ["Python", "FastAPI", "React", "Gemini API", "Edge-TTS", "Pydub"],
    coverImage: aiDocImg,
    problem:
      "Dense PDFs — lecture notes, study material, documentation — take a long time to work through manually, and the format doesn't fit how most people actually want to consume the content.",
    solution:
      "Built a full-stack platform with FastAPI, React, and the Gemini API that processes PDF documents into summaries, context-aware Q&A responses, and structured study, lecture, and lab planners.",
    architecture:
      "A separate pipeline handles audio: the Gemini API generates a multi-speaker conversational script from the document, Edge-TTS synthesizes each speaker's voice, and Pydub merges the tracks into a single 2–10 minute podcast-style file.",
    challenges:
      "Coordinating three distinct stages — script generation, per-speaker voice synthesis, and audio merging — into one pipeline that reliably produces a natural-sounding, correctly-timed conversation from arbitrary source documents.",
    learnings:
      "Practical experience chaining an LLM API with a text-to-speech and audio-processing pipeline, and designing prompts that produce output structured enough to drive the next stage automatically.",
    githubUrl: "https://github.com/Akshat-1618/AI-Document-Assisstant",
    screenshots: [],
  },
];
