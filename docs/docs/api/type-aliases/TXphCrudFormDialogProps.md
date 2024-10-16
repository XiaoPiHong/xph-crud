# Type Alias: TXphCrudFormDialogProps\<T\>

> **TXphCrudFormDialogProps**\<`T`\>: `Omit`\<[`IXphDialogProps`](../interfaces/IXphDialogProps.md), `"onOk"` \| `"onCancel"`\> & `object`

## Type declaration

### formProps

> **formProps**: [`IXphFormProps`](../interfaces/IXphFormProps.md)\<`T`\>

### onCancel()?

> `optional` **onCancel**: (`event`) => `Promise`\<`any`\>

#### Parameters

• **event**

• **event.data**: `any`

• **event.values**: `any`

#### Returns

`Promise`\<`any`\>

### onOk()?

> `optional` **onOk**: (`event`) => `Promise`\<`any`\>

#### Parameters

• **event**

• **event.data**: `any`

• **event.values**: `any`

#### Returns

`Promise`\<`any`\>

## Type Parameters

• **T** *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) = `object`

## Defined in

[packages/table/src/types/crudFormDialog.ts:8](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/table/src/types/crudFormDialog.ts#L8)
