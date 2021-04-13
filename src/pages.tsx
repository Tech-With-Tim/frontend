import { lazy } from "react";

export const HomePage = lazy(
  () => import(/* webpackChunkName: "home" */ "./pages/index")
);

export const LoginPage = lazy(
  () => import(/* webpackChunkName: "login" */ "./pages/auth/login")
);

export const ProfilePage = lazy(
  () => import(/* webpackChunkName: "profile" */ "./pages/profile")
);

export const DiscordCallbackPage = lazy(
  () =>
    import(/* webpackChunkName: "d.callback" */ "./pages/auth/discord/callback")
);
