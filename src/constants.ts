import { getOrigin } from "./helpers/getOrigin";

export const __prod__ = process.env.NODE_ENV == "production";
export const REDIRECT = `${getOrigin()}/auth/discord/callback`;
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "771679369360834601";
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "https://api.dev.twtcodejam.net";
