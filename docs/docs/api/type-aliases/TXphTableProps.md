# Type Alias: TXphTableProps\<RecordType, CellFuncExtendPropsMap, ActionsExtendPropsMap, ToolbarExtendPropsMap, FormExtendPropsMap\>

> **TXphTableProps**\<`RecordType`, `CellFuncExtendPropsMap`, `ActionsExtendPropsMap`, `ToolbarExtendPropsMap`, `FormExtendPropsMap`\>: `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RecordType` | [`TXphDataSourceItem`](TXphDataSourceItem.md) |
| `CellFuncExtendPropsMap` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) | `object` |
| `ActionsExtendPropsMap` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) | `object` |
| `ToolbarExtendPropsMap` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) | `object` |
| `FormExtendPropsMap` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) | `object` |

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `crudFormDialog`? | [`TXphCrudFormDialogProps`](TXphCrudFormDialogProps.md)\<`FormExtendPropsMap`\> | （新增 / 修改）表单弹窗配置项 |
| `onPaginationChange`? | (`page`, `pageSize`) => `void` | 分页改变事件 |
| `onRowSelectionChange`? | (`selectedRowKeys`, `selectedRows`) => `void` | 列表选中事件 |
| `searchForm`? | [`TXphSearchFormProps`](TXphSearchFormProps.md)\<`FormExtendPropsMap`\> | 搜索表单配置项 |
| `table`? | [`TXphApiTableProps`](TXphApiTableProps.md)\<`RecordType`, `CellFuncExtendPropsMap`, `ActionsExtendPropsMap`, `ToolbarExtendPropsMap`\> | 表格配置 |

## Description

整个组件的配置

## Defined in

[packages/table/src/types/table.ts:15](https://github.com/XiaoPiHong/xph-crud/blob/d0b9ee1cd95d9006c7258527005a916fce797974/packages/table/src/types/table.ts#L15)
