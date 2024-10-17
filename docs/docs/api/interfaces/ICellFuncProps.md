# Interface: ICellFuncProps\<T, J, K\>

## Description

CellFunc组件的props

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`TXphDataSourceItem`](../type-aliases/TXphDataSourceItem.md) |
| `J` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |
| `K` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |

## Properties

| Property | Type |
| ------ | ------ |
| `dslConfig` | `TCellFuncPropsMap`\<`J`, `K`\>[] |
| `renderPrams` | `object` |
| `renderPrams.column` | `Omit`\<[`IComponentColumnProps`](IComponentColumnProps.md)\<`T`, `K`, `K`\>, `"cellFunc"`\> |
| `renderPrams.index` | `number` |
| `renderPrams.record` | `T` |
| `renderPrams.text` | `any` |
