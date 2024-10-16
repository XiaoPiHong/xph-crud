# Type Alias: TCellComponentPropsMap\<CellFuncExtendPropsMap, ActionsExtendPropsMap\>

> **TCellComponentPropsMap**\<`CellFuncExtendPropsMap`, `ActionsExtendPropsMap`\>: `object` & `CellFuncExtendPropsMap`

## Type declaration

### actions

> **actions**: [`IXphActionsProps`](../interfaces/IXphActionsProps.md)\<`ActionsExtendPropsMap`\>

### link

> **link**: `object`

### link.onClick()?

> `optional` **onClick**: () => `void`

#### Returns

`void`

#### Description

点击事件（优先级最高）

### link.url?

> `optional` **url**: `string`

#### Description

超链接，点击超链接跳转

### tag

> **tag**: `object`

### tag.enums

> **enums**: `object`[]

#### Description

标签的枚举

## Type Parameters

• **CellFuncExtendPropsMap** *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) = `object`

• **ActionsExtendPropsMap** *extends* [`TXphExtendComponentPropsMap`](TXphExtendComponentPropsMap.md) = `object`

## Description

cellFunc中每一项对应的组件componentProps属性映射

## Defined in

[packages/table/src/components/table/components/cellFunc/types/cellFunc.ts:7](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/components/table/components/cellFunc/types/cellFunc.ts#L7)
