
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Award, ExternalLink, Star, Trophy } from "lucide-react";
import { Button } from "./ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "IBM Full Stack Software Developer",
      issuer: "IBM",
      description: "Comprehensive certification covering full-stack development with modern technologies, cloud computing, and industry best practices.",
      skills: ["React", "Node.js", "Python", "Cloud Computing", "DevOps", "Microservices"],
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      level: "Professional",
      credentialId: "IBM-2024-FSW"
    },
    {
      title: "Full Stack JavaScript Developer",
      issuer: "Professional Certification Authority",
      description: "Advanced certification focusing on JavaScript ecosystem, modern web development frameworks, and full-stack application architecture.",
      skills: ["JavaScript", "React", "Express.js", "MongoDB", "RESTful APIs", "Testing"],
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      level: "Advanced",
      credentialId: "PCA-2024-JS"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-emerald-50/40 via-white/30 to-sky-50/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-sky-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-sm mb-6">
            <Trophy className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-sm font-medium text-gray-600">Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="group bg-white/60 border-white/40 hover:bg-white/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm overflow-hidden relative">
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${cert.gradient} mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors leading-tight mb-2">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className={`text-lg font-semibold bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}>
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${cert.bgGradient} border border-white/50 mb-2`}>
                      <span className="text-sm font-semibold text-gray-700">{cert.level}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-500">Verified</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className={`p-4 rounded-lg bg-gradient-to-r ${cert.bgGradient} border border-white/50`}>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">Core Competencies:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.gradient} mr-2`}></div>
                        <span className="text-sm text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.bgGradient} border border-white/50`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Credential ID</p>
                      <p className="text-sm font-mono text-gray-800">{cert.credentialId}</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 hover:bg-gray-50 group/btn"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">2+</div>
              <p className="text-gray-600 font-medium">Professional Certifications</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent mb-2">12+</div>
              <p className="text-gray-600 font-medium">Skills Validated</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">100%</div>
              <p className="text-gray-600 font-medium">Completion Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
