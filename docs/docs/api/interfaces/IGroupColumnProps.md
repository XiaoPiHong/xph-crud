# Interface: IGroupColumnProps\<T, J, K\>

## Extends

- `Omit`\<`ColumnGroupType`\<`T`\>, `"children"`\>

## Type Parameters

• **T**

• **J** *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) = `object`

• **K** *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) = `object`

## Properties

### children

> **children**: ([`IGroupColumnProps`](IGroupColumnProps.md)\<`T`, `J`, `K`\> \| [`IComponentColumnProps`](IComponentColumnProps.md)\<`T`, `J`, `K`\> \| [`IRenderColumnProps`](IRenderColumnProps.md)\<`T`\> \| `Without`\<[`IComponentColumnProps`](IComponentColumnProps.md)\<`T`, `J`, `K`\>, keyof IRenderColumnProps\<T\>\> & [`IRenderColumnProps`](IRenderColumnProps.md)\<`T`\> \| `Without`\<[`IRenderColumnProps`](IRenderColumnProps.md)\<`T`\>, keyof IComponentColumnProps\<T, J, K\>\> & [`IComponentColumnProps`](IComponentColumnProps.md)\<`T`, `J`, `K`\> \| `Without`\<[`IComponentColumnProps`](IComponentColumnProps.md)\<`T`, `J`, `K`\> \| [`IRenderColumnProps`](IRenderColumnProps.md)\<`T`\>, keyof IGroupColumnProps\<T, J, K\>\> & [`IGroupColumnProps`](IGroupColumnProps.md)\<`T`, `J`, `K`\> \| Without\<IGroupColumnProps\<T, J, K\>, "key" \| "className" \| "hidden" \| "title" \| "fixed" \| "width" \| "responsive" \| "colSpan" \| "dataIndex" \| "shouldCellUpdate" \| ... 28 more ... \| "onFilterDropdownVisibleChange"\> & (IComponentColumnProps\<...\> \| IRenderColumnProps\<...\>))[]

#### Defined in

[packages/table/src/types/column.ts:34](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/table/src/types/column.ts#L34)
