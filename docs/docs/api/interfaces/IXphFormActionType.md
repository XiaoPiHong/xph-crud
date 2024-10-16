# Interface: IXphFormActionType

## Extended by

- [`ICrudFormDialogActionType`](ICrudFormDialogActionType.md)

## Properties

### getFieldsValue()

> **getFieldsValue**: (...`values`) => [`Recordable`](../type-aliases/Recordable.md)\<`any`\>

#### Parameters

• ...**values**: `any`[]

#### Returns

[`Recordable`](../type-aliases/Recordable.md)\<`any`\>

#### Defined in

[packages/form/src/types/form.ts:133](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L133)

***

### resetFields()

> **resetFields**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

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

#### Defined in

[packages/form/src/types/form.ts:137](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L137)

***

### setFieldsValue()

> **setFieldsValue**: (`values`) => `void`

#### Parameters

• **values**: [`Recordable`](../type-aliases/Recordable.md)\<`any`\>

#### Returns

`void`

#### Defined in

[packages/form/src/types/form.ts:134](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L134)

***

### validator()

> **validator**: (`nameList`?) => `Promise`\<`any`\>

#### Parameters

• **nameList?**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/form/src/types/form.ts:136](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L136)
