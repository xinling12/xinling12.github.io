import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Mock data for purely frontend project
  const mockServices = [
    {
      id: 1,
      title: "Custom App Development",
      description: "Tailored mobile and web applications designed to meet your specific business needs and goals, from startups to enterprises.",
      icon: "Smartphone",
      category: "Development"
    },
    {
      id: 2,
      title: "Enterprise Web Solutions",
      description: "Scalable, secure, and high-performance websites for businesses ranging from restaurants to property agencies.",
      icon: "Globe",
      category: "Development"
    },
    {
      id: 3,
      title: "IT Strategy Consulting",
      description: "Expert guidance on digital transformation, infrastructure planning, and technology adoption for sustainable growth.",
      icon: "Briefcase",
      category: "Consulting"
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      description: "Secure and reliable cloud migration and management services on AWS, Azure, or Google Cloud.",
      icon: "Cloud",
      category: "Infrastructure"
    },
    {
      id: 5,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our business intelligence and reporting solutions.",
      icon: "BarChart",
      category: "Data"
    },
    {
      id: 6,
      title: "Cybersecurity Audits",
      description: "Comprehensive security assessments to protect your business assets and customer data.",
      icon: "Shield",
      category: "Security"
    },
    {
      id: 7,
      title: "Managed IT Support",
      description: "Round-the-clock technical support and maintenance to keep your business operations running smoothly.",
      icon: "LifeBuoy",
      category: "Support"
    },
    {
      id: 8,
      title: "Digital Transformation",
      description: "Modernize your legacy systems and workflows with cutting-edge digital solutions.",
      icon: "Zap",
      category: "Consulting"
    }
  ];

  const mockProjects = [
    {
      id: 1,
      title: "Brisbane Eats Delivery App",
      description: "A comprehensive food delivery platform connecting local Brisbane restaurants with customers. Features real-time tracking and payment integration.",
      clientIndustry: "Restaurant",
      technologies: ["React Native", "Node.js", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "PropTech Estate CRM",
      description: "Custom CRM solution for a leading property agency to manage listings, client relationships, and automated document generation.",
      clientIndustry: "Real Estate",
      technologies: ["React", "Python", "Django"],
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Retail Inventory System",
      description: "Cloud-based inventory management system for a multi-store retail chain with predictive stock analysis.",
      clientIndustry: "Retail",
      technologies: ["Vue.js", "Go", "AWS"],
      imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "HealthConnect Telemedicine",
      description: "A secure telehealth platform for remote patient consultations, electronic health records, and prescription management.",
      clientIndustry: "Healthcare",
      technologies: ["Next.js", "TypeScript", "WebRTC"],
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "EduPulse Learning Management",
      description: "Interactive e-learning platform for schools and corporate training with progress tracking and multimedia support.",
      clientIndustry: "Education",
      technologies: ["React", "Express", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
    }
  ];

  app.post(api.inquiries.create.path, (req, res) => {
    res.json({ success: true });
  });

  app.get(api.services.list.path, (req, res) => {
    res.json(mockServices);
  });

  app.get(api.projects.list.path, (req, res) => {
    res.json(mockProjects);
  });

  return httpServer;
}
