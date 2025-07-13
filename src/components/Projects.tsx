import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Github,
  ExternalLink,
  FileText,
  Sparkles,
  Star,
} from "lucide-react";

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects = [
    {
      title: "AI-Powered Code Evaluation System",
      description:
        "Advanced evaluation platform using semantic similarity, grammar analysis, and keyword matching for automated assessment.",
      tech: ["Python", "Flask", "HTML", "CSS", "Machine Learning"],
      github: "#",
      demo: "#",
      video: "/videos/code-eval-demo.mp4",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      featured: true,
      gradient: "from-rose-400 to-pink-500",
    },
    {
      title: "AI Interviewer Mock Platform",
      description:
        "Intelligent interview simulation with real-time feedback analytics and performance insights.",
      tech: ["Tailwind CSS", "Next.js", "SQL", "ORM Drizzle", "AI Analytics"],
      github: "#",
      demo: "#",
      video: "/videos/code-eval-demo.mp4",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      featured: true,
      gradient: "from-purple-400 to-indigo-500",
    },
    {
      title: "AI Resume & Cover Letter Generator",
      description:
        "Intelligent document generation using Cohere AI for personalized professional documents.",
      tech: ["Python", "Streamlit", "PDF Libraries", "Cohere AI"],
      github: "#",
      demo: "#",
      video: "/videos/code-eval-demo.mp4",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      featured: true,
      gradient: "from-sky-400 to-cyan-500",
    },
    {
      title: "Mental Health Companion Chatbot",
      description:
        "Empathetic AI companion offering emotional support and personalized mood-based recommendations.",
      tech: ["Flask", "HTML", "CSS", "NLP", "Sentiment Analysis"],
      github: "#",
      paper: "#",
      video: "/videos/code-eval-demo.mp4",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Modern messaging platform with real-time communication and sleek user interface.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
      video: "/videos/code-eval-demo.mp4",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "Collaborative Task Management",
      description:
        "Feature-rich task management system with team collaboration and project tracking.",
      tech: ["MERN Stack", "MongoDB", "Real-time Updates"],
      github: "#",
      demo: "#",
      video: "/videos/code-eval-demo.mp4",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      gradient: "from-violet-400 to-pink-500",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-gray-50/50 via-white/30 to-sky-50/50 relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-sky-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-sm mb-6">
              <Star className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-gray-600">
                Featured Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Project Showcase
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Full-stack development meets AI innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-white/60 border-white/40 hover:bg-white/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm overflow-hidden relative"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                      <Sparkles className="w-3 h-3 text-yellow-500 mr-1" />
                      <span className="text-xs font-medium text-gray-700">
                        Featured
                      </span>
                    </div>
                  </div>
                )}

                <div className="aspect-video overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200/50 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 hover:bg-gray-50 group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>

                    {project.video && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveVideo(project.video)}
                        className="flex-1 border-gray-300 hover:bg-gray-50 group/btn"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Demo
                      </Button>
                    )}

                    {project.paper && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-300 hover:bg-gray-50 group/btn"
                      >
                        <FileText className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Paper
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* === Video Modal === */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="relative bg-white rounded-xl shadow-lg max-w-3xl w-full mx-4">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-t-xl"
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
