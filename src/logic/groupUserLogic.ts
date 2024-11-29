import Group from "../models/group";
import UserGroups from "../models/userGroups";
import sequelize from "../config/db";

export async function removeUserFromGroup(params: {
  userId: number;
  groupId: number;
}) {
  const { userId, groupId } = params;
  const transaction = await sequelize.transaction();

  try {
    const isRemoved = await UserGroups.destroy({
      where: {
        user_id: userId,
        group_id: groupId,
      },
      transaction,
    });

    if (!isRemoved) {
      throw new Error("User not in the group.");
    }

    const userCount = await UserGroups.count({
      where: {
        group_id: groupId,
      },
      transaction,
    });

    if (userCount === 0) {
      await Group.update(
        { status: "empty" },
        {
          where: { id: groupId },
          transaction,
        }
      );
    }

    await transaction.commit();
    return { message: "User removed from group successfully." };
  } catch (error) {
    throw new Error(`Failed to remove user from group: ${error}`);
  }
}
