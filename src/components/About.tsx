
import { GraduationCap, Award, Code, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const education = [
    {
      degree: "BTech, Computer Science and Engineering (Artificial Intelligence)",
      institution: "Vishwakarma Institute of Information Technology, Pune",
      grade: "CGPA: 9.07",
      status: "Current",
      color: "from-rose-400 to-pink-400"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic, Dhule",
      grade: "89.85%",
      color: "from-purple-400 to-indigo-400"
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Adarsh high school, Dhule",
      grade: "81%",
      color: "from-sky-400 to-cyan-400"
    },
    {
      degree: "Secondary (10th)",
      institution: "Karm A. M. Patil school, Dhule",
      grade: "93.20%",
      color: "from-emerald-400 to-teal-400"
    }
  ];

  const skills = {
    "Programming Languages": {
      items: ["C", "C++", "Java", "Python", "PHP"],
      color: "from-rose-100 to-pink-100",
      icon: Code
    },
    "Web Development": {
      items: ["HTML", "CSS", "Tailwind", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MySQL", "MongoDB"],
      color: "from-purple-100 to-indigo-100",
      icon: Code
    },
    "Tools": {
      items: ["Git", "GitHub"],
      color: "from-sky-100 to-cyan-100",
      icon: Code
    },
    "CS Core": {
      items: ["Data Structures & Algorithms", "OS", "CN", "OOP"],
      color: "from-emerald-100 to-teal-100",
      icon: Code
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white/40 via-rose-50/30 to-purple-50/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-sky-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-rose-400 mr-2" />
            <span className="text-sm font-medium text-gray-600">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Passionate Developer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creating innovative solutions through technology and AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Education Journey</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="group bg-white/60 border-white/40 hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${edu.color} mr-3`}></div>
                          <h4 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                            {edu.degree}
                          </h4>
                        </div>
                        {edu.institution && (
                          <p className="text-gray-600 text-sm mb-1 ml-6">{edu.institution}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className={`font-bold text-transparent bg-gradient-to-r ${edu.color} bg-clip-text`}>
                          {edu.grade}
                        </span>
                        {edu.status && (
                          <p className="text-xs text-emerald-600 font-medium">{edu.status}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Technical Arsenal</h3>
            </div>
            
            <div className="space-y-6">
              {Object.entries(skills).map(([category, { items, color, icon: IconComponent }]) => (
                <div key={category} className="group">
                  <div className="flex items-center mb-3">
                    <IconComponent className="w-5 h-5 text-gray-600 mr-2" />
                    <h4 className="font-bold text-gray-700 group-hover:text-gray-800 transition-colors">
                      {category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${color} text-gray-700 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md border border-white/40`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
