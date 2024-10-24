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
        data: [
          {
            key: "1",
            name: "胡彦斌",
            age: 32,
            address:
              "new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1",
            gender: "male",
          },
          {
            key: "2",
            name: "李雷",
            age: 28,
            address: "东城区东华门大街2号",
            gender: "male",
          },
          {
            key: "3",
            name: "韩梅梅",
            age: 30,
            address: "南山区南山路3号",
            gender: "female",
          },
        ],
        current: 1,
        pageSize: 20,
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
      api: getTablePage,
      formatDataSource: (data) => {
        return data.map((item) => ({
          ...item,
          gender: item.gender === "male" ? "男" : "女",
          age: item.age + "岁",
        }));
      },
    },
  };

  return <XphTable<DataType> {...props} />;
};

export default ReactApp;
