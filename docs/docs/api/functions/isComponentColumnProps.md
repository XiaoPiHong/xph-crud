# Function: isComponentColumnProps()

> **isComponentColumnProps**\<`T`\>(`column`): `column is IComponentColumnProps<T, Object, Object>`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`IComponentColumnProps`](../interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| [`IRenderColumnProps`](../interfaces/IRenderColumnProps.md)\<`T`\> \| [`IGroupColumnProps`](../interfaces/IGroupColumnProps.md)\<`T`, `object`, `object`\> \| `Without`\<[`IComponentColumnProps`](../interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\>, keyof IRenderColumnProps\<T\>\> & [`IRenderColumnProps`](../interfaces/IRenderColumnProps.md)\<`T`\> \| `Without`\<[`IRenderColumnProps`](../interfaces/IRenderColumnProps.md)\<`T`\>, keyof IComponentColumnProps\<T, J, K\>\> & [`IComponentColumnProps`](../interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| `Without`\<[`IComponentColumnProps`](../interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| [`IRenderColumnProps`](../interfaces/IRenderColumnProps.md)\<`T`\>, keyof IGroupColumnProps\<T, J, K\>\> & [`IGroupColumnProps`](../interfaces/IGroupColumnProps.md)\<`T`, `object`, `object`\> \| Without\<IGroupColumnProps\<T, \{\}, \{\}\>, "key" \| "className" \| "hidden" \| "title" \| "fixed" \| "width" \| "responsive" \| "colSpan" \| "dataIndex" \| "shouldCellUpdate" \| ... 28 more ... \| "onFilterDropdownVisibleChange"\> & (IComponentColumnProps\<...\> \| IRenderColumnProps\<...\>) |

## Returns

`column is IComponentColumnProps<T, Object, Object>`

## Defined in

[packages/table/src/types/column.ts:62](https://github.com/XiaoPiHong/xph-crud/blob/df4afa60d65704448cd1781ed35689440e3aa7c3/packages/table/src/types/column.ts#L62)
