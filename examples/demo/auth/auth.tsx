import React from "react";
import { useState } from "react";
import { XphAuth } from "xph-crud";

const ReactApp: React.FC = () => {
  /** 当前拥有的权限 */
  const [myPermissions, setMyPermissions] = useState<string[]>([]);

  /** 鉴权的函数（可以通过在XphExtendCompPropsProvider中配置公共的鉴权函数） */
  const auth = (key) => {
    return myPermissions.includes(key);
  };

  /** 点击获取所有权限 */
  const onClickGetAllPermissionsBtn = () => {
    setMyPermissions(["add", "edit", "delete"]);
  };

  /** 点击获取["add"] 权限 */
  const onClickGetAddPermissionBtn = () => {
    setMyPermissions(["add"]);
  };

  return (
    <div>
      <button onClick={onClickGetAllPermissionsBtn}>点击获取所有权限</button>

      <button onClick={onClickGetAddPermissionBtn}>点击获取["add"] 权限</button>

      {/** 显示内容需要的权限是["add", "edit", "delete"] */}
      <XphAuth auth={auth} authCode={["add", "edit", "delete"]}>
        <p>我是需要鉴权的内容</p>
      </XphAuth>
    </div>
  );
};

export default ReactApp;
