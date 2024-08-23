import {
  IActionsProps,
  TActionItemProps,
  isComponentActionItemProps,
} from "../types";
import { isNumber, isFunction, isArray } from "lodash-es";

export default function useActionItems(
  props: IActionsProps,
  auth: Function
): {
  showActionItems: TActionItemProps[];
  ellipsisActionItems: TActionItemProps[];
} {
  const { type, disabled, items, max } = props;

  /** 处理权限 */
  const handleAuth = (item): boolean => {
    const { auth: authKeys } = item;
    let flag = false;
    /** 需要权限验证 */
    if (authKeys) {
      /** 空数组的时候every返回true */
      if (isArray(authKeys)) {
        flag = authKeys.every((k) => auth(k));
      } else {
        flag = auth(authKeys);
      }
      /** 不需要权限验证 */
    } else {
      flag = true;
    }
    return flag;
  };

  /** 处理是否显示（权限也集成在里面了） */
  const handleIfShow = (item): boolean => {
    let { ifShow = true } = item;
    ifShow = ifShow && isFunction(ifShow) ? ifShow() : ifShow;
    return ifShow && handleAuth(item);
  };

  /** 根据组件属性处理是否显示 */
  const handleComponentShow = (item): boolean => {
    const { component, render, componentProps } = item;
    if (component) {
      switch (component) {
        case "Dropdown": {
          const { dropDownItems } = componentProps;
          if (dropDownItems.length) return true;
          return false;
        }
        default:
          return true;
      }
    }
    if (render) return true;

    return false;
  };

  const actionItems: TActionItemProps[] = items!
    .map((item) => {
      const temp = { ...item };
      if (isComponentActionItemProps(temp)) {
        const component: any = temp.component;
        temp.componentProps = {
          type,
          disabled,
          ...temp.componentProps,
        };
        /** 不同的组件，不同的特殊处理 */
        switch (component) {
          case "Dropdown": {
            (temp as any).componentProps.dropDownItems = (
              (temp as any).componentProps.dropDownItems || []
            ).filter(handleIfShow);
            break;
          }
          default:
            break;
        }
      }
      return temp;
    })
    .filter(handleIfShow)
    .filter(handleComponentShow);

  /** 如果有max属性，则进行截取 */
  const needSplice = isNumber(max) && max >= 0;
  return {
    showActionItems: actionItems.slice(
      0,
      needSplice ? max : actionItems.length
    ),
    ellipsisActionItems: actionItems.slice(
      needSplice ? max : actionItems.length
    ),
  };
}
