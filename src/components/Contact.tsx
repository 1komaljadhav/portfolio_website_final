import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Sparkles
} from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "./ui/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_p5761sh',       // replace with your EmailJS service ID
        'template_jysnyzt',      // replace with your EmailJS template ID
        formRef.current!,
        'F9ALrNPsZuq4bg7Xa'        // replace with your EmailJS public key
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jadhavkomal518@gmail.com",
      href: "mailto:jadhavkomal518@gmail.com",
      color: "from-rose-400 to-pink-500",
      bgColor: "from-rose-50 to-pink-50"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7385823219",
      href: "tel:+917385823219",
      color: "from-purple-400 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      color: "from-sky-400 to-cyan-500",
      bgColor: "from-sky-50 to-cyan-50"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-800 hover:to-black"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-sky-50/40 via-white/30 to-rose-50/40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-rose-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-sky-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-sm mb-6">
            <MessageCircle className="w-4 h-4 text-sky-400 mr-2" />
            <span className="text-sm font-medium text-gray-600">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss opportunities and bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-gray-800 font-semibold hover:text-gray-900 transition-colors text-lg">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-semibold text-lg">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div>
              <h4 className="text-xl font-bold text-gray-800 mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-white/40"
                  >
                    <social.icon className={`w-6 h-6 bg-gradient-to-r ${social.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200`} />
                  </a>
                ))}
              </div>
            </div> */}

            <div className="bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/40 shadow-lg">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
                Quick Response
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">24hrs</div>
                  <p className="text-sm text-gray-600">Response Time</p>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">100%</div>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Right Column */}
          <div>
            <Card className="bg-white/60 border-white/40 shadow-xl backdrop-blur-sm hover:bg-white/70 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <Send className="w-6 h-6 mr-3 text-rose-400" />
                  Send Message
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      required
                      disabled={isSubmitting}
                      className="bg-white/80 border-gray-200 focus:border-rose-400 focus:ring-rose-400/20 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                      className="bg-white/80 border-gray-200 focus:border-rose-400 focus:ring-rose-400/20 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      required
                      disabled={isSubmitting}
                      className="flex w-full rounded-md border border-gray-200 bg-white/80 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/20 focus-visible:ring-offset-2 focus-visible:border-rose-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-rose-400 to-purple-500 hover:from-rose-500 hover:to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
