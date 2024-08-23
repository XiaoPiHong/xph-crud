import { IAuthProps } from "./types";
import { useAuthProps } from "./hooks";
import { useMemo } from "react";
import { isArray } from "lodash-es";

const Auth = (props: IAuthProps) => {
  const { children, ...reset } = props;
  const { authProps } = useAuthProps(reset);
  const { auth, key } = authProps;

  const hasAuth = useMemo(() => {
    let flag = false;
    if (key && auth) {
      if (isArray(key)) {
        flag = key.every((k) => auth(k));
      } else {
        flag = auth(key);
      }
    }
    return flag;
  }, [auth, key]);

  return hasAuth ? children : null;
};

export default Auth;
