import { z } from "zod";

export const getAllUsersAndGroupsSchema = z.object({
  limit: z.number().int().positive().max(100, { message: "Limit has reached" }), // Limit must be less than 100 to avoid performance issues
  offset: z.number().int(),
});
