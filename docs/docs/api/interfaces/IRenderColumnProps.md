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

[packages/table/src/types/column.ts:26](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/types/column.ts#L26)
