import { db } from "./db";
import {
  inquiries,
  services,
  projects,
  type InsertInquiry,
  type Inquiry,
  type Service,
  type Project
} from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getServices(): Promise<Service[]>;
  getProjects(): Promise<Project[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async seedData(): Promise<void> {
    const serviceCount = await db.select().from(services);
    if (serviceCount.length === 0) {
      await db.insert(services).values([
        {
          title: "Custom App Development",
          description: "Tailored mobile and web applications designed to meet your specific business needs and goals.",
          icon: "Smartphone",
          category: "Development"
        },
        {
          title: "Enterprise Web Solutions",
          description: "Scalable, secure, and high-performance websites for businesses ranging from restaurants to property agencies.",
          icon: "Globe",
          category: "Development"
        },
        {
          title: "IT Strategy Consulting",
          description: "Expert guidance on digital transformation, infrastructure planning, and technology adoption.",
          icon: "Briefcase",
          category: "Consulting"
        },
        {
          title: "Cloud Infrastructure",
          description: "Secure and reliable cloud migration and management services on AWS, Azure, or Google Cloud.",
          icon: "Cloud",
          category: "Infrastructure"
        },
        {
          title: "Data Analytics",
          description: "Turn your data into actionable insights with our business intelligence and reporting solutions.",
          icon: "BarChart",
          category: "Data"
        },
        {
          title: "Cybersecurity Audits",
          description: "Comprehensive security assessments to protect your business assets and customer data.",
          icon: "Shield",
          category: "Security"
        }
      ]);
    }

    const projectCount = await db.select().from(projects);
    if (projectCount.length === 0) {
      await db.insert(projects).values([
        {
          title: "Brisbane Eats Delivery App",
          description: "A comprehensive food delivery platform connecting local Brisbane restaurants with customers. Features real-time tracking and payment integration.",
          clientIndustry: "Restaurant",
          technologies: ["React Native", "Node.js", "PostgreSQL"],
          imageUrl: "https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "PropTech Estate CRM",
          description: "Custom CRM solution for a leading property agency to manage listings, client relationships, and automated document generation.",
          clientIndustry: "Real Estate",
          technologies: ["React", "Python", "Django"],
          imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Retail Inventory System",
          description: "Cloud-based inventory management system for a multi-store retail chain with predictive stock analysis.",
          clientIndustry: "Retail",
          technologies: ["Vue.js", "Go", "AWS"],
          imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
