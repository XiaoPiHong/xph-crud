# Function: isComponentActionItemProps()

> **isComponentActionItemProps**(`item`): `item is IComponentActionProps<"Button", Object>`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`IRenderActionProps`](../interfaces/IRenderActionProps.md) \| [`TMapComponentActionProps`](../type-aliases/TMapComponentActionProps.md)\<`object`\> \| `Without`\<[`TMapComponentActionProps`](../type-aliases/TMapComponentActionProps.md)\<`object`\>, keyof IRenderActionProps\> & [`IRenderActionProps`](../interfaces/IRenderActionProps.md) \| Without\<IRenderActionProps, "key" \| "component" \| "componentProps" \| "ifShow" \| "auth"\> & TMapComponentActionProps\<\{\}\> |

## Returns

`item is IComponentActionProps<"Button", Object>`

## Description

判断是否为组件类型action

## Defined in

[packages/common/src/components/actions/types/actionItem.ts:131](https://github.com/XiaoPiHong/xph-crud/blob/9d44883c1fd301bcb6eb021e6a1345bb3cf6b335/packages/common/src/components/actions/types/actionItem.ts#L131)
