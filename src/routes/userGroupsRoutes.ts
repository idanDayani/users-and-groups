import { Router } from "express";
import { removeUserFromGroup } from "../logic/groupUserLogic";
import { removeUserFromGroupSchema } from "../schema/removeUserFromGroupSchema";

const router = Router();

router.post("/removeUser", async (req, res) => {
  try {
    const { userId, groupId } = removeUserFromGroupSchema.parse(req.body);
    const result = await removeUserFromGroup({ userId, groupId });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error when remove user from group." });
  }
});

export default router;
