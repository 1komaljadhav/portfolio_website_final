
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Code, Brain, FileText, MessageSquare, Lightbulb, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern technologies like MERN stack, ensuring scalable, responsive, and high-performance solutions.",
      color: "from-rose-400 to-pink-500",
      bgColor: "from-rose-50 to-pink-50",
      features: ["React & Next.js", "Node.js & Express", "MongoDB & MySQL", "Responsive Design"]
    },
    {
      icon: Brain,
      title: "ML Integration in Web Apps",
      description: "Seamlessly integrate machine learning models into web applications for intelligent, data-driven user experiences and predictive analytics.",
      color: "from-purple-400 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      features: ["TensorFlow Integration", "Predictive Analytics", "Real-time Processing", "Custom ML Models"]
    },
    {
      icon: FileText,
      title: "AI Document Automation",
      description: "AI-powered tools for generating personalized resumes, cover letters, and professional documents tailored to specific requirements.",
      color: "from-sky-400 to-cyan-500",
      bgColor: "from-sky-50 to-cyan-50",
      features: ["Resume Generation", "Cover Letter AI", "Document Templates", "ATS Optimization"]
    },
    {
      icon: MessageSquare,
      title: "Interview Simulation Platforms",
      description: "Interactive platforms that simulate real interview scenarios with AI-powered feedback, analytics, and performance improvement insights.",
      color: "from-emerald-400 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      features: ["Mock Interviews", "AI Feedback", "Performance Analytics", "Industry-Specific"]
    },
    {
      icon: Lightbulb,
      title: "Research-based AI Prototyping",
      description: "Develop proof-of-concept AI solutions based on latest research findings, cutting-edge technologies, and innovative approaches.",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      features: ["Research Implementation", "POC Development", "Innovation Labs", "Custom Solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-rose-50/40 via-white/30 to-purple-50/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-rose-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-sky-200/10 to-emerald-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-rose-400 mr-2" />
            <span className="text-sm font-medium text-gray-600">What I Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Services & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions combining web development with AI innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group bg-white/60 border-white/40 hover:bg-white/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm overflow-hidden relative">
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors leading-tight">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className={`p-4 rounded-lg bg-gradient-to-r ${service.bgColor} border border-white/50`}>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-2`}></div>
                        <span className="text-xs text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">Let's discuss how I can help bring your ideas to life with cutting-edge technology.</p>
            <button className="px-8 py-3 bg-gradient-to-r from-rose-400 to-purple-500 text-white font-semibold rounded-full hover:from-rose-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
