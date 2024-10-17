# Interface: IXphFormProps\<T\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |

## Properties

| Property | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `collapseNum?` | `number` | `5` | 超过多少进行折叠，collapsible为true才生效 |
| `collapsible?` | `boolean` | `-` | 是否可折叠，默认超过5个折叠 |
| `colon?` | `boolean` | `false` | 表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) |
| `colProps?` | `ColProps` | `-` | 表单项的栅格配置 |
| `disabled?` | `boolean` | `-` | 设置表单组件禁用，仅对 antd 组件有效 |
| `fieldMapToTime?` | [`string`, [`string`, `string`], (string \| \[string, string\])?][] | `-` | 用于将表单内时间区域的应设成 2 个字段 **Example** `场景：如果表单内有时间区间组件，获取到的值是一个数组，但是往往我们传递到后台需要是 2 个字段 fieldMapToTime: [ // data为时间组件在表单内的字段，startTime，endTime为转化后的开始时间与结束时间 // 'YYYY-MM-DD'为时间格式，参考moment ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'], // 支持多个字段 ['datetime1', ['startTime1', 'endTime1'], 'YYYY-MM-DD HH:mm:ss'], ] // fieldMapToTime没写的时候表单获取到的值 { datetime: [Date(),Date()] } // ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],等同于 dayjs(Date()).format('YYYY-MM-DD'). 之后 { startTime: '2020-08-12', endTime: '2020-08-15', } // ['datetime', ['startTime', 'endTime'], 'timestamp'],等同于 dayjs(Date()).unix(). 之后 { startTime: 1597190400, endTime: 1597449600, } // ['datetime', ['startTime', 'endTime'], 'timestampStartDay'],等同于 dayjs(Date()).startOf('day').unix(). 之后 { startTime: 1597190400, endTime: 1597449600, }` |
| `items` | [`TXphFormItemProps`](../type-aliases/TXphFormItemProps.md)\<`T`\>[] | `[]` | 表单项配置集合 |
| `labelAlign?` | `"left"` \| `"right"` | `-` | label 标签的文本对齐方式 |
| `labelCol?` | `ColProps` | `-` | 表单项label标签布局方式(wrapperCol的span与labelCol的span形成24栅格布局) |
| `labelWrap?` | `boolean` | `true` | label 标签的文本换行方式 |
| `layout?` | `"horizontal"` \| `"vertical"` | `"horizontal"` | 表单布局方式，排除了antd的inline，因为可以使用colProps实现inline布局 |
| `register?` | [`IRegister`](IRegister.md) | `-` | 注册事件（useForm使用，form组件会在挂载后调用） |
| `renderActions?` | () => `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\> | `-` | 渲染操作组，用于渲染表单项的操作，这是一个预留项，是否需要操作组由业务自己决定（会跟折叠同行显示） |
| `scrollToFirstError?` | `boolean` | `-` | 提交失败自动滚动到第一个错误字段 |
| `size?` | `"small"` \| `"middle"` \| `"large"` | `-` | 设置字段组件的尺寸（仅限 antd 组件） |
| `transformDateFunc?` | (`date`: `any`, `format`: `string`) => `string` | `(date: any, format: string) => { return date?.format?.(format \|\| "YYYY-MM-DD HH:mm:ss") ?? date }` | 时间返回统一处理函数 |
| `wrapperCol?` | `ColProps` | `-` | 表单项组件布局方式(wrapperCol的span与labelCol的span形成24栅格布局) |
