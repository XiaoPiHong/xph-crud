# Interface: IRenderActionProps

## Description

自定义内容action

## Extends

- [`IBaseActionProps`](IBaseActionProps.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `auth?` | `string` \| `string`[] | 权限标识 |
| `ifShow?` | `boolean` \| () => `any` | 是否显示 |
| `key?` | `string` | 唯一标识 |
| `render` | `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\> | 自定义内容函数 |
