# Function: isRenderActionItemProps()

> **isRenderActionItemProps**(`item`): `item is IRenderActionProps`

## Parameters

• **item**: [`IRenderActionProps`](../interfaces/IRenderActionProps.md) \| `TMapComponentActionProps`\<`object`\> \| `Without`\<`TMapComponentActionProps`\<`object`\>, keyof IRenderActionProps\> & [`IRenderActionProps`](../interfaces/IRenderActionProps.md) \| Without\<IRenderActionProps, "key" \| "component" \| "componentProps" \| "ifShow" \| "auth"\> & TMapComponentActionProps\<\{\}\>

## Returns

`item is IRenderActionProps`

## Description

判断是否为自定义内容action

## Defined in

[packages/common/src/components/actions/types/actionItem.ts:140](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/common/src/components/actions/types/actionItem.ts#L140)
