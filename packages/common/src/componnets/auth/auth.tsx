import { IAuthProps } from "./types";
import { useAuthProps } from "./hooks";
import { useMemo } from "react";
import { isArray } from "lodash-es";

const Auth = (props: IAuthProps) => {
  const { children, ...reset } = props;
  const { authProps } = useAuthProps(reset);
  const { auth, authCode } = authProps;

  const hasAuth = useMemo(() => {
    let flag = false;
    if (authCode && auth) {
      if (isArray(authCode)) {
        flag = authCode.every((k) => auth(k));
      } else {
        flag = auth(authCode);
      }
    }
    return flag;
  }, [auth, authCode]);

  return hasAuth ? children : null;
};

export default Auth;
