# Interface: IXphFormActionType

## Extended by

- [`IXphCrudFormDialogActionType`](IXphCrudFormDialogActionType.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `getFieldsValue` | (...`values`: `any`[]) => [`Recordable`](../type-aliases/Recordable.md)\<`any`\> | 获取表单值 |
| `resetFields` | () => `Promise`\<`void`\> | 重置表单值 |
| `scrollToField` | (`name`: `any`, `options`?: `ScrollOptions`) => `Promise`\<`void`\> | 滚动到指定字段 |
| `setFieldsValue` | (`values`: [`Recordable`](../type-aliases/Recordable.md)\<`any`\>) => `void` | 设置表单值 |
| `validator` | (`nameList`?: `any`[]) => `Promise`\<`any`\> | 表单校验 |
