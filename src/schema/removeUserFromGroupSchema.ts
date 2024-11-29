import { z } from "zod";

export const removeUserFromGroupSchema = z.object({
  userId: z.number().int(),
  groupId: z.number().int(),
});
