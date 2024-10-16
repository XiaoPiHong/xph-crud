# Interface: IBaseFormItemProps

## Extended by

- [`IRenderFormItemProps`](IRenderFormItemProps.md)
- [`IComponentFormItemProps`](IComponentFormItemProps.md)

## Properties

### colProps?

> `optional` **colProps**: `ColProps`

#### Default

```ts
-
```

#### Description

表单项的栅格配置（当和 Form 同时设置时，以 Item 为准）

#### Defined in

[packages/form/src/types/formItem.ts:72](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L72)

***

### componentProps?

> `optional` **componentProps**: [`TFunction`](../type-aliases/TFunction.md)\<[`Recordable`](../type-aliases/Recordable.md)\<`any`\>\>

#### Default

```ts
-
```

#### Description

组件属性

#### Defined in

[packages/form/src/types/formItem.ts:52](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L52)

***

### disabled?

> `optional` **disabled**: [`TFunction`](../type-aliases/TFunction.md)\<`boolean`\>

#### Default

```ts
-
```

#### Description

是否禁用（当和 Form 同时设置时，以 Item 为准）

#### Defined in

[packages/form/src/types/formItem.ts:47](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L47)

***

### forceRow?

> `optional` **forceRow**: `boolean`

#### Default

```ts
-
```

#### Description

是否强制换一行显示该表单项（强制换行后续会跟随换行表单项）

#### Defined in

[packages/form/src/types/formItem.ts:77](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L77)

***

### ifShow?

> `optional` **ifShow**: [`TFunction`](../type-aliases/TFunction.md)\<`boolean`\>

#### Default

```ts
-
```

#### Description

是否显示（会新增或删除节点）

#### Defined in

[packages/form/src/types/formItem.ts:37](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L37)

***

### initialValue?

> `optional` **initialValue**: `any`

#### Default

```ts
-
```

#### Description

默认值

#### Defined in

[packages/form/src/types/formItem.ts:82](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L82)

***

### label

> **label**: `string`

#### Default

```ts
-
```

#### Description

标签名

#### Defined in

[packages/form/src/types/formItem.ts:22](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L22)

***

### labelCol?

> `optional` **labelCol**: `ColProps`

#### Default

```ts
-
```

#### Description

表单项label标签布局方式（当和 Form 同时设置时，以 Item 为准）

#### Defined in

[packages/form/src/types/formItem.ts:67](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L67)

***

### name

> **name**: `string`

#### Default

```ts
-
```

#### Description

字段名

#### Defined in

[packages/form/src/types/formItem.ts:17](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L17)

***

### required?

> `optional` **required**: [`TFunction`](../type-aliases/TFunction.md)\<`boolean`\>

#### Default

```ts
-
```

#### Description

是否必填

#### Defined in

[packages/form/src/types/formItem.ts:42](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L42)

***

### rules?

> `optional` **rules**: `Rule`[]

#### Default

```ts
-
```

#### Description

校验规则

#### Defined in

[packages/form/src/types/formItem.ts:57](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L57)

***

### show?

> `optional` **show**: [`TFunction`](../type-aliases/TFunction.md)\<`boolean`\>

#### Default

```ts
-
```

#### Description

是否显示（相当于display:none）

#### Defined in

[packages/form/src/types/formItem.ts:32](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L32)

***

### valuePropName?

> `optional` **valuePropName**: `string`

#### Default

```ts
-
```

#### Description

子节点的值的属性，如 Switch、Checkbox 的是 checked

#### Defined in

[packages/form/src/types/formItem.ts:27](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L27)

***

### wrapperCol?

> `optional` **wrapperCol**: `ColProps`

#### Default

```ts
-
```

#### Description

表单项组件的布局方式（当和 Form 同时设置时，以 Item 为准）

#### Defined in

[packages/form/src/types/formItem.ts:62](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/form/src/types/formItem.ts#L62)
