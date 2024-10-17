# Interface: IXphDialogProps

## Properties

| Property | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `cancelProps?` | `Omit`\<`ButtonProps`, `"children"` \| `"onClick"`\> | `-` | 取消按钮属性 |
| `cancelText?` | `string` | `"取消"` | 取消按钮文字 |
| `getPopperContainer?` | () => `null` \| `HTMLElement` | `() => document.body` | 挂载弹窗的容器 |
| `height?` | `number` | `-` | 弹窗的高度 |
| `mask?` | `boolean` | `false` | 是否显示遮罩 |
| `okProps?` | `Omit`\<`ButtonProps`, `"children"` \| `"onClick"`\> | `-` | 确定按钮属性 |
| `okText?` | `string` | `"确定"` | 确定按钮文字 |
| `onCancel?` | (`args`: `any`) => `Promise`\<`void`\> | `-` | 点击取消按钮触发该事件 |
| `onClose?` | () => `void` | `-` | 关闭的时候会触发该事件 |
| `onOk?` | (`args`: `any`) => `Promise`\<`void`\> | `-` | 点击确定按钮触发该事件 |
| `onOpen?` | () => `void` | `-` | 打开的时候会触发该事件 |
| `renderFooter?` | (`__namedParameters`: `object`) => `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\> | `-` | 底部按钮自定义渲染函数 |
| `renderTitle?` | () => `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\> | `-` | 顶部标题自定义渲染函数 |
| `title?` | `string` | `-` | 弹窗的标题 |
| `width?` | `number` | `700` | 弹窗的宽度 |
