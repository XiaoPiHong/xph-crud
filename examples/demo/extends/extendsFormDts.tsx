import React from "react";
import { XphForm, XphExtendCompPropsProvider } from "xph-crud";

interface IMyInputProps {
  borderColor?: string;
  placeholder?: string;
  onChange?: (...args) => void;
}

const MyInput = (myInputProps: IMyInputProps) => {
  const { borderColor, onChange, placeholder } = myInputProps;
  const onInputChange = (e) => {
    const {
      target: { value },
    } = e;
    onChange && onChange(value);
  };
  return (
    <input
      onInput={onInputChange}
      placeholder={placeholder}
      style={{ borderColor: borderColor ? borderColor : "black" }}
    />
  );
};

const myComponentMap = {
  MyInput,
};

const ReactApp: React.FC = () => {
  const props: INewXphFormProps = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    items: [
      {
        name: "MyInput",
        label: "MyInput",
        component: "MyInput",
        colProps: { span: 8 },
        componentProps: {
          borderColor: "red",
          placeholder: "我是自定义的输入框",
        },
      },
    ],
  };

  return (
    <div style={{ minWidth: "1400px" }}>
      <XphExtendCompPropsProvider
        value={{ extendComp: { form: myComponentMap } }}
      >
        <XphForm {...props}></XphForm>
      </XphExtendCompPropsProvider>
    </div>
  );
};

export default ReactApp;
