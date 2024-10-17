# Function: isRenderActionItemProps()

> **isRenderActionItemProps**(`item`): `item is IRenderActionProps`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`IRenderActionProps`](../interfaces/IRenderActionProps.md) \| `TMapComponentActionProps`\<`object`\> \| `Without`\<`TMapComponentActionProps`\<`object`\>, keyof IRenderActionProps\> & [`IRenderActionProps`](../interfaces/IRenderActionProps.md) \| Without\<IRenderActionProps, "key" \| "component" \| "componentProps" \| "ifShow" \| "auth"\> & TMapComponentActionProps\<\{\}\> |

## Returns

`item is IRenderActionProps`

## Description

判断是否为自定义内容action

## Defined in

[packages/common/src/components/actions/types/actionItem.ts:140](https://github.com/XiaoPiHong/xph-crud/blob/6c1615ed1bf3b9b6f01037eaf454f3c74e2cead4/packages/common/src/components/actions/types/actionItem.ts#L140)
