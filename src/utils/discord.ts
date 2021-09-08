import { User } from "types/models.types";

export const getAvatarURL = (user: User): string => {
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${
    user.avatar.startsWith("a_") ? "gif" : "png"
  }`;
};
