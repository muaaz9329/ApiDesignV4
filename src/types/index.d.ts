export type userJwt = {
  id?: number;
  userName: string;
};

export interface IPrivateRoute {
  user: userJwt;
}
