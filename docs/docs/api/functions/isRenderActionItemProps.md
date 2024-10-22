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

[packages/common/src/components/actions/types/actionItem.ts:140](https://github.com/XiaoPiHong/xph-crud/blob/59cbdd4fcff26bcc88bce5e7c4ad2ae9fa840045/packages/common/src/components/actions/types/actionItem.ts#L140)
