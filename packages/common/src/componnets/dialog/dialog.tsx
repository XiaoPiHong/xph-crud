import { XphActions } from "../";
import { IDialogProps } from "./types";
import { useDialogProps, useDialogFooter } from "./hooks";

const Dialog = (props: IDialogProps) => {
  const { dialogProps } = useDialogProps(props);
  const { footerActions } = useDialogFooter(dialogProps);
  const { renderFooter, renderTitle, title } = dialogProps;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{renderTitle ? renderTitle() : title}</div>
        <div>
          <span>缩小</span>
          <span>放大</span>
          <span>关闭</span>
        </div>
      </div>
      <div>内容</div>
      {/** 如果是renderFooter，底部的布局由调用方决定  */}
      {renderFooter ? (
        renderFooter()
      ) : (
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
        >
          <XphActions {...footerActions} />
        </div>
      )}
    </div>
  );
};

export default Dialog;
