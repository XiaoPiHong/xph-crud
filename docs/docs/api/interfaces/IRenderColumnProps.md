# Interface: IRenderColumnProps\<T\>

## Extends

- `Omit`\<`TBaseColumnType`\<`T`\>, `"render"`\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type |
| ------ | ------ |
| `render?` | (`value`: `any`, `record`: `T`, `index`: `number`) => `ReactNode` \| `RenderedCell`\<`T`\> |
