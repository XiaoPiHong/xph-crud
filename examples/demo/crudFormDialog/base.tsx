import {
  XphCrudFormDialog,
  TXphCrudFormDialogProps,
  IXphCrudFormDialogActionType,
} from "xph-crud";
import { forwardRef, ForwardedRef, useRef } from "react";
import { Button } from "antd";

type IResetPasswordDialogActionProps = IXphCrudFormDialogActionType;

const ResetPasswordDialog = forwardRef(
  (
    props: {
      submit: () => void;
    },
    dialogRef: ForwardedRef<IResetPasswordDialogActionProps>
  ) => {
    const dialogProps: TXphCrudFormDialogProps = {
      width: 400,
      title: "重置密码",
      getPopperContainer: () =>
        document.getElementById("docs-comp-crudFormDialog-base"),
      formProps: {
        items: [
          {
            name: "password",
            label: "密码",
            required: true,
            component: "InputPassword",
          },
        ],
      },
      onOk: ({ values, data }) => {
        return new Promise((resolve) => {
          const params = { ...values };
          setTimeout(() => {
            props.submit();
            resolve(true);
          }, 3000);
        });
      },
    };

    return <XphCrudFormDialog ref={dialogRef} {...dialogProps} />;
  }
);

const ReactApp: React.FC = () => {
  const resetPasswordDialogRef = useRef<IXphCrudFormDialogActionType>(null);

  const onClickResetPasswordBtn = () => {
    resetPasswordDialogRef.current?.open({
      data: {
        password: "123456",
      },
    });
  };

  return (
    <div
      id="docs-comp-crudFormDialog-base"
      style={{ width: "100%", height: "600px", position: "relative" }}
    >
      <Button onClick={onClickResetPasswordBtn}>修改密码</Button>

      {/** 使用XphCrudFormDialog实现重置密码表单弹窗 */}
      <ResetPasswordDialog ref={resetPasswordDialogRef} submit={() => {}} />
    </div>
  );
};
export default ReactApp;
