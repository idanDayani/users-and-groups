import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import User from "./user";
import Group from "./group";

class UserGroups extends Model {}

UserGroups.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Group,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "user_groups",
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["user_id", "group_id"],
      },
      {
        fields: ["group_id"], // Index for counting users in specific group
      },
    ],
  }
);

export default UserGroups;
