# Interface: IXphDialogProps

## Properties

### cancelProps?

> `optional` **cancelProps**: `Omit`\<`ButtonProps`, `"children"` \| `"onClick"`\>

#### Default

```ts
-
```

#### Description

取消按钮属性

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:33](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L33)

***

### cancelText?

> `optional` **cancelText**: `string`

#### Default

```ts
"取消"
```

#### Description

取消按钮文字

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:43](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L43)

***

### getPopperContainer()?

> `optional` **getPopperContainer**: () => `null` \| `HTMLElement`

#### Returns

`null` \| `HTMLElement`

#### Default

```ts
() => document.body
```

#### Description

挂载弹窗的容器

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:78](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L78)

***

### height?

> `optional` **height**: `number`

#### Default

```ts
-
```

#### Description

弹窗的高度

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:13](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L13)

***

### mask?

> `optional` **mask**: `boolean`

#### Default

```ts
false
```

#### Description

是否显示遮罩

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:18](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L18)

***

### okProps?

> `optional` **okProps**: `Omit`\<`ButtonProps`, `"children"` \| `"onClick"`\>

#### Default

```ts
-
```

#### Description

确定按钮属性

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:28](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L28)

***

### okText?

> `optional` **okText**: `string`

#### Default

```ts
"确定"
```

#### Description

确定按钮文字

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:38](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L38)

***

### onCancel()?

> `optional` **onCancel**: (`args`) => `Promise`\<`void`\>

#### Parameters

• **args**: `any`

#### Returns

`Promise`\<`void`\>

#### Default

```ts
-
```

#### Description

点击取消按钮触发该事件

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:53](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L53)

***

### onClose()?

> `optional` **onClose**: () => `void`

#### Returns

`void`

#### Default

```ts
-
```

#### Description

关闭的时候会触发该事件

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:73](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L73)

***

### onOk()?

> `optional` **onOk**: (`args`) => `Promise`\<`void`\>

#### Parameters

• **args**: `any`

#### Returns

`Promise`\<`void`\>

#### Default

```ts
-
```

#### Description

点击确定按钮触发该事件

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:48](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L48)

***

### onOpen()?

> `optional` **onOpen**: () => `void`

#### Returns

`void`

#### Default

```ts
-
```

#### Description

打开的时候会触发该事件

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:68](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L68)

***

### renderFooter()?

> `optional` **renderFooter**: (`__namedParameters`) => `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.loading**: `boolean`

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Default

```ts
-
```

#### Description

底部按钮自定义渲染函数

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:58](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L58)

***

### renderTitle()?

> `optional` **renderTitle**: () => `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Returns

`ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Default

```ts
-
```

#### Description

顶部标题自定义渲染函数

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:63](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L63)

***

### title?

> `optional` **title**: `string`

#### Default

```ts
-
```

#### Description

弹窗的标题

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:23](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L23)

***

### width?

> `optional` **width**: `number`

#### Default

```ts
700
```

#### Description

弹窗的宽度

#### Defined in

[packages/common/src/components/dialog/types/dialog.ts:8](https://github.com/XiaoPiHong/xph-crud/blob/1453d1f4b2490c13545a9d7404efaaabc2a2fd0f/packages/common/src/components/dialog/types/dialog.ts#L8)
