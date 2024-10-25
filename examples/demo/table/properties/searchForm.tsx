import React, { useRef } from "react";
import { XphTable, TXphTableProps, TXphTableActionType } from "xph-crud";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  gender: "male" | "female";
}

const ReactApp: React.FC = () => {
  const props: TXphTableProps<DataType> = {
    table: {
      fullHeight: true,
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
          cellFunc: [
            {
              component: "tag",
              componentProps: {
                enums: [
                  {
                    label: "男",
                    value: "male",
                    config: {
                      color: "info",
                    },
                  },
                  {
                    label: "女",
                    value: "female",
                    config: {
                      color: "primary",
                    },
                  },
                ],
              },
            },
          ],
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
      autoPagination: true,
      api: async (params) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([
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
            ]);
          }, 2000);
        });
      },
    },
    searchForm: {
      colProps: { span: 7 },
      /** 显示搜索 & 重置按钮 */
      showSearch: true,
      items: [
        {
          name: "name",
          label: "姓名",
          component: "Input",
          componentProps: {},
        },
        {
          name: "gender",
          label: "性别",
          component: "Select",
          componentProps: {
            options: [
              {
                label: "男",
                value: "male",
              },
              {
                label: "女",
                value: "female",
              },
            ],
          },
        },
      ],
    },
  };

  const xphTableRef = useRef<TXphTableActionType>(null);

  return (
    <div
      id="docs-comp-table-properties-searchForm"
      style={{ width: "100%", height: "600px", position: "relative" }}
    >
      <XphTable<DataType> ref={xphTableRef} {...props} />
    </div>
  );
};

export default ReactApp;
