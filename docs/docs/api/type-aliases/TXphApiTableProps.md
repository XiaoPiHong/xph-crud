# Type Alias: TXphApiTableProps\<T, J, K, L\>

> **TXphApiTableProps**\<`T`, `J`, `K`, `L`\>: `object` & `Omit`\<`TableProps`\<`T`\>, `"rowSelection"` \| `"columns"` \| `"loading"` \| `"dataSource"` \| `"pagination"`\>

## Type declaration

### api()?

> `optional` **api**: (`params`) => `Promise`\<`any`\>

#### Parameters

• **params**: `any`

#### Returns

`Promise`\<`any`\>

#### Default

```ts
-
```

#### Description

获取datasource的api

### autoPagination?

> `optional` **autoPagination**: `boolean`

#### Default

```ts
-
```

#### Description

是否开启前端自动分页（当api不支持分页时可用）

### autoRequest?

> `optional` **autoRequest**: `boolean`

#### Default

```ts
true
```

#### Description

首次是否自动请求

### columns?

> `optional` **columns**: [`TXphColumnProps`](TXphColumnProps.md)\<`T`, `J`, `K`\>[]

#### Default

```ts
[]
```

#### Description

列配置项

### formatDataSource()?

> `optional` **formatDataSource**: (`data`) => `any`[]

#### Parameters

• **data**: `any`

#### Returns

`any`[]

#### Default

```ts
-
```

#### Description

格式化返回的datasource

### fullHeight?

> `optional` **fullHeight**: `boolean`

#### Default

```ts
false
```

#### Description

表格撑满父容器（virtual为true时，默认fullHeight为true）

### onChange()?

> `optional` **onChange**: (`filters`, `sorter`, `extra`) => `void`

#### Parameters

• **filters**: `any`

• **sorter**: `any`

• **extra**: `any`

#### Returns

`void`

#### Default

```ts
-
```

#### Description

排序、筛选变化时触发

### pagination?

> `optional` **pagination**: `false` \| `PaginationProps`

#### Default

```ts
{ pageSize: 20, total: 0, showTotal: (total) => `共：${total} 条`, current: 1, pageSizeOptions: [10, 20, 50, 100], showSizeChanger: true, showQuickJumper: true, }
```

#### Description

分页配置（因为分页器是独立出来的，使用table的分页器布局需要修改样式）

### requestFields?

> `optional` **requestFields**: `object`

#### Default

```ts
{ pageSize: "pageSize", current: "current", }
```

#### Description

分页请求参数中传递到接口的属性名

### requestFields.current?

> `optional` **current**: `string`

#### Default

```ts
"current"
```

#### Description

当前页

### requestFields.pageSize?

> `optional` **pageSize**: `string`

#### Default

```ts
"pageSize"
```

#### Description

当前页大小

### responseFields?

> `optional` **responseFields**: `object`

#### Default

```ts
{ current: "current", list: "data", total: "total", }
```

#### Description

响应结果中获取数据的属性名

### responseFields.current?

> `optional` **current**: `string`

#### Default

```ts
"current"
```

#### Description

当前页

### responseFields.list?

> `optional` **list**: `string`

#### Default

```ts
"data"
```

#### Description

列表

### responseFields.total?

> `optional` **total**: `string`

#### Default

```ts
"total"
```

#### Description

所有页总数

### rowSelection?

> `optional` **rowSelection**: `RowSelectionType` \| `TableRowSelection`\<`T`\>

#### Default

```ts
-
```

#### Description

单选 / 多选

### toolbar?

> `optional` **toolbar**: [`IXphActionsProps`](../interfaces/IXphActionsProps.md)\<`L`\> \| (`e`) => [`IXphActionsProps`](../interfaces/IXphActionsProps.md)\<`L`\>

#### Default

```ts
-
```

#### Description

顶部操作栏配置，函数时可以传递参数，参数是什么由调用方决定

## Type Parameters

• **T** = [`TXphDataSourceItem`](TXphDataSourceItem.md)

• **J** *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) = `object`

• **K** *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) = `object`

• **L** *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) = `object`

## Description

扩展antd table的属性

## Defined in

[packages/table/src/types/apiTable.ts:16](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/table/src/types/apiTable.ts#L16)
