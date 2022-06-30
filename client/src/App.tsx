import { useUser } from "./provider/user";
import { AuthenticatedRoutes } from "./routes/authenticatedRoutes";
import { UnauthenticatedRoutes } from "./routes/unauthenticatedRoutes";

export const App = () => {
  const { user } = useUser();

  return (
    <>
      {user?.token && user.refreshToken ? (
        <AuthenticatedRoutes />
      ) : (
        <UnauthenticatedRoutes />
      )}
    </>
  );
};
