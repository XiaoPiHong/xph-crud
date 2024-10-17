# Function: isComponentActionItemProps()

> **isComponentActionItemProps**(`item`): `item is IComponentActionProps<"Button", Object>`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`IRenderActionProps`](../interfaces/IRenderActionProps.md) \| `TMapComponentActionProps`\<`object`\> \| `Without`\<`TMapComponentActionProps`\<`object`\>, keyof IRenderActionProps\> & [`IRenderActionProps`](../interfaces/IRenderActionProps.md) \| Without\<IRenderActionProps, "key" \| "component" \| "componentProps" \| "ifShow" \| "auth"\> & TMapComponentActionProps\<\{\}\> |

## Returns

`item is IComponentActionProps<"Button", Object>`

## Description

判断是否为组件类型action

## Defined in

[packages/common/src/components/actions/types/actionItem.ts:131](https://github.com/XiaoPiHong/xph-crud/blob/4f1a30dcf95acc1b0b790144a16f551c2adfa643/packages/common/src/components/actions/types/actionItem.ts#L131)
