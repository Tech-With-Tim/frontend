import axios from "axios";
import create from "zustand";
import { combine, devtools } from "zustand/middleware";

export const useAuthStore = create(
  devtools(
    combine(
      {
        user: null,
        token: localStorage.getItem("token"),
      },
      (set, get) => ({
        setToken: (token: string) => {
          localStorage.setItem("token", token);

          set({ token });
        },
        fetchUser: async () => {
          const user = await axios
            .get("/users/@me", { headers: { Authorization: get().token } })
            .then((res) => res.data);

          set({ user });
        },
      })
    )
  )
);
