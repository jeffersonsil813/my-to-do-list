import { toast } from "react-toastify";

export const useToast = () => {
  const success = (title: string) => toast.success(title);
  const error = (title: string) => toast.error(title);
  const warning = (title: string) => toast.warning(title);
  const info = (title: string) => toast.info(title);

  return { success, error, warning, info };
};
