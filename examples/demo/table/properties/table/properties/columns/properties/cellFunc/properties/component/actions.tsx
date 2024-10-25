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
          title: "操作",
          dataIndex: "actions",
          fixed: "right",
          width: 300,
          cellFunc: ({ record }) => [
            {
              component: "actions",
              componentProps: {
                type: "dashed",
                max: 2,
                items: [
                  {
                    key: "edit",
                    component: "Button",
                    componentProps: {
                      children: "编辑",
                      onClick: (e) => {},
                    },
                  },
                  {
                    key: "more",
                    component: "Dropdown",
                    componentProps: {
                      children: "我是下拉",
                      dropDownItems: [
                        {
                          key: "1",
                          label: "我是下拉1",
                        },
                        {
                          key: "2",
                          label: "我是下拉2",
                        },
                      ],
                      onClick: (e) => {
                        console.log(e);
                      },
                    },
                  },
                  {
                    key: "render",
                    render: <div>我是自定义render</div>,
                  },
                ],
              },
            },
          ],
        },
      ],
      api: getTablePage,
    },
  };

  return <XphTable<DataType> {...props} />;
};

export default ReactApp;
