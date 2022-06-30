export interface User {
  id: string;
  fullname: string;
  username: string;
  token: string;
  refreshToken: {
    id: string;
  };
}
