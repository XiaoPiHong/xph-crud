import { useRef, useState } from "react";
import { Button, Input, Space, Tag, Typography, theme } from "antd";
import { XphDialog, type IXphDialogActionType } from "xph-crud";

const { Paragraph, Text } = Typography;

function DialogContent({ description }: { description: string }) {
  return (
    <Space direction="vertical" size="middle" style={{ width: "100%" }}>
      <Text>{description}</Text>
      <Input.TextArea
        aria-label="示例备注"
        placeholder="输入一段备注，试试最小化后恢复"
        autoSize={{ minRows: 2, maxRows: 4 }}
      />
      <Text type="secondary">
        可拖动标题栏、拖动四角调整大小，或使用右上角的最小化和最大化按钮。
        确定、取消均关闭窗口；本例不提交数据。
      </Text>
    </Space>
  );
}

export default function DialogBase() {
  const { token } = theme.useToken();
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyDialogRef = useRef<IXphDialogActionType>(null);
  const bodyMaskDialogRef = useRef<IXphDialogActionType>(null);
  const containerDialogRef = useRef<IXphDialogActionType>(null);
  const containerMaskDialogRef = useRef<IXphDialogActionType>(null);
  const [backgroundClicks, setBackgroundClicks] = useState(0);

  const openTwoDialogs = () => {
    bodyDialogRef.current?.open();
    containerDialogRef.current?.open();
  };

  const closeAllDialogs = () => {
    bodyDialogRef.current?.close();
    bodyMaskDialogRef.current?.close();
    containerDialogRef.current?.close();
    containerMaskDialogRef.current?.close();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: 16,
        whiteSpace: "normal",
        color: token.colorText,
      }}
    >
      <div>
        <Paragraph style={{ marginBottom: 8 }}>
          <Text strong>挂载位置与遮罩独立配置。</Text>
          默认挂到 body，不显示遮罩；指定容器后，开启遮罩也只覆盖该容器。
        </Paragraph>
        <Space wrap>
          <Button type="primary" onClick={() => bodyDialogRef.current?.open()}>
            默认弹窗（body / 无遮罩）
          </Button>
          <Button onClick={() => bodyMaskDialogRef.current?.open()}>
            body / 有遮罩
          </Button>
          <Button onClick={openTwoDialogs}>同时打开两个无罩弹窗</Button>
          <Button onClick={closeAllDialogs}>关闭全部</Button>
        </Space>
      </div>

      <div
        ref={containerRef}
        role="region"
        aria-label="指定挂载容器"
        style={{
          position: "relative",
          height: 400,
          overflow: "auto",
          border: `1px dashed ${token.colorBorder}`,
          borderRadius: token.borderRadiusLG,
          background: token.colorFillAlter,
        }}
      >
        <div style={{ padding: 16 }}>
          <Space wrap style={{ marginBottom: 12 }}>
            <Text strong>指定挂载容器</Text>
            <Tag>getPopperContainer</Tag>
          </Space>
          <Paragraph type="secondary">
            下方两个按钮将弹窗挂到这个区域。开启容器遮罩时，区域外的按钮仍可操作。
          </Paragraph>
          <Space wrap>
            <Button onClick={() => containerDialogRef.current?.open()}>
              容器内 / 无遮罩
            </Button>
            <Button onClick={() => containerMaskDialogRef.current?.open()}>
              容器内 / 有遮罩
            </Button>
            <Button onClick={() => setBackgroundClicks((count) => count + 1)}>
              背景按钮：已点击 {backgroundClicks} 次
            </Button>
          </Space>
          <Paragraph type="secondary" style={{ marginTop: 24, marginBottom: 0 }}>
            无遮罩时，可以拖开窗口再点击背景按钮；同时打开多个无罩窗口时，点击其中一个即可置顶。
          </Paragraph>
        </div>
      </div>

      {/* 不传 mask 和 getPopperContainer，使用默认的 body + 无遮罩。 */}
      <XphDialog
        ref={bodyDialogRef}
        title="默认弹窗 · body / 无遮罩"
        width={480}
        onOk={async () => bodyDialogRef.current?.close()}
        onCancel={async () => bodyDialogRef.current?.close()}
      >
        <DialogContent description="这个窗口挂在 body 上，没有遮罩，窗口外仍可操作。" />
      </XphDialog>

      <XphDialog
        ref={bodyMaskDialogRef}
        title="body / 有遮罩"
        width={480}
        mask
        onOk={async () => bodyMaskDialogRef.current?.close()}
        onCancel={async () => bodyMaskDialogRef.current?.close()}
      >
        <DialogContent description="这个窗口使用默认的 body 容器，遮罩覆盖整个视口。请通过窗口内的确定、取消或关闭按钮退出。" />
      </XphDialog>

      {/* 使用当前实例的 ref，避免多个示例共用固定 ID 时挂错容器。 */}
      <XphDialog
        ref={containerDialogRef}
        title="容器内 / 无遮罩"
        width={400}
        mask={false}
        getPopperContainer={() => containerRef.current}
        onOk={async () => containerDialogRef.current?.close()}
        onCancel={async () => containerDialogRef.current?.close()}
      >
        <DialogContent description="这个窗口挂在虚线区域内，没有遮罩，可以继续操作区域内的背景按钮。" />
      </XphDialog>

      <XphDialog
        ref={containerMaskDialogRef}
        title="容器内 / 有遮罩"
        width={400}
        mask
        getPopperContainer={() => containerRef.current}
        onOk={async () => containerMaskDialogRef.current?.close()}
        onCancel={async () => containerMaskDialogRef.current?.close()}
      >
        <DialogContent description="遮罩只覆盖虚线区域，并锁定该区域的背景滚动。区域外的按钮仍可操作，开启遮罩不会将窗口改挂到 body。" />
      </XphDialog>
    </div>
  );
}
