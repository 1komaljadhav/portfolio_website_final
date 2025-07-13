
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Building, Calendar, TrendingUp, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-sky-50/40 via-white/30 to-emerald-50/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-sky-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-sm mb-6">
            <Briefcase className="w-4 h-4 text-sky-400 mr-2" />
            <span className="text-sm font-medium text-gray-600">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building real-world solutions and making an impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group bg-white/60 border-white/40 hover:bg-white/80 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl backdrop-blur-sm overflow-hidden relative">
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-emerald-500"></div>
            
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between flex-col sm:flex-row gap-4">
                <div className="flex items-start">
                  <div className="p-4 rounded-full bg-gradient-to-r from-sky-400 to-emerald-500 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                      Full Stack Developer Intern
                    </CardTitle>
                    <CardDescription className="text-xl font-semibold text-transparent bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text mt-1">
                      UST Global
                    </CardDescription>
                    <div className="flex items-center mt-2 text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">Pune, India</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-gradient-to-r from-sky-100 to-emerald-100 px-4 py-2 rounded-full border border-white/50">
                  <Calendar className="w-4 h-4 mr-2 text-sky-600" />
                  <span className="text-sm font-medium text-gray-700">Aug 2024 - Nov 2024</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                Developed an innovative automated evaluation platform using cutting-edge Python, Flask, and Machine Learning technologies to revolutionize educational assessment processes.
              </p>
              
              <div className="bg-gradient-to-r from-emerald-50 to-sky-50 p-6 rounded-xl border border-white/50 shadow-inner">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-6 h-6 text-emerald-500 mr-3" />
                  <span className="font-bold text-gray-800 text-lg">Key Achievement</span>
                </div>
                <p className="text-gray-700 text-lg">
                  Revolutionized the grading process by reducing evaluation time by{" "}
                  <span className="font-bold text-2xl text-transparent bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text">
                    40%
                  </span>{" "}
                  through intelligent automation and ML-powered assessment algorithms.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-lg mb-4">Technologies & Skills Applied:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Python", "Flask", "Machine Learning", "HTML", "CSS", "JavaScript"].map((tech, index) => (
                    <div
                      key={index}
                      className="group/tech flex items-center px-4 py-3 bg-gradient-to-r from-sky-100 to-emerald-100 rounded-lg border border-white/50 hover:scale-105 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-emerald-500 mr-3 group-hover/tech:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-700 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-sky-50 p-6 rounded-xl border border-white/50">
                <h4 className="font-bold text-gray-800 mb-3">Project Impact:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-sky-400 mr-3"></div>
                    Enhanced assessment accuracy through semantic similarity analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3"></div>
                    Streamlined evaluation workflow for educational institutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
                    Implemented scalable ML models for automated grading
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
