# Interface: IRenderColumnProps\<T\>

## Extends

- `Omit`\<`TBaseColumnType`\<`T`\>, `"render"`\>

## Type Parameters

• **T**

## Properties

### render()?

> `optional` **render**: (`value`, `record`, `index`) => `ReactNode` \| `RenderedCell`\<`T`\>

#### Parameters

• **value**: `any`

• **record**: `T`

• **index**: `number`

#### Returns

`ReactNode` \| `RenderedCell`\<`T`\>

#### Defined in

[packages/table/src/types/column.ts:26](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/table/src/types/column.ts#L26)
