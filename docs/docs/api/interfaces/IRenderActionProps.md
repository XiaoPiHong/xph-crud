# Interface: IRenderActionProps

## Description

自定义内容action

## Extends

- [`IBaseActionProps`](IBaseActionProps.md)

## Properties

### auth?

> `optional` **auth**: `string` \| `string`[]

#### Description

权限标识

#### Inherited from

[`IBaseActionProps`](IBaseActionProps.md).[`auth`](IBaseActionProps.md#auth)

#### Defined in

[packages/common/src/components/actions/types/actionItem.ts:16](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/actions/types/actionItem.ts#L16)

***

### ifShow?

> `optional` **ifShow**: `boolean` \| () => `any`

#### Description

是否显示

#### Inherited from

[`IBaseActionProps`](IBaseActionProps.md).[`ifShow`](IBaseActionProps.md#ifshow)

#### Defined in

[packages/common/src/components/actions/types/actionItem.ts:12](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/actions/types/actionItem.ts#L12)

***

### key?

> `optional` **key**: `string`

#### Description

唯一标识

#### Inherited from

[`IBaseActionProps`](IBaseActionProps.md).[`key`](IBaseActionProps.md#key)

#### Defined in

[packages/common/src/components/actions/types/actionItem.ts:8](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/actions/types/actionItem.ts#L8)

***

### render

> **render**: `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Description

自定义内容函数

#### Defined in

[packages/common/src/components/actions/types/actionItem.ts:79](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/actions/types/actionItem.ts#L79)
