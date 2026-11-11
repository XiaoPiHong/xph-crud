import {
  CloseOutlined,
  BorderOutlined,
  MinusOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import style from "./index.module.css";

/** 最小化 */
const Minimize = ({
  onClick,
}: {
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      type="text"
      className={style["window-control"]}
      aria-label="最小化"
      title="最小化"
      onClick={onClick}
      icon={<MinusOutlined className={style["window-control-icon"]} />}
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
      type="text"
      className={style["window-control"]}
      aria-label="最大化"
      title="最大化"
      onClick={onClick}
      icon={<BorderOutlined className={style["window-control-icon"]} />}
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
      type="text"
      className={style["window-control"]}
      aria-label="还原"
      title="还原"
      onClick={onClick}
      icon={<CopyOutlined className={style["window-control-icon"]} />}
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
      type="text"
      className={`${style["window-control"]} ${style["window-control-close"]}`}
      aria-label="关闭"
      title="关闭"
      onClick={onClick}
      disabled={disabled}
      icon={<CloseOutlined className={style["window-control-icon"]} />}
    />
  );
};

export { Maximize, Minimize, Recovery, Close };
