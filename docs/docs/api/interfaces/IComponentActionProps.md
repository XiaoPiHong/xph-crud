# Interface: IComponentActionProps\<T, K\>

## Description

组件类型action

## Extends

- [`IBaseActionProps`](IBaseActionProps.md)

## Type Parameters

• **T** *extends* keyof [`TComponentType`](../type-aliases/TComponentType.md)\<`K`\>

• **K** *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) = `object`

## Properties

### auth?

> `optional` **auth**: `string` \| `string`[]

#### Description

权限标识

#### Inherited from

[`IBaseActionProps`](IBaseActionProps.md).[`auth`](IBaseActionProps.md#auth)

#### Defined in

[packages/common/src/components/actions/types/actionItem.ts:16](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/common/src/components/actions/types/actionItem.ts#L16)

***

### component

> **component**: `T`

#### Description

组件

#### Defined in

[packages/common/src/components/actions/types/actionItem.ts:65](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/common/src/components/actions/types/actionItem.ts#L65)

***

### componentProps?

> `optional` **componentProps**: [`TComponentType`](../type-aliases/TComponentType.md)\<`K`\>\[`T`\]

#### Description

组件属性

#### Defined in

[packages/common/src/components/actions/types/actionItem.ts:69](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/common/src/components/actions/types/actionItem.ts#L69)

***

### ifShow?

> `optional` **ifShow**: `boolean` \| () => `any`

#### Description

是否显示

#### Inherited from

[`IBaseActionProps`](IBaseActionProps.md).[`ifShow`](IBaseActionProps.md#ifshow)

#### Defined in

[packages/common/src/components/actions/types/actionItem.ts:12](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/common/src/components/actions/types/actionItem.ts#L12)

***

### key?

> `optional` **key**: `string`

#### Description

唯一标识

#### Inherited from

[`IBaseActionProps`](IBaseActionProps.md).[`key`](IBaseActionProps.md#key)

#### Defined in

[packages/common/src/components/actions/types/actionItem.ts:8](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/common/src/components/actions/types/actionItem.ts#L8)
