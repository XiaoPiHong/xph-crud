# Function: isChildrenColumnProps()

> **isChildrenColumnProps**\<`T`\>(`column`): `column is IGroupColumnProps<T, Object, Object>`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`IComponentColumnProps`](../interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| [`IRenderColumnProps`](../interfaces/IRenderColumnProps.md)\<`T`\> \| [`IGroupColumnProps`](../interfaces/IGroupColumnProps.md)\<`T`, `object`, `object`\> \| `Without`\<[`IComponentColumnProps`](../interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\>, keyof IRenderColumnProps\<T\>\> & [`IRenderColumnProps`](../interfaces/IRenderColumnProps.md)\<`T`\> \| `Without`\<[`IRenderColumnProps`](../interfaces/IRenderColumnProps.md)\<`T`\>, keyof IComponentColumnProps\<T, J, K\>\> & [`IComponentColumnProps`](../interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| `Without`\<[`IComponentColumnProps`](../interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| [`IRenderColumnProps`](../interfaces/IRenderColumnProps.md)\<`T`\>, keyof IGroupColumnProps\<T, J, K\>\> & [`IGroupColumnProps`](../interfaces/IGroupColumnProps.md)\<`T`, `object`, `object`\> \| Without\<IGroupColumnProps\<T, \{\}, \{\}\>, "key" \| "className" \| "hidden" \| "title" \| "fixed" \| "width" \| "responsive" \| "colSpan" \| "dataIndex" \| "shouldCellUpdate" \| ... 28 more ... \| "onFilterDropdownVisibleChange"\> & (IComponentColumnProps\<...\> \| IRenderColumnProps\<...\>) |

## Returns

`column is IGroupColumnProps<T, Object, Object>`

## Defined in

[packages/table/src/types/column.ts:68](https://github.com/XiaoPiHong/xph-crud/blob/35d86c07c46a3dd83fadda70a3d1fe8dfc4260ac/packages/table/src/types/column.ts#L68)
