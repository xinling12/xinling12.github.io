import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(), // Lucide icon name
  category: text("category").notNull(), // e.g., "Development", "Consulting"
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  clientIndustry: text("client_industry").notNull(), // e.g., "Restaurant", "Real Estate"
  technologies: text("technologies").array(), // e.g., ["React", "Node.js"]
  imageUrl: text("image_url"),
});

// === SCHEMAS ===

export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true });
export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });

// === EXPLICIT TYPES ===

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type Service = typeof services.$inferSelect;
export type Project = typeof projects.$inferSelect;

export type CreateInquiryRequest = InsertInquiry;
