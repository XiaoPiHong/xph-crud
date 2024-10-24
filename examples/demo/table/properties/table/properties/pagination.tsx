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
        data: Array.from({ length: 3 }).map((_, index) => ({
          key: index,
          name: `姓名${index}`,
          age: index,
          address: `地址${index}`,
          gender: index % 2 === 0 ? "male" : "female",
        })),
        current: 1,
        pageSize: 100,
        total: 3,
        totalPage: 1,
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
        },
        {
          title: "性别",
          dataIndex: "gender",
          key: "gender",
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
        },
      ],
      pagination: {
        /** 默认100条 */
        pageSize: 100,
        /** 自定义总条数节点 */
        showTotal: (total) => (
          <span style={{ color: "red" }}>共 {total} 条</span>
        ),
        /** 自定义页码 */
        pageSizeOptions: [100, 200, 500, 1000],
      },
      api: getTablePage,
    },
  };

  return <XphTable<DataType> {...props} />;
};

export default ReactApp;
