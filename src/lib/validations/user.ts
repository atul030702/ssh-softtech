import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  image: z.string().url("Invalid image URL").optional(),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;
