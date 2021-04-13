import axios from "axios";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { User } from "../types/models.types";

export type AuthStore = {
  user: User | null;
  token: string | null;
  fetchUser: () => Promise<void>;
  setToken: (token: string) => void;
};

export const useAuthStore = create<AuthStore>(
  devtools((set, get) => ({
    user: null,
    token: localStorage.getItem("token"),
    setToken: (token: string) => {
      localStorage.setItem("token", token);

      set({ token });
    },
    fetchUser: async () => {
      const user = await axios
        .get("/users/@me", {
          headers: { Authorization: get().token },
        })
        .then((res) => res.data);

      set({ user });
    },
  }))
);
