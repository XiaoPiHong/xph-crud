# Interface: IOpenActionConfig

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `cancel?` | (`event`: `object`) => `Promise`\<`any`\> | 点击取消的回调(如果弹窗传递了onCancel属性就不用传这个了，这个是为了方便所有操作都在open函数中处理) |
| `data` | `any` | 回填表单的内容 |
| `ok?` | (`event`: `object`) => `Promise`\<`any`\> | 点击确定的回调(如果弹窗传递了onOk属性就不用传这个了，这个是为了方便所有操作都在open函数中处理) |
