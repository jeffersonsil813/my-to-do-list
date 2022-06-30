import { toast } from "react-toastify";

export const HandleErrors = (error: any) => {
  if (error.response.status) {
    toast.error(`${error.response.data.message}`);
  }
};
