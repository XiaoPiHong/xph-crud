# Interface: ICrudFormDialogActionType

## Extends

- [`IXphFormActionType`](IXphFormActionType.md).`Omit`\<[`IXphDialogActionType`](IXphDialogActionType.md), `"open"`\>

## Properties

### close()

> **close**: () => `void`

#### Returns

`void`

#### Inherited from

`Omit.close`

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:83](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L83)

***

### getFieldsValue()

> **getFieldsValue**: (...`values`) => [`Recordable`](../type-aliases/Recordable.md)\<`any`\>

#### Parameters

• ...**values**: `any`[]

#### Returns

[`Recordable`](../type-aliases/Recordable.md)\<`any`\>

#### Inherited from

[`IXphFormActionType`](IXphFormActionType.md).[`getFieldsValue`](IXphFormActionType.md#getfieldsvalue)

#### Defined in

[packages/form/src/types/form.ts:133](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L133)

***

### getVisible()

> **getVisible**: () => `boolean`

#### Returns

`boolean`

#### Inherited from

`Omit.getVisible`

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:85](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L85)

***

### open()

> **open**: (`config`) => `Promise`\<`void`\>

#### Parameters

• **config**: [`IOpenActionConfig`](IOpenActionConfig.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/table/src/types/crudFormDialog.ts:39](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/types/crudFormDialog.ts#L39)

***

### resetFields()

> **resetFields**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IXphFormActionType`](IXphFormActionType.md).[`resetFields`](IXphFormActionType.md#resetfields)

#### Defined in

[packages/form/src/types/form.ts:135](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L135)

***

### scrollToField()

> **scrollToField**: (`name`, `options`?) => `Promise`\<`void`\>

#### Parameters

• **name**: `any`

• **options?**: `ScrollOptions`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IXphFormActionType`](IXphFormActionType.md).[`scrollToField`](IXphFormActionType.md#scrolltofield)

#### Defined in

[packages/form/src/types/form.ts:137](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L137)

***

### setFieldsValue()

> **setFieldsValue**: (`values`) => `void`

#### Parameters

• **values**: [`Recordable`](../type-aliases/Recordable.md)\<`any`\>

#### Returns

`void`

#### Inherited from

[`IXphFormActionType`](IXphFormActionType.md).[`setFieldsValue`](IXphFormActionType.md#setfieldsvalue)

#### Defined in

[packages/form/src/types/form.ts:134](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L134)

***

### setLoading()

> **setLoading**: (`loading`) => `void`

#### Parameters

• **loading**: `boolean`

#### Returns

`void`

#### Inherited from

`Omit.setLoading`

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:84](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L84)

***

### validator()

> **validator**: (`nameList`?) => `Promise`\<`any`\>

#### Parameters

• **nameList?**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IXphFormActionType`](IXphFormActionType.md).[`validator`](IXphFormActionType.md#validator)

#### Defined in

[packages/form/src/types/form.ts:136](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L136)
