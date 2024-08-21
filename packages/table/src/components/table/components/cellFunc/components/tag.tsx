import React from "react";
import { ICurCellFuncProps, IMainProps } from "../types";
import { theme } from "antd";

const { useToken } = theme;

/** 15个应该够用了，索引不会很多，超出的话tag没有样式（后续再完善） */
const globalColorConfigMap = {
  0: {
    color: "orange",
    backgroundColor: "unset",
    border: "1px solid orange",
  },
  1: {
    color: "purple",
    backgroundColor: "unset",
    border: "1px solid purple",
  },
  2: {
    color: "blue",
    backgroundColor: "unset",
    border: "1px solid blue",
  },
  3: {
    color: "green",
    backgroundColor: "unset",
    border: "1px solid green",
  },
  4: {
    color: "red",
    backgroundColor: "unset",
    border: "1px solid red",
  },
  5: {
    color: "pink",
    backgroundColor: "unset",
    border: "1px solid pink",
  },
  6: {
    color: "cyan",
    backgroundColor: "unset",
    border: "1px solid cyan",
  },
  7: {
    color: "magenta",
    backgroundColor: "unset",
    border: "1px solid magenta",
  },
  8: {
    color: "yellow",
    backgroundColor: "unset",
    border: "1px solid yellow",
  },
  9: {
    color: "teal",
    backgroundColor: "unset",
    border: "1px solid teal",
  },
  10: {
    color: "brown",
    backgroundColor: "unset",
    border: "1px solid brown",
  },
  11: {
    color: "gray",
    backgroundColor: "unset",
    border: "1px solid gray",
  },
  12: {
    color: "olive",
    backgroundColor: "unset",
    border: "1px solid olive",
  },
  13: {
    color: "navy",
    backgroundColor: "unset",
    border: "1px solid navy",
  },
  14: {
    color: "lime",
    backgroundColor: "unset",
    border: "1px solid lime",
  },
  15: {
    color: "maroon",
    backgroundColor: "unset",
    border: "1px solid maroon",
  },
};

const getEnumsTagColorConfigMap = (enums, column, tokenColorConfigMap) => {
  return enums.reduce((acc, item, index) => {
    /** 处理一下key防止出现负数或者其他奇葩的情况 */
    const key = `${column.dataIndex}${item.value}`;
    const color = item.config?.color;

    /**
     * 有color就先用color去匹配tokenColorConfigMap，匹配到就用，匹配不到就用color
     *
     * 没有color就根据当前项在enums中的索引到globalColorConfigMap中去匹配
     * */
    const colorConfig = color
      ? tokenColorConfigMap[color] ?? {
          color,
          backgroundColor: "unset",
          border: `1px solid ${color}`,
        }
      : globalColorConfigMap[index] || {};

    acc[key] = {
      color: colorConfig.color,
      backgroundColor: colorConfig.backgroundColor,
      border: colorConfig.border,
    };
    return acc;
  }, {});
};

/** tag标签使用原生去实现，无需使用antd组件影响性能，而且这个组件的比较特殊，mainProps的优先级最高 */
const Tag = (
  Comp: React.JSXElementConstructor<any>,
  curCellFuncProps: ICurCellFuncProps<{}, {}, "tag">,
  mainProps: IMainProps
) => {
  const {
    curComponentProps,
    cellFuncProps: {
      renderPrams: { text, column },
    },
  } = curCellFuncProps;

  /** 获取一下继承过来的颜色 */
  const { token } = useToken();

  const { enums } = curComponentProps!;

  const tokenColorConfigMap = {
    primary: {
      color: token.colorPrimary,
      backgroundColor: token.colorPrimaryBg,
      border: `1px solid ${token.colorPrimary}`,
    },
    success: {
      color: token.colorSuccess,
      backgroundColor: token.colorSuccessBg,
      border: `1px solid ${token.colorSuccess}`,
    },
    warning: {
      color: token.colorWarning,
      backgroundColor: token.colorWarningBg,
      border: `1px solid ${token.colorWarning}`,
    },
    info: {
      color: token.colorInfo,
      backgroundColor: token.colorInfoBg,
      border: `1px solid ${token.colorInfo}`,
    },
    error: {
      color: token.colorError,
      backgroundColor: token.colorErrorBg,
      border: `1px solid ${token.colorError}`,
    },
  };

  const colorConfigMap = getEnumsTagColorConfigMap(
    enums,
    column,
    tokenColorConfigMap
  );

  const colorConfig = colorConfigMap[`${column.dataIndex}${text}`] || {}; // 兼容一下匹配不到的情况

  const mainStyle: React.CSSProperties = {
    padding: "0 8px",
    borderRadius: token.borderRadiusLG,
    fontSize: token.fontSizeSM,
    ...colorConfig,
  };

  const mainHandleText = () => {
    const label = enums.find((item) => item.value === text)?.label;
    return label;
  };

  return (
    <Comp
      {...mainProps}
      mainHandleText={mainHandleText}
      mainStyle={Object.assign(mainProps?.mainStyle || {}, mainStyle)}
    ></Comp>
  );
};

export default Tag;
