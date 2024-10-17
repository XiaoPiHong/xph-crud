# Interface: ICurCellFuncProps\<J, K, T\>

## Description

cellFunc中每一项对应的组件的props

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `J` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |
| `K` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |
| `T` *extends* keyof [`TCellComponentPropsMap`](../type-aliases/TCellComponentPropsMap.md)\<`J`, `K`\> | keyof [`TCellComponentPropsMap`](../type-aliases/TCellComponentPropsMap.md)\<`J`, `K`\> |

## Properties

| Property | Type |
| ------ | ------ |
| `cellFuncProps` | [`ICellFuncProps`](ICellFuncProps.md)\<[`TXphDataSourceItem`](../type-aliases/TXphDataSourceItem.md), `J`, `K`\> |
| `curComponentProps?` | [`TCellComponentPropsMap`](../type-aliases/TCellComponentPropsMap.md)\<`J`, `K`\>\[`T`\] |
