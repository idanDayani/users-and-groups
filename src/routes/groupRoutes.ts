import { Router } from "express";
import { getAllGroups } from "../logic/groupLogic";
import { getAllUsersAndGroupsSchema } from "../schema/getAllUsersAndGroupsSchema";

const router = Router();

router.get("/getAll", async (req, res) => {
  try {
    const { limit, offset } = getAllUsersAndGroupsSchema.parse(req.body);
    const allGroups = await getAllGroups({ limit, offset });
    res.json(allGroups);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error when fetch groups." });
  }
});

export default router;
