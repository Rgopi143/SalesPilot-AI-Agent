import React from "react";
import { Link } from "react-router-dom";
import { Code, Database, Globe, Smartphone, Cloud, Shield } from "lucide-react";

const HomeServices: React.FC = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React/Vue/Angular", "Node.js/Python", "Responsive Design", "API Integration"]
    },
    {
      icon: <Database size={32} />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics",
      features: ["Data Visualization", "Machine Learning", "Business Intelligence", "Predictive Analytics"]
    },
    {
      icon: <Globe size={32} />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "iOS/Android Native", "App Store Deployment"]
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Serverless Architecture"]
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Security Training"]
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions to help your business thrive in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                <div className="text-blue-400">
                  {React.cloneElement(service.icon, { size: 24, className: "md:size-8" })}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900/50 backdrop-blur-md p-12 rounded-3xl border border-slate-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-slate-300 mb-8">
              We tailor our services to meet your specific business needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                View All Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;