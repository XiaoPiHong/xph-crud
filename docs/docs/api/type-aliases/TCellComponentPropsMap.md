# Type Alias: TCellComponentPropsMap\<CellFuncExtendPropsMap, ActionsExtendPropsMap\>

> **TCellComponentPropsMap**\<`CellFuncExtendPropsMap`, `ActionsExtendPropsMap`\>: `object` & `CellFuncExtendPropsMap`

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `actions` | [`IXphActionsProps`](../interfaces/IXphActionsProps.md)\<`ActionsExtendPropsMap`\> | - |
| `link` | `object` | - |
| `link.onClick`? | () => `void` | 点击事件（优先级最高） |
| `link.url`? | `string` | 超链接，点击超链接跳转 |
| `tag` | `object` | - |
| `tag.enums` | `object`[] | 标签的枚举 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CellFuncExtendPropsMap` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) | `object` |
| `ActionsExtendPropsMap` *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) | `object` |

## Description

cellFunc中每一项对应的组件componentProps属性映射

## Defined in

[packages/table/src/components/table/components/cellFunc/types/cellFunc.ts:7](https://github.com/XiaoPiHong/xph-crud/blob/df4afa60d65704448cd1781ed35689440e3aa7c3/packages/table/src/components/table/components/cellFunc/types/cellFunc.ts#L7)
