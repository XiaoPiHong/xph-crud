# Function: getValuesByPathObj()

> **getValuesByPathObj**(`fields`, `values`): `Record`\<`string`, `any`\>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | `Record`\<`string`, `string`\> |
| `values` | `Record`\<`string`, `any`\> |

## Returns

`Record`\<`string`, `any`\>

## Description

通过属性为包含.的字符串的对象从值对象中获取值

## Example

```ts
fields { current: 'data.current', pageSize: 'data.pageSize' }
values { data: { current: 1, pageSize: 10 } }
return { current: 1, pageSize: 10 }
```

## Defined in

[packages/common/src/utils/getValueByPath.ts:24](https://github.com/XiaoPiHong/xph-crud/blob/99ec0ffb61581e75526484c4dd7c2cd81ce44894/packages/common/src/utils/getValueByPath.ts#L24)
