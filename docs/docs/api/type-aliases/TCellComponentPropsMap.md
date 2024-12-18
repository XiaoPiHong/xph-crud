# Type Alias: TCellComponentPropsMap\<CellFuncExtendPropsMap, ActionsExtendPropsMap\>

> **TCellComponentPropsMap**\<`CellFuncExtendPropsMap`, `ActionsExtendPropsMap`\>: `object` & `CellFuncExtendPropsMap`

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `actions` | [`IXphActionsProps`](../interfaces/IXphActionsProps.md)\<`ActionsExtendPropsMap`\> | - |
| `copy` | `object` | - |
| `copy.onClick`? | (`record`) => `void` | 自定义点击事件 |
| `copy.size`? | `"small"` \| `"default"` \| `"large"` | 大小 |
| `copy.text`? | `string` \| (`record`) => `string` | 复制的文本 |
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

[packages/table/src/components/table/components/cellFunc/types/cellFunc.ts:7](https://github.com/XiaoPiHong/xph-crud/blob/f7338a40f5a813e6f1e401fd5222398dacf05e4d/packages/table/src/components/table/components/cellFunc/types/cellFunc.ts#L7)
