
import React from 'react';
import {
  GraduationCap,
  Lightbulb,
  Briefcase,
  Target,
  Code,
  Globe,
  ShoppingCart,
  Server,
  Database,
  Terminal,
  Cpu,
  Layout,
  Smartphone,
  FileText,
  CheckCircle,
  Zap,
  Shield,
  BarChart,
  GitBranch,
  Container,
  Compass
} from 'lucide-react';
import { Service, Domain, NavItem, Project, PricingPlan } from './types';

export const COMPANY_NAME = "RANBIDGE SOLUTIONS PVT LTD";
export const TAGLINE = "Transform Your Dreams Into Reality—Learn, Build, and Lead the Future";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Domains', href: '#domains' },
  { label: 'Internship', href: '#internship-modal' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    title: "Internship Programs",
    description: "Structured 4-8 week programs providing industry-guided experience to bridge the skill gap.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Mobile App Development",
    description: "High-performance cross-platform mobile applications built with Flutter and React Native for Android and iOS.",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "Skill Development",
    description: "Curriculum designed to enhance technical proficiency and professional soft skills.",
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "Project-Based Learning",
    description: "Hands-on experience with mini and final year projects under expert mentorship.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Research & Projects Support",
    description: "End-to-end guidance for research papers (IEEE/Scopus including writing & publishing) and academic projects with documentation.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Career Guidance",
    description: "Personalized career counseling, resume building, interview preparation, and placement assistance to help you land your dream job.",
    icon: <Compass className="w-6 h-6" />
  }
];

export const DOMAINS: Domain[] = [
  {
    id: "webdev",
    name: "Web Development",
    description: "Building responsive and scalable web applications using modern frameworks.",
    topics: ["HTML5/CSS3", "JavaScript (ES6+)", "React & Next.js", "Tailwind CSS"],
    projects: [
      {
        title: "E-Commerce Platform",
        description: "Full-featured shopping cart, payment integration, and admin dashboard.",
        tags: ["React", "Node.js", "Stripe"],
        link: "#",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Corporate Portfolio",
        description: "High-performance company website with CMS integration.",
        tags: ["Next.js", "Tailwind", "Sanity"],
        link: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Task Management App",
        description: "Real-time collaboration tool with drag-and-drop features.",
        tags: ["React", "Firebase", "DnD"],
        link: "#",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "python",
    name: "Python Programming",
    description: "Mastering the versatility of Python for automation and scripting.",
    topics: ["Core Python", "Data Structures", "Automation", "API Development"],
    projects: [
      {
        title: "Data Scraper Bot",
        description: "Automated extraction of data from multiple websites.",
        tags: ["Python", "Selenium", "BeautifulSoup"],
        link: "#",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "File Organizer",
        description: "Script to auto-organize system files by type and date.",
        tags: ["Python", "OS Module"],
        link: "#",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "datascience",
    name: "Data Science",
    description: "Introductory exploration of data analysis and visualization techniques.",
    topics: ["NumPy & Pandas", "Data Visualization", "Statistical Analysis", "SQL Basics"],
    projects: [
      {
        title: "Sales Dashboard",
        description: "Interactive visualization of retail sales data.",
        tags: ["Python", "Pandas", "Matplotlib"],
        link: "#",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Customer Segmentation",
        description: "Clustering analysis to identify customer groups.",
        tags: ["Scikit-learn", "K-Means"],
        link: "#",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "aiml",
    name: "AI & Machine Learning",
    description: "Foundational concepts of artificial intelligence and predictive modeling.",
    topics: ["Supervised Learning", "Neural Networks Intro", "Model Evaluation", "ML Pipeline"],
    projects: [
      {
        title: "Image Classifier",
        description: "Convolutional Neural Network to identify objects in images.",
        tags: ["TensorFlow", "CNN", "Keras"],
        link: "#",
        image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Price Predictor",
        description: "Regression model to predict real estate prices.",
        tags: ["Python", "Scikit-learn"],
        link: "#",
        image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "uiux",
    name: "UI/UX Design",
    description: "Designing user-centric interfaces and understanding interaction flows.",
    topics: ["Wireframing", "Figma Fundamentals", "Design Thinking", "Prototyping"],
    projects: [
      {
        title: "Mobile App Redesign",
        description: "Modern UI overhaul for a fintech application.",
        tags: ["Figma", "Prototyping"],
        link: "#",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Design System",
        description: "Comprehensive component library and style guide.",
        tags: ["Figma", "Auto Layout"],
        link: "#",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "paperwriting",
    name: "Research & Writing",
    description: "Professional assistance in academic and research paper writing.",
    topics: ["Research Papers", "Technical Writing", "Literature Review", "Citations"],
    projects: [
      {
        title: "IEEE Conference Paper",
        description: "Drafting and formatting for international conference submission.",
        tags: ["LaTeX", "Research"],
        link: "#",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Technical Documentation",
        description: "API references and user manuals for software products.",
        tags: ["Markdown", "Technical Writing"],
        link: "#",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

// HOME PAGE: RESULTS (Showcase)
export const HOME_RESULTS: Project[] = [
  {
    title: "Hotel Booking Web",
    description: "Modern hotel reservation platform with seamless booking experience and real-time availability management.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://ik.imagekit.io/6fw6d1yu8/Luksi%20Travels.jpeg",
    link: "https://hotel-booking-web-6cie.vercel.app/"
  },
  {
    title: "Music Vibes",
    description: "Multi-vendor marketplace with real-time inventory and logistics tracking.",
    tags: ["Next.js", "Supabase", "Stripe"],
    image: "https://ik.imagekit.io/6fw6d1yu8/Music%20app.jpeg"
  },
  {
    title: "Urban Restaurant",
    description: "Modern food delivery platform connecting local cafes with customers for seamless ordering experience.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://ik.imagekit.io/6fw6d1yu8/Urban%20Bites.jpeg",
    link: "https://urbanbitescafe.vercel.app/"
  }
];

// TECH STACK DATA
export const TECH_STACK = [
  { name: "Next.js", icon: <Globe size={18} />, color: "bg-slate-900", border: "border-slate-700" },
  { name: "React", icon: <Code size={18} />, color: "bg-blue-900/40", border: "border-blue-700" },
  { name: "TypeScript", icon: <Code size={18} />, color: "bg-blue-600/20", border: "border-blue-500" },
  { name: "Python", icon: <Terminal size={18} />, color: "bg-yellow-600/20", border: "border-yellow-500" },
  { name: "Node.js", icon: <Server size={18} />, color: "bg-green-600/20", border: "border-green-500" },
  { name: "Tailwind", icon: <Layout size={18} />, color: "bg-cyan-600/20", border: "border-cyan-500" },
  { name: "Supabase", icon: <Database size={18} />, color: "bg-emerald-600/20", border: "border-emerald-500" },
  { name: "Docker", icon: <Container size={18} />, color: "bg-blue-500/20", border: "border-blue-400" },
  { name: "Git", icon: <GitBranch size={18} />, color: "bg-orange-600/20", border: "border-orange-500" },
  { name: "Figma", icon: <Layout size={18} />, color: "bg-purple-600/20", border: "border-purple-500" },
];

// PRICING PLANS
export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Basic Plan",
    price: "₹11,999",
    tagline: "Best for starters",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive",
      "Contact Form",
      "Social Media Integration",
      "Basic UI Design",
      "6 months free Hosting",
      "Basic SEO Setup",
      "15 Days free Support"
    ],
    recommended: false
  },
  {
    title: "Intermediate Plan",
    price: "₹23,999",
    tagline: "Best for small businesses & Medium weight website",
    features: [
      "Up to 10 Pages",
      "CMS Integration(Admin Panel)",
      "Custom UI/UX Design",
      "Advanced SEO",
      "Analytics Setup",
      "WhatsApp Chat integration",
      "6 months free Hosting",
      "1Month free Domain",
      "1 Month free Maintanence Support",
      "45 Days free Support"
    ],
    recommended: true
  },
  {
    title: "Pro Plan",
    price: "₹38,999",
    tagline: "Best for E-commerce & Advanced Features",
    features: [
      "More than 10 pages",
      "Product management",
      "Payment Gateway Integration",
      "Admin Dashboard",
      "Order Management",
      "Feedback & Reviews",
      "Email notifications",
      "6 months free Hosting",
      "6 Months free Domain",
      "3 Months free Maintanence Support",
      "6 Months free Support",
    ],
    recommended: false
  }
];

// PROCESS ROADMAP
export const PROCESS_STEPS = [
  { title: "Discovery", desc: "Understanding Requirements", icon: <Target /> },
  { title: "Planning", desc: "Architecture & Roadmap", icon: <BarChart /> },
  { title: "Design", desc: "UI/UX & Prototyping", icon: <Layout /> },
  { title: "Development", desc: "Coding & Integration", icon: <Code /> },
  { title: "Testing", desc: "QA & Performance", icon: <Shield /> },
  { title: "Deployment", desc: "Launch & Support", icon: <Zap /> },
];
// FAQ DATA
export const FAQ_DATA = [
  {
    question: "How do I apply for an internship?",
    answer: "You can apply directly through our Internship page by clicking 'Apply Now' on your preferred domain tracks."
  },
  {
    question: "Do you provide Scopus/IEEE publication support?",
    answer: "Yes, we provide end-to-end guidance for research writing, formatting as per Scopus/IEEE standards, and finding suitable publishers."
  },
  {
    question: "Can I get a custom project for my business?",
    answer: "Absolutely! We specialize in custom web applications, mobile apps, and AI solutions tailored to your specific business requirements."
  },
  {
    question: "Is the training online or offline?",
    answer: "We offer flexible modes including online instructor-led sessions and hybrid models depending on the program."
  }
];
