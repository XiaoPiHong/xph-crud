# Interface: IGroupColumnProps\<T, J, K\>

## Extends

- `Omit`\<`ColumnGroupType`\<`T`\>, `"children"`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `J` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |
| `K` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |

## Properties

| Property | Type |
| ------ | ------ |
| `children` | ([`IGroupColumnProps`](IGroupColumnProps.md)\<`T`, `J`, `K`\> \| [`IComponentColumnProps`](IComponentColumnProps.md)\<`T`, `J`, `K`\> \| [`IRenderColumnProps`](IRenderColumnProps.md)\<`T`\> \| `Without`\<[`IComponentColumnProps`](IComponentColumnProps.md)\<`T`, `J`, `K`\>, keyof IRenderColumnProps\<T\>\> & [`IRenderColumnProps`](IRenderColumnProps.md)\<`T`\> \| `Without`\<[`IRenderColumnProps`](IRenderColumnProps.md)\<`T`\>, keyof IComponentColumnProps\<T, J, K\>\> & [`IComponentColumnProps`](IComponentColumnProps.md)\<`T`, `J`, `K`\> \| `Without`\<[`IComponentColumnProps`](IComponentColumnProps.md)\<`T`, `J`, `K`\> \| [`IRenderColumnProps`](IRenderColumnProps.md)\<`T`\>, keyof IGroupColumnProps\<T, J, K\>\> & [`IGroupColumnProps`](IGroupColumnProps.md)\<`T`, `J`, `K`\> \| Without\<IGroupColumnProps\<T, J, K\>, "key" \| "className" \| "hidden" \| "title" \| "fixed" \| "width" \| "responsive" \| "colSpan" \| "dataIndex" \| "shouldCellUpdate" \| ... 28 more ... \| "onFilterDropdownVisibleChange"\> & (IComponentColumnProps\<...\> \| IRenderColumnProps\<...\>))[] |
