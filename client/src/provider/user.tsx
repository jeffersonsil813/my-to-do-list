import { User } from "../interfaces/user";

export const useUser = () => {
  const user: User | null = JSON.parse(
    `${localStorage.getItem("@Mytodolist:user")}`
  );

  // Requisitions
  const logOut = () => {
    localStorage.removeItem("@Mytodolist:user");
  };

  return { user, logOut };
};
