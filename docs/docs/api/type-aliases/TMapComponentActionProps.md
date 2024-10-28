# Type Alias: TMapComponentActionProps\<T\>

> **TMapComponentActionProps**\<`T`\>: `{ [K in keyof TComponentType<T>]: IComponentActionProps<K, T> }`\[keyof [`TComponentType`](TComponentType.md)\<`T`\>\]

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) |

## Description

将组件类型映射为 IComponentActionProps

## Defined in

[packages/common/src/components/actions/types/actionItem.ts:120](https://github.com/XiaoPiHong/xph-crud/blob/e1e57e01b1600d05f0ec8a82a7363e29ab98eee0/packages/common/src/components/actions/types/actionItem.ts#L120)
