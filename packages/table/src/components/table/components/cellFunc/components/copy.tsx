import React from "react";
import { ICurCellFuncProps, IMainProps } from "../types";
import { theme, message } from "antd";
import { useCopyToClipboard } from "../../../../../hooks";
import { isFunction, isString } from "lodash-es";

const { useToken } = theme;

const Copy = (
  Comp: React.JSXElementConstructor<any>,
  curCellFuncProps: ICurCellFuncProps<{}, {}, "copy">,
  mainProps: IMainProps
) => {
  const {
    curComponentProps,
    cellFuncProps: { renderPrams },
  } = curCellFuncProps;

  const { token } = useToken();

  const { text, onClick, size = "default" } = curComponentProps!;

  const sizeMap = {
    small: 16,
    default: 18,
    large: 20,
  };

  const { copy } = useCopyToClipboard();

  const handleClick = () => {
    let copyText = renderPrams.text;
    if (text) {
      if (isFunction(text)) {
        copyText = text(renderPrams.record);
      }
      if (isString(text)) {
        copyText = text;
      }
    }
    if (onClick) return onClick(renderPrams.record);

    const res = copy(copyText);
    res && message.success("复制成功");
  };

  return (
    <>
      <span onClick={handleClick}>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4503"
          width={sizeMap[size]}
          height={sizeMap[size]}
          style={{ cursor: "pointer", verticalAlign: "text-top" }}
        >
          <path
            d="M682.666667 42.666667H85.333333v682.666666h85.333334V128h512V42.666667zM256 213.333333l4.522667 768H896V213.333333H256z m554.666667 682.666667H341.333333V298.666667h469.333334v597.333333z"
            fill={token.colorLink}
            p-id="4504"
          ></path>
        </svg>
      </span>
      <Comp {...mainProps}></Comp>
    </>
  );
};

export default Copy;
