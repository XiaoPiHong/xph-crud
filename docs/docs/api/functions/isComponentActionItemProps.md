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

[packages/common/src/components/actions/types/actionItem.ts:131](https://github.com/XiaoPiHong/xph-crud/blob/35d86c07c46a3dd83fadda70a3d1fe8dfc4260ac/packages/common/src/components/actions/types/actionItem.ts#L131)
