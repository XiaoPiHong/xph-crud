# Interface: ICellFuncProps\<T, J, K\>

## Description

CellFunc组件的props

## Type Parameters

• **T** = [`TXphDataSourceItem`](../type-aliases/TXphDataSourceItem.md)

• **J** *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) = `object`

• **K** *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) = `object`

## Properties

### dslConfig

> **dslConfig**: `TCellFuncPropsMap`\<`J`, `K`\>[]

#### Defined in

[packages/table/src/components/table/components/cellFunc/types/cellFunc.ts:86](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/components/table/components/cellFunc/types/cellFunc.ts#L86)

***

### renderPrams

> **renderPrams**: `object`

#### column

> **column**: `Omit`\<[`IComponentColumnProps`](IComponentColumnProps.md)\<`T`, `K`, `K`\>, `"cellFunc"`\>

#### index

> **index**: `number`

#### record

> **record**: `T`

#### text

> **text**: `any`

#### Defined in

[packages/table/src/components/table/components/cellFunc/types/cellFunc.ts:87](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/components/table/components/cellFunc/types/cellFunc.ts#L87)
