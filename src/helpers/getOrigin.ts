export const getOrigin = (): string => {
  if (process.env.NODE_ENV == "development") return "http://localhost:3000";

  if (!process.env.NEXT_PUBLIC_ORIGIN) {
    throw new Error("No env variable named ORIGIN found. Please add this to your env.");
  }

  return process.env.NEXT_PUBLIC_ORIGIN;
};
