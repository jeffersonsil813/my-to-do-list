import { postRequest } from "../httpClient/requests";
import { User } from "../interfaces/user";
import { useToast } from "./toast";

export const useUser = () => {
  const { success } = useToast();

  const user: User | null = JSON.parse(
    `${localStorage.getItem("@Mytodolist:user")}`
  );

  // Requisitions
  const logIn = async (values: { username: string; password: string }) => {
    await postRequest("/login", values).then((res) => {
      if (res?.status === 200) {
        const userData: User = {
          id: res.data.user.id,
          fullname: res.data.user.fullname,
          username: res.data.user.username,
          token: res.data.token,
          refreshToken: res.data.refreshToken,
        };
        localStorage.setItem("@Mytodolist:user", JSON.stringify(userData));
        success(`Bem-vindo(a) ${userData.fullname}!`);
      }
    });
  };

  const logOut = () => {
    localStorage.removeItem("@Mytodolist:user");
  };

  return { user, logOut, logIn };
};
