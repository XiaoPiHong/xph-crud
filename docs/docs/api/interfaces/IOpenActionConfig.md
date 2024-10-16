# Interface: IOpenActionConfig

## Properties

### cancel()?

> `optional` **cancel**: (`event`) => `Promise`\<`any`\>

#### Parameters

• **event**

• **event.values**: `any`

#### Returns

`Promise`\<`any`\>

#### Description

点击取消的回调(如果弹窗传递了onCancel属性就不用传这个了，这个是为了方便所有操作都在open函数中处理)

#### Defined in

[packages/table/src/types/crudFormDialog.ts:30](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/types/crudFormDialog.ts#L30)

***

### data

> **data**: `any`

#### Description

回填表单的内容

#### Defined in

[packages/table/src/types/crudFormDialog.ts:19](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/types/crudFormDialog.ts#L19)

***

### ok()?

> `optional` **ok**: (`event`) => `Promise`\<`any`\>

#### Parameters

• **event**

• **event.values**: `any`

#### Returns

`Promise`\<`any`\>

#### Description

点击确定的回调(如果弹窗传递了onOk属性就不用传这个了，这个是为了方便所有操作都在open函数中处理)

#### Defined in

[packages/table/src/types/crudFormDialog.ts:23](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/types/crudFormDialog.ts#L23)
