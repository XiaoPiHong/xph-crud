# Type Alias: TXphCrudFormDialogProps\<T\>

> **TXphCrudFormDialogProps**\<`T`\>: `Omit`\<[`IXphDialogProps`](../interfaces/IXphDialogProps.md), `"onOk"` \| `"onCancel"`\> & `object`

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `formProps` | [`IXphFormProps`](../interfaces/IXphFormProps.md)\<`T`\> | crud弹窗的form配置 |
| `onCancel`? | (`event`) => `Promise`\<`any`\> | crud弹窗点击取消回调 |
| `onOk`? | (`event`) => `Promise`\<`any`\> | crud弹窗点击确定的回调 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) | `object` |

## Defined in

[packages/table/src/types/crudFormDialog.ts:8](https://github.com/XiaoPiHong/xph-crud/blob/d0b9ee1cd95d9006c7258527005a916fce797974/packages/table/src/types/crudFormDialog.ts#L8)
