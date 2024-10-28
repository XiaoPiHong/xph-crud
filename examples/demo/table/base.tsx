import React, { useRef, useState, ForwardedRef, forwardRef } from "react";
import {
  XphTable,
  TXphTableProps,
  TXphTableActionType,
  XphExtendCompPropsProvider,
  XphCrudFormDialog,
  TXphCrudFormDialogProps,
  IXphCrudFormDialogActionType,
} from "xph-crud";

const ResetPasswordDialog = forwardRef(
  (_, dialogRef: ForwardedRef<IXphCrudFormDialogActionType>) => {
    const dialogProps: TXphCrudFormDialogProps = {
      width: 400,
      title: "重置密码",
      getPopperContainer: () => document.getElementById("docs-comp-table-base"),
      formProps: {
        items: [
          {
            name: "password",
            label: "密码",
            required: true,
            component: "InputPassword",
          },
        ],
      },
    };

    return <XphCrudFormDialog ref={dialogRef} {...dialogProps} />;
  }
);

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  gender: "male" | "female";
}

const ReactApp: React.FC = () => {
  const [crudDialogWidth, setCrudDialogWidth] = useState(500);

  const props: TXphTableProps<DataType> = {
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
          ],
        },
        {
          title: "性别",
          dataIndex: "gender",
          key: "gender",
          cellFunc: [
            {
              component: "link",
              componentProps: {
                url: "https://www.taobao.com",
              },
            },
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
          cellFunc: [
            {
              component: "copy",
              componentProps: {},
            },
          ],
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "age",
          cellFunc: ({ record }) => [
            {
              component: "link",
              componentProps: {
                url: "https://www.baidu.com",
              },
            },
            {
              component: "link",
              componentProps: {
                onClick: () => {
                  window.open("https://www.jd.com/");
                },
              },
            },
          ],
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
                  {
                    key: "reset-password",
                    component: "Button",
                    componentProps: {
                      children: "重置密码",
                      onClick: (e) => {
                        resetPasswordDialogRef.current?.open({
                          data: record,
                        });
                      },
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
                  "new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1", // 超长英文
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
              {
                key: "4",
                name: "王小明",
                age: 25,
                address: "北城区北门大街4号",
                gender: "male",
              },
              {
                key: "5",
                name: "赵丽颖",
                age: 29,
                address: "中城区中山路5号",
                gender: "female",
              },
              {
                key: "6",
                name: "陈晓",
                age: 31,
                address: "西湖区湖底公园6号",
                gender: "male",
              },
              {
                key: "7",
                name: "刘亦菲",
                age: 27,
                address: "东城区东华门大街7号",
                gender: "female",
              },
              {
                key: "8",
                name: "张三",
                age: 33,
                address: "南山区南山路8号",
                gender: "male",
              },
              {
                key: "9",
                name: "李四",
                age: 26,
                address: "北城区北门大街9号",
                gender: "male",
              },
              {
                key: "10",
                name: "王五",
                age: 35,
                address: "中城区中山路10号",
                gender: "male",
              },
              {
                key: "11",
                name: "赵六",
                age: 34,
                address: "西湖区湖底公园11号",
                gender: "male",
              },
              {
                key: "12",
                name: "孙七",
                age: 28,
                address: "东城区东华门大街12号",
                gender: "female",
              },
              {
                key: "13",
                name: "周八",
                age: 29,
                address: "南山区南山路13号",
                gender: "male",
              },
              {
                key: "14",
                name: "吴九",
                age: 31,
                address: "北城区北门大街14号",
                gender: "male",
              },
              {
                key: "15",
                name: "郑十",
                age: 27,
                address: "中城区中山路15号",
                gender: "male",
              },
              {
                key: "16",
                name: "何十一",
                age: 30,
                address: "西湖区湖底公园16号",
                gender: "female",
              },
              {
                key: "17",
                name: "冯十二",
                age: 33,
                address: "东城区东华门大街17号",
                gender: "male",
              },
              {
                key: "18",
                name: "褚十三",
                age: 32,
                address: "南山区南山路18号",
                gender: "female",
              },
              {
                key: "19",
                name: "卫十四",
                age: 29,
                address: "北城区北门大街19号",
                gender: "male",
              },
              {
                key: "20",
                name: "蒋十五",
                age: 28,
                address: "中城区中山路20号",
                gender: "male",
              },
              {
                key: "21",
                name: "沈十六",
                age: 31,
                address: "西湖区湖底公园21号",
                gender: "male",
              },
              {
                key: "22",
                name: "韩十七",
                age: 34,
                address: "东城区东华门大街22号",
                gender: "female",
              },
              {
                key: "23",
                name: "杨十八",
                age: 27,
                address: "南山区南山路23号",
                gender: "male",
              },
              {
                key: "24",
                name: "朱十九",
                age: 30,
                address: "北城区北门大街24号",
                gender: "male",
              },
              {
                key: "25",
                name: "秦二十",
                age: 33,
                address: "中城区中山路25号",
                gender: "male",
              },
              {
                key: "26",
                name: "尤二一",
                age: 32,
                address: "西湖区湖底公园26号",
                gender: "female",
              },
              {
                key: "27",
                name: "许二二",
                age: 29,
                address: "东城区东华门大街27号",
                gender: "male",
              },
              {
                key: "28",
                name: "何二三",
                age: 28,
                address: "南山区南山路28号",
                gender: "female",
              },
              {
                key: "29",
                name: "吕二四",
                age: 31,
                address: "北城区北门大街29号",
                gender: "male",
              },
              {
                key: "30",
                name: "施二五",
                age: 34,
                address: "中城区中山路30号",
                gender: "male",
              },
            ]);
          }, 2000);
        });
      },
      toolbar: {
        type: "primary",
        max: 2,
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
    searchForm: {
      colProps: { span: 6 },
      collapsible: true,
      items: [
        {
          name: "Button",
          label: "改变crud弹窗宽度",
          component: "Button",
          componentProps: {
            children: "改变crud弹窗宽度",
            onClick: (e) => {
              setCrudDialogWidth(800);
            },
          },
        },
        {
          name: "Input",
          label: "Input",
          component: "Input",
          required: true,
          initialValue: "Input",
          componentProps: {
            onChange: (e) => {
              console.log(e);
            },
          },
          ifShow: ({ model }) => {
            return model.Input2 === "Input1";
          },
        },
        {
          name: "Input2",
          label: "Input",
          component: "Input",
          required: true,
          initialValue: "Input",
          componentProps: {
            onChange: (e) => {
              console.log(e);
            },
          },
        },
        {
          name: "Input3",
          label: "Input",
          component: "Input",
          required: true,
          initialValue: "Input",
          componentProps: {
            onChange: (e) => {
              console.log(e);
            },
          },
        },
        {
          name: "Input4",
          label: "Input",
          component: "Input",
          required: true,
          initialValue: "Input",
          componentProps: {
            onChange: (e) => {
              console.log(e);
            },
          },
        },
        {
          name: "Input5",
          label: "Input",
          component: "Input",
          required: true,
          initialValue: "Input",
          componentProps: {
            onChange: (e) => {
              console.log(e);
            },
          },
        },
        {
          name: "Input6",
          label: "Input",
          component: "Input",
          required: true,
          initialValue: "Input",
          componentProps: {
            onChange: (e) => {
              console.log(e);
            },
          },
        },
      ],
    },
    crudFormDialog: {
      width: crudDialogWidth,
      title: "弹窗",
      // mask: true,
      // 弹窗挂载的元素
      getPopperContainer: () => document.getElementById("docs-comp-table-base"),
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

  const resetPasswordDialogRef = useRef<IXphCrudFormDialogActionType>(null);

  return (
    <div
      id="docs-comp-table-base"
      style={{ minWidth: "1400px", height: "600px", position: "relative" }}
    >
      <XphExtendCompPropsProvider
        value={{ extendProps: { actions: { type: "link", max: 0 } } }}
      >
        <XphTable<DataType>
          ref={xphTableRef}
          {...props}
          onRowSelectionChange={(selectRowKeys, selectedRows) => {
            console.log(selectRowKeys, selectedRows);
          }}
        />

        {/** 重置密码弹窗 */}
        <ResetPasswordDialog ref={resetPasswordDialogRef} />
      </XphExtendCompPropsProvider>
    </div>
  );
};

export default ReactApp;
