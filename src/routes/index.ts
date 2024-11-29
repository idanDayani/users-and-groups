import express from "express";
import userRoutes from "./userRoutes";
import groupRoutes from "./groupRoutes";
import userGroupsRoutes from "./userGroupsRoutes";

const router = express.Router();
router.use("/users", userRoutes);
router.use("/groups", groupRoutes);
router.use("/userGroups", userGroupsRoutes);

export default router;
