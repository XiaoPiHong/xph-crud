## 引入

```bash
npm install xph-crud --save
```

```bash
yarn add xph-crud
```

```bash
pnpm install xph-crud --save
```

## 用法

引入 xph-crud 全局样式

```tsx
/** main.tsx */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
/** 引入 xph-crud 全局样式 */
import "xph-crud/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

组件使用

```tsx
/** App.tsx */

import { XphForm, IXphFormProps } from "xph-crud";

function App() {
  const formProps: IXphFormProps = {
    items: [
      {
        name: "name",
        label: "姓名",
        component: "Input",
      },
    ],
  };
  return (
    <>
      <XphForm {...formProps}></XphForm>
    </>
  );
}

export default App;
```

## 注意事项

xph-crud 是基于 ant-design、ant-design-icons 开发的组件库，所以使用时需同时引入 [antd](https://github.com/ant-design/ant-design)、[@ant-design/icons](https://github.com/ant-design/ant-design-icons/tree/master)
