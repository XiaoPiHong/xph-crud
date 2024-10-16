# Type Alias: TXphTableProps\<RecordType, CellFuncExtendPropsMap, ActionsExtendPropsMap, ToolbarExtendPropsMap, FormExtendPropsMap\>

> **TXphTableProps**\<`RecordType`, `CellFuncExtendPropsMap`, `ActionsExtendPropsMap`, `ToolbarExtendPropsMap`, `FormExtendPropsMap`\>: `object`

## Type Parameters

• **RecordType** = [`TXphDataSourceItem`](TXphDataSourceItem.md)

• **CellFuncExtendPropsMap** *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) = `object`

• **ActionsExtendPropsMap** *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) = `object`

• **ToolbarExtendPropsMap** *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) = `object`

• **FormExtendPropsMap** *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) = `object`

## Type declaration

### crudFormDialog?

> `optional` **crudFormDialog**: [`TXphCrudFormDialogProps`](TXphCrudFormDialogProps.md)\<`FormExtendPropsMap`\>

#### Description

（新增 / 修改）表单弹窗配置项

### onPaginationChange()?

> `optional` **onPaginationChange**: (`page`, `pageSize`) => `void`

#### Parameters

• **page**: `number`

• **pageSize**: `number`

#### Returns

`void`

#### Description

分页改变事件

### onRowSelectionChange()?

> `optional` **onRowSelectionChange**: (`selectedRowKeys`, `selectedRows`) => `void`

#### Parameters

• **selectedRowKeys**: `React.Key`[]

• **selectedRows**: `RecordType`[]

#### Returns

`void`

#### Description

列表选中事件

### searchForm?

> `optional` **searchForm**: [`TXphSearchFormProps`](TXphSearchFormProps.md)\<`FormExtendPropsMap`\>

#### Description

搜索表单配置项

### table?

> `optional` **table**: [`TXphApiTableProps`](TXphApiTableProps.md)\<`RecordType`, `CellFuncExtendPropsMap`, `ActionsExtendPropsMap`, `ToolbarExtendPropsMap`\>

#### Description

表格配置

## Description

整个组件的配置

## Defined in

[packages/table/src/types/table.ts:15](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/types/table.ts#L15)
