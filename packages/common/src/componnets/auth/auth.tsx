import { IAuthProps } from "./types";
import { useAuthProps } from "./hooks";
import { isArray } from "lodash-es";

const Auth = (props: IAuthProps) => {
  const { children, ...reset } = props;
  const { authProps } = useAuthProps(reset);
  const { auth, authCode } = authProps;

  const hasAuth = () => {
    let flag = false;
    if (authCode && auth) {
      if (isArray(authCode)) {
        flag = authCode.every((k) => auth(k));
      } else {
        flag = auth(authCode);
      }
    }
    return flag;
  };

  return hasAuth() ? children : null;
};

export default Auth;
