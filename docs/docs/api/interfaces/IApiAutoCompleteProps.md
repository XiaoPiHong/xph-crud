# Interface: IApiAutoCompleteProps

## Extends

- `AutoCompleteProps`

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `api?` | (...`args`: `any`[]) => `Promise`\<`any`\> | 扩展api |
| `immediate?` | `boolean` | 是否立即触发（默认立即触发,否者展开选项时触发） |
| `isusewatch?` | `string` | 是否启用了Form.useWatch监听（'true' | 'false'） |
| `params?` | `any` | 扩展api的参数 |
