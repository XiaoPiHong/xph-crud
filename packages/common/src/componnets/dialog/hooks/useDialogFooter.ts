import { IDialogProps } from "../types";
import { IXphActionsProps } from "../../";

export default function useDialogFooter(props: IDialogProps) {
  const { okText, cancelText, onCancel, onOk, okProps, cancelProps } = props;
  /** 自动生成取消和确定按钮 */
  const footerActions: IXphActionsProps = {
    max: 2,
    items: [
      {
        component: "Button",
        componentProps: {
          ...cancelProps,
          children: cancelText,
          onClick: onCancel,
        },
      },
      {
        component: "Button",
        componentProps: {
          type: "primary",
          ...okProps,
          children: okText,
          onClick: onOk,
        },
      },
    ],
  };
  return {
    footerActions,
  };
}
