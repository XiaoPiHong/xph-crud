import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "Input",
        label: "Input",
        component: "Input",
        /** 此处的componentProps中的属性，会直接透传给根部的表单组件 */
        /** 若映射的表单组件是antd的组件，会完全继承antd组件的属性 */
        componentProps: {
          addonAfter: ".com",
          addonBefore: "https://",
          maxLength: 20,
          placeholder: "三级域名.二级域名",
          allowClear: true,
          /** 更多属性请看 https://ant.design/index-cn  ... */
        },
        rules: [
          {
            required: true,
            message: "请输入三级域名.二级域名",
          },
        ],
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;
