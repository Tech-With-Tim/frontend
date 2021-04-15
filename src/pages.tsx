import { lazy } from "react";

export const HomePage = lazy(
  () => import(/* webpackChunkName: "home" */ "./pages/home")
);

export const LoginPage = lazy(
  () => import(/* webpackChunkName: "login" */ "./pages/auth/login")
);

export const ProfilePage = lazy(
  () => import(/* webpackChunkName: "profile" */ "./pages/Profile/profile")
);

export const DiscordCallbackPage = lazy(
  () =>
    import(/* webpackChunkName: "discord.callback" */ "./pages/auth/callback")
);

export const Navbar = lazy(
  () => import(/* webpackChunkName: "nav" */ "./components/Navbar/Navbar")
);
