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
                      onClick: (e) => {
                        xphTableRef.current?.open({
                          data: record,
                          ok: async ({ values }) => {
                            return new Promise((resolve) => {
                              setTimeout(() => {
                                resolve(values);
                              }, 3000);
                            });
                          },
                          cancel: async ({ values }) => {
                            console.log(values);
                          },
                        });
                      },
                    },
                  },
                ],
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
      toolbar: {
        type: "primary",
        items: [
          {
            key: "add",
            component: "Button",
            componentProps: {
              children: "新增",
              onClick: (e) => {
                xphTableRef.current?.open({
                  data: null,
                  ok: async ({ values }) => {
                    return new Promise((resolve) => {
                      setTimeout(() => {
                        resolve(values);
                      }, 3000);
                    });
                  },
                  cancel: async ({ values }) => {
                    console.log(values);
                  },
                });
              },
            },
          },
        ],
      },
    },
    crudFormDialog: {
      title: "用户",
      getPopperContainer: () =>
        document.getElementById("docs-comp-table-properties-crudFormDialog"),
      formProps: {
        items: [
          {
            name: "name",
            label: "姓名",
            component: "Input",
            required: true,
            initialValue: "",
            componentProps: {
              onChange: (e) => {
                console.log(e);
              },
            },
            colProps: { span: 12 },
          },
          {
            name: "gender",
            label: "性别",
            component: "Select",
            required: true,
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
              onChange: (e) => {
                console.log(e);
              },
            },
            colProps: { span: 12 },
          },
          {
            name: "address",
            label: "地址",
            component: "InputTextArea",
            required: true,
            componentProps: {
              autoSize: {
                minRows: 5,
                maxRows: 5,
              },
            },
          },
        ],
      },
    },
  };

  const xphTableRef = useRef<TXphTableActionType>(null);

  return (
    <div
      id="docs-comp-table-properties-crudFormDialog"
      style={{ width: "100%", height: "600px", position: "relative" }}
    >
      <XphTable<DataType> ref={xphTableRef} {...props} />
    </div>
  );
};

export default ReactApp;
