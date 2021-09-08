import axios from "axios";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { User } from "../types/models.types";

export type AuthStore = {
  user?: User;
  token?: string;
  logout: () => void;
  fetchUser: () => void;
  setToken: (token: string) => void;
};

export const useAuthStore = create<AuthStore>(
  devtools((set, get) => ({
    user: undefined,
    token: typeof window != "undefined" && localStorage.getItem("token"),
    setToken: (token: string) => {
      localStorage.setItem("token", token);

      set({ token });
    },
    fetchUser: () => {
      axios
        .get("/users/@me", {
          headers: { Authorization: get().token },
        })
        .then((res) => set({ user: res.data }))
        .catch(() => {
          localStorage.removeItem("token");
          set({ user: null, token: null });
        });
    },
    logout: () => {
      localStorage.removeItem("token");
      set({ token: null, user: null });
    },
  }))
);
