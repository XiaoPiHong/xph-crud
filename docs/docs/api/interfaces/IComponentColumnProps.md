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

[packages/table/src/types/column.ts:19](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/table/src/types/column.ts#L19)
