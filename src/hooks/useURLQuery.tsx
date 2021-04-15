import { useLocation } from "react-router";

export const useURLQuery = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search);
};
