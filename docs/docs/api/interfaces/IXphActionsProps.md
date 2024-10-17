# Interface: IXphActionsProps\<T\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `disabled?` | `boolean` | 禁用（items中的componentProps的disabled优先级最高） |
| `inherit?` | `boolean` | 是否需要从扩展中继承属性（可能有些特殊情况，不需要使用扩展中的属性） |
| `items?` | [`IRenderActionProps`](IRenderActionProps.md) \| `TMapComponentActionProps`\<`T`\> *extends* `object` ? [`IRenderActionProps`](IRenderActionProps.md) \| `TMapComponentActionProps`\<`T`\> \| `Without`\<`TMapComponentActionProps`\<`T`\>, keyof [`IRenderActionProps`](IRenderActionProps.md)\> & [`IRenderActionProps`](IRenderActionProps.md) \| `Without`\<[`IRenderActionProps`](IRenderActionProps.md), keyof `TMapComponentActionProps`\<`T`\>\> & `TMapComponentActionProps`\<`T`\> : [`IRenderActionProps`](IRenderActionProps.md) \| `TMapComponentActionProps`\<`T`\>[] | 操作项 |
| `max?` | `number` | 超过多少个item自动省略，默认是10（其余全部放在一个dropdown中） |
| `render?` | `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\> | 自定义内容（items的优先级高于render） |
| `type?` | `"link"` \| `"text"` \| `"default"` \| `"primary"` \| `"dashed"` | 类型 |
