import { useLocation } from "react-router";

export const useURLQuery = () => {
  return new URLSearchParams(useLocation().search);
};
