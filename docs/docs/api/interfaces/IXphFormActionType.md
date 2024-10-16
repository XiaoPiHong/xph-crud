# Interface: IXphFormActionType

## Properties

### getFieldsValue()

> **getFieldsValue**: (...`values`) => `Recordable`\<`any`\>

#### Parameters

• ...**values**: `any`[]

#### Returns

`Recordable`\<`any`\>

#### Defined in

[form/src/types/form.ts:133](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/form/src/types/form.ts#L133)

***

### resetFields()

> **resetFields**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[form/src/types/form.ts:135](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/form/src/types/form.ts#L135)

***

### scrollToField()

> **scrollToField**: (`name`, `options`?) => `Promise`\<`void`\>

#### Parameters

• **name**: `any`

• **options?**: `ScrollOptions`

#### Returns

`Promise`\<`void`\>

#### Defined in

[form/src/types/form.ts:137](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/form/src/types/form.ts#L137)

***

### setFieldsValue()

> **setFieldsValue**: (`values`) => `void`

#### Parameters

• **values**: `Recordable`\<`any`\>

#### Returns

`void`

#### Defined in

[form/src/types/form.ts:134](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/form/src/types/form.ts#L134)

***

### validator()

> **validator**: (`nameList`?) => `Promise`\<`any`\>

#### Parameters

• **nameList?**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

[form/src/types/form.ts:136](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/form/src/types/form.ts#L136)
