import React from "react";
import { XphTable, IXphMainProps, XphExtendCompPropsProvider } from "xph-crud";

/** 自定义单元格内容的属性 */
interface IMyTagProps {
  children?: string;
  borderColor?: string;
}

/** 自定义单元格内容组件 */
const MyTag = (
  Comp: React.JSXElementConstructor<any>,
  curCellFuncProps: { curComponentProps: IMyTagProps },
  mainProps: IXphMainProps
) => {
  const { curComponentProps } = curCellFuncProps;

  const { borderColor = "blue", children = "" } = curComponentProps!;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        border: `1px solid ${borderColor}`,
      }}
    >
      <Comp {...mainProps} />
      {children}
    </div>
  );
};

/**
 * 单元格内容映射对象
 */
const myCellFuncComponentMap = {
  myTag: MyTag,
};

const ReactApp: React.FC = () => {
  const props: any = {
    table: {
      rowSelection: {
        type: "checkbox",
      },
      fullHeight: true,
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
          cellFunc: [
            {
              component: "link",
              componentProps: {
                url: "https://www.taobao.com",
              },
            },
            {
              component: "myTag",
              componentProps: {
                // 此处的属性都会传递给curComponentProps
                children: "随便加的内容",
                borderColor: "orange",
              },
            },
          ],
        },
      ],
      autoPagination: true,
      api: async (params) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                key: "1",
                name: "胡彦斌",
                age: 32,
                address: "西湖区湖底公园1号",
              },
            ]);
          }, 2000);
        });
      },
    },
  };

  return (
    <div style={{ minWidth: "800px", height: "300px" }}>
      <XphExtendCompPropsProvider
        value={{ extendComp: { tableCellFunc: myCellFuncComponentMap } }}
      >
        <XphTable {...props} />
      </XphExtendCompPropsProvider>
    </div>
  );
};

export default ReactApp;
