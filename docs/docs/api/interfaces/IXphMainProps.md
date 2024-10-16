# Interface: IXphMainProps

## Description

因为渲染是从cellFuncs中的最后一项开始的，所以mainClick是排在后面的组件传递到前面的
目的：目的是为了将自定义组件的点击事件交给最底层的组件进行调用
注意：因为多个自定义组件可能都有mainClick，所以也需要保证其他组件的正常调用（即：传递给子组件Comp的时候，需要把父组件传递过来的mainClick给手动执行一下）

## Properties

### mainClick()?

> `optional` **mainClick**: () => `void`

#### Returns

`void`

#### Defined in

[packages/table/src/components/table/components/cellFunc/types/cellFunc.ts:116](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/components/table/components/cellFunc/types/cellFunc.ts#L116)

***

### mainHandleText()?

> `optional` **mainHandleText**: () => `any`

#### Returns

`any`

#### Defined in

[packages/table/src/components/table/components/cellFunc/types/cellFunc.ts:118](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/components/table/components/cellFunc/types/cellFunc.ts#L118)

***

### mainStyle?

> `optional` **mainStyle**: `CSSProperties`

#### Defined in

[packages/table/src/components/table/components/cellFunc/types/cellFunc.ts:117](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/table/src/components/table/components/cellFunc/types/cellFunc.ts#L117)
