# Interface: IComponentColumnProps\<T, J, K\>

## Extends

- `Omit`\<`TBaseColumnType`\<`T`\>, `"render"`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `J` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |
| `K` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `cellFunc` | (`props`) => [`TCellProps`](../type-aliases/TCellProps.md)\<`J`, `K`\>[] \| [`TCellProps`](../type-aliases/TCellProps.md)\<`J`, `K`\>[] | 单元格渲染属性（原理也是使用render渲染不同的内容） |
