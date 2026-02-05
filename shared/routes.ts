import { z } from 'zod';
import { insertInquirySchema } from './schema';

export const api = {
  inquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/inquiries',
      input: insertInquirySchema,
      responses: {
        200: z.object({ success: z.boolean() }),
      },
    },
  },
  services: {
    list: {
      method: 'GET' as const,
      path: '/api/services',
      responses: {
        200: z.array(z.object({
          id: z.number(),
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          category: z.string(),
        })),
      },
    },
  },
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(z.object({
          id: z.number(),
          title: z.string(),
          description: z.string(),
          clientIndustry: z.string(),
          technologies: z.array(z.string()),
          imageUrl: z.string().nullable(),
        })),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
