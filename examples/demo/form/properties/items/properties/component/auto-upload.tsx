import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "AutoUpload",
        label: "AutoUpload",
        component: "AutoUpload",
        componentProps: {
          /**
           * @description 上传服务器接口，需要返回：
           * type IFileList = Array<{
           *   uid: string;
           *   url: string;
           *   status: string;
           *   name: string;
           * }>
           */
          // api: async (params) => {
          //   /** 此处只是模拟上传服务器的操作 */
          //   return [
          //     {
          //       uid: `${+new Date()}${Math.random()}`,
          //       name: "image.png",
          //       status: "done",
          //       url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          //     },
          //   ];
          // },
          maxSize: 1, // 文件最大限制
          maxCount: 2, // 文件最大数量
          /**
           * @description 表单获取到的类型
           * "String"（默认，配合api使用） | "String[]"（配合api使用） | "File[]" | "FileList"（配合api使用）
           * String时如果上传多文件，则返回字符串,拼接   initialValue：字符串
           * String[]时如果上传多文件，则返回数组        initialValue：数组
           * File[]时如果上传多文件，则返回数组          initialValue：数组
           * FileList时如果上传多文件，则返回数组        initialValue：数组
           */
          returnType: "File[]",
          onChange(val) {
            console.log("AutoUpload onChange========================", val);
          },
        },
        initialValue: [],
        rules: [
          {
            validator: async (rule, value) => {
              console.log("validate=================", value);
              if (!value.length) {
                return Promise.reject("请上传文件");
              }
              return Promise.resolve();
            },
          },
        ],
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;
