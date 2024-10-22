# Interface: IAutoUploadProps

## Extends

- `UploadProps`

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `api?` | (...`args`: `any`[]) => `Promise`\<`IFileList`\> | 上传服务器的api，有api证明默认是上传服务器，否者默认返回File[] |
| `maxCount?` | `number` | 上传的最大数量 |
| `maxSize?` | `number` | 上传的最大大小，单位为M |
| `onChange?` | (...`args`: `any`[]) => `void` | 改变表单值事件 |
| `openCrop?` | `boolean` | 是否开启裁剪 |
| `returnType?` | `"String"` \| `"String[]"` \| `"File[]"` \| `"FileList"` | 返回类型(也就是表单获取到的类型) |
| `value` | `any` | 默认文件列表（默认都是value字段） |
