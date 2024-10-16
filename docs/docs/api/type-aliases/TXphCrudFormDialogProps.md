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

[table/src/types/crudFormDialog.ts:8](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/table/src/types/crudFormDialog.ts#L8)
