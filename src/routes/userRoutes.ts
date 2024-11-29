import { Router } from "express";
import { getAllUsers } from "../logic/userLogic";
import { getAllUsersAndGroupsSchema } from "../schema/getAllUsersAndGroupsSchema";

const router = Router();

router.get("/getAll", async (req, res) => {
  try {
    const { limit, offset } = getAllUsersAndGroupsSchema.parse(req.body);
    const allUsers = await getAllUsers({ limit, offset });
    res.json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error when fetch users." });
  }
});

export default router;
