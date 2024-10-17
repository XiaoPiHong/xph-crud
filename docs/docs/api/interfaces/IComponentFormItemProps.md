# Interface: IComponentFormItemProps\<T\>

## Description

component props

## Extends

- [`IBaseFormItemProps`](IBaseFormItemProps.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`TXphExtendComponentPropsMap`](../type-aliases/TXphExtendComponentPropsMap.md) | `object` |

## Properties

| Property | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `colProps?` | `ColProps` | `-` | 表单项的栅格配置（当和 Form 同时设置时，以 Item 为准） |
| `component` | `"Button"` \| `"Select"` \| `"Input"` \| `"InputNumber"` \| `"TreeSelect"` \| `"Transfer"` \| `"Switch"` \| `"Radio"` \| `"RadioGroup"` \| `"Checkbox"` \| `"CheckboxGroup"` \| `"Cascader"` \| `"TimePicker"` \| `"DatePicker"` \| `"MonthPicker"` \| `"WeekPicker"` \| `"RangePicker"` \| `"InputPassword"` \| `"InputTextArea"` \| `"AutoComplete"` \| `"Upload"` \| `"ApiSelect"` \| `"ApiTreeSelect"` \| `"ApiTransfer"` \| `"ApiAutoComplete"` \| `"AutoUpload"` \| keyof `T` | `-` | 映射组件 |
| `componentProps?` | [`TFunction`](../type-aliases/TFunction.md)\<[`Recordable`](../type-aliases/Recordable.md)\<`any`\>\> | `-` | 组件属性 |
| `disabled?` | [`TFunction`](../type-aliases/TFunction.md)\<`boolean`\> | `-` | 是否禁用（当和 Form 同时设置时，以 Item 为准） |
| `forceRow?` | `boolean` | `-` | 是否强制换一行显示该表单项（强制换行后续会跟随换行表单项） |
| `ifShow?` | [`TFunction`](../type-aliases/TFunction.md)\<`boolean`\> | `-` | 是否显示（会新增或删除节点） |
| `initialValue?` | `any` | `-` | 默认值 |
| `label` | `string` | `-` | 标签名 |
| `labelCol?` | `ColProps` | `-` | 表单项label标签布局方式（当和 Form 同时设置时，以 Item 为准） |
| `name` | `string` | `-` | 字段名 |
| `required?` | [`TFunction`](../type-aliases/TFunction.md)\<`boolean`\> | `-` | 是否必填 |
| `rules?` | `Rule`[] | `-` | 校验规则 |
| `show?` | [`TFunction`](../type-aliases/TFunction.md)\<`boolean`\> | `-` | 是否显示（相当于display:none） |
| `valuePropName?` | `string` | `-` | 子节点的值的属性，如 Switch、Checkbox 的是 checked |
| `wrapperCol?` | `ColProps` | `-` | 表单项组件的布局方式（当和 Form 同时设置时，以 Item 为准） |
