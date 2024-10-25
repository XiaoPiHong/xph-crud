# Interface: IDropDownItemProps

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `auth?` | `string` \| `string`[] | 权限标识 |
| `disabled?` | `boolean` | 是否禁用，注意：父级如果disabled为true，子级无法展开（所以相当于是变向的父级禁用，子级也禁用了） |
| `icon?` | `ReactNode` | 图标 |
| `ifShow?` | `boolean` \| () => `any` | 是否显示 |
| `key` | `string` | 唯一标识 |
| `label` | `string` | 显示文本 |
