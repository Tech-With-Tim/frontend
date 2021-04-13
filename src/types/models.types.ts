export type UserType = "USER" | "APP";

export interface User {
  id: string;
  type: UserType;
  avatar: string;
  username: string;
  discriminator: string;
}
