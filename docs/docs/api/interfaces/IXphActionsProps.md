# Interface: IXphActionsProps\<T\>

## Type Parameters

• **T** *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) = `object`

## Properties

### disabled?

> `optional` **disabled**: `boolean`

#### Description

禁用（items中的componentProps的disabled优先级最高）

#### Defined in

[common/src/components/actions/types/actions.ts:17](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/common/src/components/actions/types/actions.ts#L17)

***

### inherit?

> `optional` **inherit**: `boolean`

#### Description

是否需要从扩展中继承属性（可能有些特殊情况，不需要使用扩展中的属性）

#### Defined in

[common/src/components/actions/types/actions.ts:29](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/common/src/components/actions/types/actions.ts#L29)

***

### items?

> `optional` **items**: `IRenderActionProps` \| `TMapComponentActionProps`\<`T`\> *extends* `object` ? `IRenderActionProps` \| `TMapComponentActionProps`\<`T`\> \| `Without`\<`TMapComponentActionProps`\<`T`\>, keyof `IRenderActionProps`\> & `IRenderActionProps` \| `Without`\<`IRenderActionProps`, keyof `TMapComponentActionProps`\<`T`\>\> & `TMapComponentActionProps`\<`T`\> : `IRenderActionProps` \| `TMapComponentActionProps`\<`T`\>[]

#### Description

操作项

#### Defined in

[common/src/components/actions/types/actions.ts:13](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/common/src/components/actions/types/actions.ts#L13)

***

### max?

> `optional` **max**: `number`

#### Description

超过多少个item自动省略，默认是10（其余全部放在一个dropdown中）

#### Defined in

[common/src/components/actions/types/actions.ts:25](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/common/src/components/actions/types/actions.ts#L25)

***

### render?

> `optional` **render**: `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Description

自定义内容（items的优先级高于render）

#### Defined in

[common/src/components/actions/types/actions.ts:21](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/common/src/components/actions/types/actions.ts#L21)

***

### type?

> `optional` **type**: `"link"` \| `"text"` \| `"default"` \| `"primary"` \| `"dashed"`

#### Description

类型

#### Defined in

[common/src/components/actions/types/actions.ts:9](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/common/src/components/actions/types/actions.ts#L9)
