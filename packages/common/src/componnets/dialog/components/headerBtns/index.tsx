import {
  CloseOutlined,
  FullscreenOutlined,
  ShrinkOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

/** 最小化 */
const Minimize = ({
  onClick,
}: {
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      type="link"
      onClick={onClick}
      icon={
        <ShrinkOutlined
          style={{
            fontSize: "22px",
            cursor: "pointer",
          }}
        />
      }
    />
  );
};

/** 最大化 */
const Maximize = ({
  onClick,
}: {
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      type="link"
      onClick={onClick}
      icon={
        <FullscreenOutlined
          style={{
            fontSize: "22px",
            cursor: "pointer",
          }}
        />
      }
    />
  );
};

/** 恢复 */
const Recovery = ({
  onClick,
}: {
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      type="link"
      onClick={onClick}
      icon={
        <FullscreenExitOutlined
          style={{
            fontSize: "22px",
            cursor: "pointer",
          }}
        />
      }
    />
  );
};

/** 关闭 */
const Close = ({
  onClick,
  disabled,
}: {
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      type="link"
      onClick={onClick}
      disabled={disabled}
      icon={
        <CloseOutlined
          style={{
            fontSize: "22px",
            cursor: "pointer",
          }}
        />
      }
    />
  );
};

export { Maximize, Minimize, Recovery, Close };
