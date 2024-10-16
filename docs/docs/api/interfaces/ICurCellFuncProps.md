# Interface: ICurCellFuncProps\<J, K, T\>

## Description

cellFunc中每一项对应的组件的props

## Type Parameters

• **J** *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) = `object`

• **K** *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) = `object`

• **T** *extends* keyof [`TCellComponentPropsMap`](../type-aliases/TCellComponentPropsMap.md)\<`J`, `K`\> = keyof [`TCellComponentPropsMap`](../type-aliases/TCellComponentPropsMap.md)\<`J`, `K`\>

## Properties

### cellFuncProps

> **cellFuncProps**: [`ICellFuncProps`](ICellFuncProps.md)\<[`TXphDataSourceItem`](../type-aliases/TXphDataSourceItem.md), `J`, `K`\>

#### Defined in

[packages/table/src/components/table/components/cellFunc/types/cellFunc.ts:107](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/components/table/components/cellFunc/types/cellFunc.ts#L107)

***

### curComponentProps?

> `optional` **curComponentProps**: [`TCellComponentPropsMap`](../type-aliases/TCellComponentPropsMap.md)\<`J`, `K`\>\[`T`\]

#### Defined in

[packages/table/src/components/table/components/cellFunc/types/cellFunc.ts:106](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/components/table/components/cellFunc/types/cellFunc.ts#L106)
