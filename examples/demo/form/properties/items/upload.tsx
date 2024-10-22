import React from "react";
import { XphForm, IXphFormProps, useXphForm } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "Upload",
        label: "Upload",
        component: "Upload",
        componentProps: {
          children: "上传",
          showUploadList: {},
          listType: "picture-card",
          beforeUpload(file) {
            return false;
          },
          onChange(info) {
            const { file, fileList } = info;
            const { status } = file;
            switch (status) {
              case "removed": {
                setFieldsValue({
                  Upload: fileList,
                });
                break;
              }
              default: {
                // 上传（此处由于没有上传服务器，默认是假上传，默认都是成功）
                setFieldsValue({
                  Upload: [
                    {
                      uid: "-1",
                      name: "image.png",
                      status: "done",
                      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    },
                  ],
                });
              }
            }
          },
        },
        valuePropName: "fileList",
        initialValue: [],
        rules: [
          {
            validator: async (rule, value) => {
              console.log("validate=================", value);
              if (value && value.length === 0) {
                return Promise.reject("请上传文件");
              }
              return Promise.resolve();
            },
          },
        ],
      },
    ],
  };

  const [register, { setFieldsValue }] = useXphForm();

  return <XphForm register={register} {...props}></XphForm>;
};

export default ReactApp;
