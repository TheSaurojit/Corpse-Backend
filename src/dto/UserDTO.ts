import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  photoURL: z.string().url().optional(),
});

export const UpdateUserSchema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
  photoURL: z.string().optional(),
  isVerified: z.boolean().optional(),
});

export type CreateUserDTO = z.infer<typeof CreateUserSchema>;
export type UpdateUserDTO = z.infer<typeof UpdateUserSchema>;
