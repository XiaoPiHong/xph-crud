# Type Alias: TXphApiTableProps\<T, J, K, L\>

> **TXphApiTableProps**\<`T`, `J`, `K`, `L`\>: `object` & `Omit`\<`TableProps`\<`T`\>, `"rowSelection"` \| `"columns"` \| `"loading"` \| `"dataSource"` \| `"pagination"`\>

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `api`? | (`params`) => `Promise`\<`any`\> | 获取datasource的api |
| `autoPagination`? | `boolean` | 是否开启前端自动分页（当api不支持分页时可用） |
| `autoRequest`? | `boolean` | 首次是否自动请求，默认为`true` |
| `columns`? | [`TXphColumnProps`](TXphColumnProps.md)\<`T`, `J`, `K`\>[] | 列配置项，默认为`[]` |
| `formatDataSource`? | (`data`) => `any`[] | 格式化返回的datasource |
| `fullHeight`? | `boolean` | 表格撑满父容器（virtual为true时，默认fullHeight为true），默认为`false` |
| `onChange`? | (`filters`, `sorter`, `extra`) => `void` | 排序、筛选变化时触发 |
| `pagination`? | `false` \| `PaginationProps` | 分页配置（因为分页器是独立出来的，使用table的分页器布局需要修改样式） 默认为`{ pageSize: 20, total: 0, showTotal: (total) => `共：$\{total\} 条`, current: 1, pageSizeOptions: [10, 20, 50, 100], showSizeChanger: true, showQuickJumper: true, }` |
| `requestFields`? | `object` | 分页请求参数中传递到接口的属性名 默认为`{ pageSize: "pageSize", current: "current", }` |
| `requestFields.current`? | `string` | - |
| `requestFields.pageSize`? | `string` | - |
| `responseFields`? | `object` | 响应结果中获取数据的属性名 默认为`{ current: "current", list: "data", total: "total", }` |
| `responseFields.current`? | `string` | - |
| `responseFields.list`? | `string` | - |
| `responseFields.total`? | `string` | - |
| `rowSelection`? | `RowSelectionType` \| `TableRowSelection`\<`T`\> | 单选 / 多选 |
| `toolbar`? | [`IXphActionsProps`](../interfaces/IXphActionsProps.md)\<`L`\> \| (`e`) => [`IXphActionsProps`](../interfaces/IXphActionsProps.md)\<`L`\> | 顶部操作栏配置，函数时可以传递参数，参数是什么由调用方决定 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`TXphDataSourceItem`](TXphDataSourceItem.md) |
| `J` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) | `object` |
| `K` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) | `object` |
| `L` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) | `object` |

## Description

扩展antd table的属性

## Defined in

[packages/table/src/types/apiTable.ts:16](https://github.com/XiaoPiHong/xph-crud/blob/df4afa60d65704448cd1781ed35689440e3aa7c3/packages/table/src/types/apiTable.ts#L16)
