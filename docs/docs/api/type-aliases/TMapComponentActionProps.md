# Type Alias: TMapComponentActionProps\<T\>

> **TMapComponentActionProps**\<`T`\>: `{ [K in keyof TComponentType<T>]: IComponentActionProps<K, T> }`\[keyof [`TComponentType`](TComponentType.md)\<`T`\>\]

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) |

## Description

将组件类型映射为 IComponentActionProps

## Defined in

[packages/common/src/components/actions/types/actionItem.ts:117](https://github.com/XiaoPiHong/xph-crud/blob/df4afa60d65704448cd1781ed35689440e3aa7c3/packages/common/src/components/actions/types/actionItem.ts#L117)
