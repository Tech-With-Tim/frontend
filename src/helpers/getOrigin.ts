export const getOrigin = (): string => {
  if (process.env.NODE_ENV == "development") return "http://localhost:3000";

  return process.env.NEXT_PUBLIC_ORIGIN;
};
