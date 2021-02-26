import { lazy } from "react";

export const HomePage = lazy(
  () => import(/* webpackChunkName: "home" */ "./Home/Home")
);

export const LoginPage = lazy(
  () => import(/* webpackChunkName: "login" */ "./Login/Login")
);

export const ProfilePage = lazy(
  () => import(/* webpackChunkName: "profile" */ "./UserProfile/Profile")
);
