import { getOrigin } from "./helpers/getOrigin";

export const __prod__ = process.env.NODE_ENV == "production";
export const REDIRECT = `${getOrigin()}/auth/discord/callback`;
export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || "771679369360834601";
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.dev.twtcodejam.net";
