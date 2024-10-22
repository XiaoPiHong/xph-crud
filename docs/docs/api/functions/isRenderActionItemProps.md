# Function: isRenderActionItemProps()

> **isRenderActionItemProps**(`item`): `item is IRenderActionProps`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`IRenderActionProps`](../interfaces/IRenderActionProps.md) \| [`TMapComponentActionProps`](../type-aliases/TMapComponentActionProps.md)\<`object`\> \| `Without`\<[`TMapComponentActionProps`](../type-aliases/TMapComponentActionProps.md)\<`object`\>, keyof IRenderActionProps\> & [`IRenderActionProps`](../interfaces/IRenderActionProps.md) \| Without\<IRenderActionProps, "key" \| "component" \| "componentProps" \| "ifShow" \| "auth"\> & TMapComponentActionProps\<\{\}\> |

## Returns

`item is IRenderActionProps`

## Description

判断是否为自定义内容action

## Defined in

[packages/common/src/components/actions/types/actionItem.ts:140](https://github.com/XiaoPiHong/xph-crud/blob/df4afa60d65704448cd1781ed35689440e3aa7c3/packages/common/src/components/actions/types/actionItem.ts#L140)
