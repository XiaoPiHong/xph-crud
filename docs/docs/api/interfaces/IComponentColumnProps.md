# Interface: IComponentColumnProps\<T, J, K\>

## Extends

- `Omit`\<`TBaseColumnType`\<`T`\>, `"render"`\>

## Type Parameters

• **T**

• **J** *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) = `object`

• **K** *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) = `object`

## Properties

### cellFunc

> **cellFunc**: (`props`) => [`TCellProps`](../type-aliases/TCellProps.md)\<`J`, `K`\>[] \| [`TCellProps`](../type-aliases/TCellProps.md)\<`J`, `K`\>[]

#### Description

单元格渲染属性（原理也是使用render渲染不同的内容）

#### Defined in

[packages/table/src/types/column.ts:19](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/types/column.ts#L19)
