# Interface: IXphCrudFormDialogActionType

## Extends

- [`IXphFormActionType`](IXphFormActionType.md).`Omit`\<[`IXphDialogActionType`](IXphDialogActionType.md), `"open"`\>

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `close` | () => `void` | 关闭 |
| `getFieldsValue` | (...`values`: `any`[]) => [`Recordable`](../type-aliases/Recordable.md)\<`any`\> | 获取表单值 |
| `getVisible` | () => `boolean` | 获取弹窗状态 |
| `open` | (`config`: [`IOpenActionConfig`](IOpenActionConfig.md)) => `Promise`\<`void`\> | 打开crud弹窗 |
| `resetFields` | () => `Promise`\<`void`\> | 重置表单值 |
| `scrollToField` | (`name`: `any`, `options`?: `ScrollOptions`) => `Promise`\<`void`\> | 滚动到指定字段 |
| `setFieldsValue` | (`values`: [`Recordable`](../type-aliases/Recordable.md)\<`any`\>) => `void` | 设置表单值 |
| `setLoading` | (`loading`: `boolean`) => `void` | 设置loading |
| `validator` | (`nameList`?: `any`[]) => `Promise`\<`any`\> | 表单校验 |
