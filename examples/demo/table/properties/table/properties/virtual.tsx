import React from "react";
import { XphTable, TXphTableProps } from "xph-crud";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  gender: "male" | "female";
}

/** 模拟分页接口 */
const getTablePage = async (params) => {
  console.log(params);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Array.from({ length: 1000 }).map((_, index) => ({
          key: index,
          name: `姓名${index}`,
          age: index,
          address: `地址${index}`,
          gender: index % 2 === 0 ? "male" : "female",
        })),
      });
    }, 1000);
  });
};

const ReactApp: React.FC = () => {
  const props: TXphTableProps<DataType> = {
    table: {
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
          width: 150,
        },
        {
          title: "性别",
          dataIndex: "gender",
          key: "gender",
          width: 150,
        },
        {
          title: "地址",
          dataIndex: "address",
          key: "address",
          width: 300,
          ellipsis: true,
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "age",
          width: 150,
        },
      ],
      /** 关闭分页 */
      pagination: false,
      fullHeight: true,
      api: getTablePage,
      /** 开启虚拟滚动 */
      virtual: true,
    },
  };

  return (
    <div style={{ height: "600px", position: "relative" }}>
      <XphTable<DataType> {...props} />
    </div>
  );
};

export default ReactApp;
