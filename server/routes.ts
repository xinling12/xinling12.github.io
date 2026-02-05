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
      description: "Tailored mobile and web applications designed to meet your specific business needs and goals.",
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
      description: "Expert guidance on digital transformation, infrastructure planning, and technology adoption.",
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
    }
  ];

  const mockProjects = [
    {
      id: 1,
      title: "Brisbane Eats Delivery App",
      description: "A comprehensive food delivery platform connecting local Brisbane restaurants with customers.",
      clientIndustry: "Restaurant",
      technologies: ["React Native", "Node.js", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "PropTech Estate CRM",
      description: "Custom CRM solution for a leading property agency to manage listings and client relationships.",
      clientIndustry: "Real Estate",
      technologies: ["React", "Python", "Django"],
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
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
