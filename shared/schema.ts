import { z } from "zod";

// Re-defining the schemas here so the frontend doesn't break
// since it imports them for form validation and typing.

export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export const insertServiceSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  category: z.string(),
});

export const insertProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  clientIndustry: z.string(),
  technologies: z.array(z.string()),
  imageUrl: z.string().optional(),
});

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  clientIndustry: string;
  technologies: string[];
  imageUrl: string | null;
};

export type Inquiry = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
