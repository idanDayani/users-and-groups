import Group from "../models/group";

export async function getAllGroups(params: { limit: number; offset: number }) {
  const { limit, offset } = params;
  return await Group.findAndCountAll({
    limit,
    offset,
  });
}
