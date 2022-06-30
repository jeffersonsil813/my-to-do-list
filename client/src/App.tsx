import { ToastContainer, Flip } from "react-toastify";
import { useUser } from "./provider/user";
import { AuthenticatedRoutes } from "./routes/authenticatedRoutes";
import { UnauthenticatedRoutes } from "./routes/unauthenticatedRoutes";
import { axiosInstance } from "./httpClient/requests";
import { HandleErrors } from "./provider/handleErrors";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const { user } = useUser();

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      HandleErrors(error);
    }
  );

  return (
    <>
      {user?.token && user.refreshToken ? (
        <AuthenticatedRoutes />
      ) : (
        <UnauthenticatedRoutes />
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
        style={{
          width: "500px",
          maxWidth: "80%",
        }}
      />
    </>
  );
};
