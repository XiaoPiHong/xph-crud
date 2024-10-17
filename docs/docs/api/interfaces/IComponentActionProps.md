# Interface: IComponentActionProps\<T, K\>

## Description

组件类型action

## Extends

- [`IBaseActionProps`](IBaseActionProps.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* keyof [`TComponentType`](../type-aliases/TComponentType.md)\<`K`\> | - |
| `K` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `auth?` | `string` \| `string`[] | 权限标识 |
| `component` | `T` | 组件 |
| `componentProps?` | [`TComponentType`](../type-aliases/TComponentType.md)\<`K`\>\[`T`\] | 组件属性 |
| `ifShow?` | `boolean` \| () => `any` | 是否显示 |
| `key?` | `string` | 唯一标识 |
