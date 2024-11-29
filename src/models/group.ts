import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class Group extends Model {}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("empty", "notEmpty"),
      defaultValue: "empty",
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Group",
    tableName: "groups",
    timestamps: false,
  }
);

export default Group;
