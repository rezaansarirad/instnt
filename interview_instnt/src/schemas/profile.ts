import { z } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  phoneNumber: z.string().optional(),
  language: z.string().min(1, { message: "Language is required" }),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
