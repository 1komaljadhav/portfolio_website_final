
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Award, Microscope, Calendar } from "lucide-react";

const Research = () => {
  const research = [
    {
      title: "Plant Disease Detection Using Deep Learning",
      year: "2024",
      venue: "International Conference on Data Science and Communication (ICDSC)",
      type: "Conference Presentation",
      description: "Advanced machine learning approach for early detection and classification of plant diseases using computer vision techniques and convolutional neural networks.",
      impact: "Achieved 94% accuracy in disease classification",
      gradient: "from-emerald-400 to-teal-500",
      icon: Award
    },
    {
      title: "Mental Health Chatbot with NLP Integration",
      year: "2024",
      venue: "IJARESM Journal",
      type: "Journal Publication",
      description: "AI-powered conversational agent for mental health support with advanced natural language processing, sentiment analysis, and personalized therapeutic recommendations.",
      impact: "Deployed for 500+ users with positive feedback",
      gradient: "from-purple-400 to-indigo-500",
      icon: FileText
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-purple-50/40 via-white/30 to-rose-50/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-rose-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-sm mb-6">
            <Microscope className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-gray-600">Research Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Research & Publications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contributing to AI advancement through innovative research
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {research.map((item, index) => (
            <Card key={index} className="group bg-white/60 border-white/40 hover:bg-white/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm overflow-hidden relative">
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${item.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors leading-tight">
                        {item.title}
                      </CardTitle>
                      <div className="flex items-center mt-2">
                        <span className={`text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.type}
                        </span>
                        <div className="flex items-center ml-4">
                          <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {item.description}
                </CardDescription>
                
                <div className={`p-4 rounded-lg bg-gradient-to-r ${item.gradient.replace('400', '50').replace('500', '100')} border border-white/50`}>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Impact & Achievement</p>
                  <p className="text-sm text-gray-600">{item.impact}</p>
                </div>
                
                <div className={`p-4 rounded-lg bg-gradient-to-r ${item.gradient.replace('400', '50').replace('500', '100')} border border-white/50`}>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Published in</p>
                  <p className="text-sm text-gray-600">{item.venue}</p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 hover:bg-gray-50 group/btn mt-6"
                >
                  <FileText className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  View Publication
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
