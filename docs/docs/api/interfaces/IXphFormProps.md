# Interface: IXphFormProps\<T\>

## Type Parameters

• **T** *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) = `object`

## Properties

### collapseNum?

> `optional` **collapseNum**: `number`

#### Default

```ts
5
```

#### Description

超过多少进行折叠，collapsible为true才生效

#### Defined in

[packages/form/src/types/form.ts:75](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L75)

***

### collapsible?

> `optional` **collapsible**: `boolean`

#### Default

```ts
-
```

#### Description

是否可折叠，默认超过5个折叠

#### Defined in

[packages/form/src/types/form.ts:70](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L70)

***

### colon?

> `optional` **colon**: `boolean`

#### Default

```ts
false
```

#### Description

表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)

#### Defined in

[packages/form/src/types/form.ts:25](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L25)

***

### colProps?

> `optional` **colProps**: `ColProps`

#### Default

```ts
-
```

#### Description

表单项的栅格配置

#### Defined in

[packages/form/src/types/form.ts:55](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L55)

***

### disabled?

> `optional` **disabled**: `boolean`

#### Default

```ts
-
```

#### Description

设置表单组件禁用，仅对 antd 组件有效

#### Defined in

[packages/form/src/types/form.ts:30](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L30)

***

### fieldMapToTime?

> `optional` **fieldMapToTime**: [`string`, [`string`, `string`], (string \| \[string, string\])?][]

#### Default

```ts
-
```

#### Description

用于将表单内时间区域的应设成 2 个字段，见下方案例

#### Example

```ts
// 场景：如果表单内有时间区间组件，获取到的值是一个数组，但是往往我们传递到后台需要是 2 个字段

fieldMapToTime: [
   // data为时间组件在表单内的字段，startTime，endTime为转化后的开始时间与结束时间
   // 'YYYY-MM-DD'为时间格式，参考moment
   ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],
   // 支持多个字段
   ['datetime1', ['startTime1', 'endTime1'], 'YYYY-MM-DD HH:mm:ss'],
]

// fieldMapToTime没写的时候表单获取到的值
{
  datetime: [Date(),Date()]
}

//  ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],等同于 dayjs(Date()).format('YYYY-MM-DD'). 之后
{
    startTime: '2020-08-12',
    endTime: '2020-08-15',
}

// ['datetime', ['startTime', 'endTime'], 'timestamp'],等同于 dayjs(Date()).unix(). 之后
{
    startTime: 1597190400,
    endTime: 1597449600,
}

// ['datetime', ['startTime', 'endTime'], 'timestampStartDay'],等同于 dayjs(Date()).startOf('day').unix(). 之后
{
    startTime: 1597190400,
    endTime: 1597449600,
}
```

#### Defined in

[packages/form/src/types/form.ts:124](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L124)

***

### items

> **items**: [`TXphFormItemProps`](../type-aliases/TXphFormItemProps.md)\<`T`\>[]

#### Default

```ts
[]
```

#### Description

表单项配置集合

#### Defined in

[packages/form/src/types/form.ts:15](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L15)

***

### labelAlign?

> `optional` **labelAlign**: `"left"` \| `"right"`

#### Default

```ts
-
```

#### Description

label 标签的文本对齐方式

#### Defined in

[packages/form/src/types/form.ts:45](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L45)

***

### labelCol?

> `optional` **labelCol**: `ColProps`

#### Default

```ts
-
```

#### Description

表单项label标签布局方式(wrapperCol的span与labelCol的span形成24栅格布局)

#### Defined in

[packages/form/src/types/form.ts:50](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L50)

***

### labelWrap?

> `optional` **labelWrap**: `boolean`

#### Default

```ts
true
```

#### Description

label 标签的文本换行方式

#### Defined in

[packages/form/src/types/form.ts:40](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L40)

***

### layout?

> `optional` **layout**: `"horizontal"` \| `"vertical"`

#### Default

```ts
"horizontal"
```

#### Description

表单布局方式，排除了antd的inline，因为可以使用colProps实现inline布局

#### Defined in

[packages/form/src/types/form.ts:20](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L20)

***

### register?

> `optional` **register**: [`IRegister`](IRegister.md)

#### Default

```ts
-
```

#### Description

注册事件（useForm使用，form组件会在挂载后调用）

#### Defined in

[packages/form/src/types/form.ts:129](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L129)

***

### renderActions()?

> `optional` **renderActions**: () => `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Default

```ts
-
```

#### Description

渲染操作组，用于渲染表单项的操作，这是一个预留项，是否需要操作组由业务自己决定（会跟折叠同行显示）

#### Defined in

[packages/form/src/types/form.ts:80](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L80)

***

### scrollToFirstError?

> `optional` **scrollToFirstError**: `boolean`

#### Default

```ts
-
```

#### Description

提交失败自动滚动到第一个错误字段

#### Defined in

[packages/form/src/types/form.ts:60](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L60)

***

### size?

> `optional` **size**: `"small"` \| `"middle"` \| `"large"`

#### Default

```ts
-
```

#### Description

设置字段组件的尺寸（仅限 antd 组件）

#### Defined in

[packages/form/src/types/form.ts:65](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L65)

***

### transformDateFunc()?

> `optional` **transformDateFunc**: (`date`, `format`) => `string`

#### Parameters

• **date**: `any`

• **format**: `string`

#### Returns

`string`

#### Default

```ts
(date: any, format: string) => { return date?.format?.(format || "YYYY-MM-DD HH:mm:ss") ?? date; }
```

#### Description

时间返回统一处理函数

#### Defined in

[packages/form/src/types/form.ts:85](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L85)

***

### wrapperCol?

> `optional` **wrapperCol**: `ColProps`

#### Default

```ts
-
```

#### Description

表单项组件布局方式(wrapperCol的span与labelCol的span形成24栅格布局)

#### Defined in

[packages/form/src/types/form.ts:35](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/form/src/types/form.ts#L35)
