import User from "../models/user";

export async function getAllUsers(params: { limit: number; offset: number }) {
  const { limit, offset } = params;
  return await User.findAndCountAll({
    limit,
    offset,
  });
}
