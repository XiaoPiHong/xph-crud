# xph-crud

## References

### IActionsProps

Renames and re-exports [IXphActionsProps](interfaces/IXphActionsProps.md)

***

### IAuthProps

Renames and re-exports [IXphAuthProps](interfaces/IXphAuthProps.md)

***

### ICrudFormDialogActionType

Renames and re-exports [IXphCrudFormDialogActionType](interfaces/IXphCrudFormDialogActionType.md)

***

### IDialogActionType

Renames and re-exports [IXphDialogActionType](interfaces/IXphDialogActionType.md)

***

### IDialogProps

Renames and re-exports [IXphDialogProps](interfaces/IXphDialogProps.md)

***

### IFormActionType

Renames and re-exports [IXphFormActionType](interfaces/IXphFormActionType.md)

***

### IFormProps

Renames and re-exports [IXphFormProps](interfaces/IXphFormProps.md)

***

### IMainProps

Renames and re-exports [IXphMainProps](interfaces/IXphMainProps.md)

***

### TActionItemProps

Renames and re-exports [TXphActionItemProps](type-aliases/TXphActionItemProps.md)

***

### TApiTableProps

Renames and re-exports [TXphApiTableProps](type-aliases/TXphApiTableProps.md)

***

### TColumnProps

Renames and re-exports [TXphColumnProps](type-aliases/TXphColumnProps.md)

***

### TCrudFormDialogProps

Renames and re-exports [TXphCrudFormDialogProps](type-aliases/TXphCrudFormDialogProps.md)

***

### TDataSourceItem

Renames and re-exports [TXphDataSourceItem](type-aliases/TXphDataSourceItem.md)

***

### TFormItemProps

Renames and re-exports [TXphFormItemProps](type-aliases/TXphFormItemProps.md)

***

### TSearchFormProps

Renames and re-exports [TXphSearchFormProps](type-aliases/TXphSearchFormProps.md)

***

### TTableActionType

Renames and re-exports [TXphTableActionType](type-aliases/TXphTableActionType.md)

***

### TTableProps

Renames and re-exports [TXphTableProps](type-aliases/TXphTableProps.md)

## Functions

### buildUUID()

> **buildUUID**(): `string`

#### Returns

`string`

#### Description

生成随机数

#### Defined in

[packages/common/src/utils/uuid.ts:9](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/utils/uuid.ts#L9)

***

### getValueByPath()

> **getValueByPath**(`obj`, `path`): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `Record`\<`string`, `any`\> |
| `path` | `string` |

#### Returns

`any`

#### Description

Helper function to get value by path

#### Defined in

[packages/common/src/utils/getValueByPath.ts:4](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/utils/getValueByPath.ts#L4)

***

### getValuesByPathObj()

> **getValuesByPathObj**(`fields`, `values`): `Record`\<`string`, `any`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | `Record`\<`string`, `string`\> |
| `values` | `Record`\<`string`, `any`\> |

#### Returns

`Record`\<`string`, `any`\>

#### Description

通过属性为包含.的字符串的对象从值对象中获取值

#### Example

```ts
fields { current: 'data.current', pageSize: 'data.pageSize' }
values { data: { current: 1, pageSize: 10 } }
return { current: 1, pageSize: 10 }
```

#### Defined in

[packages/common/src/utils/getValueByPath.ts:24](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/utils/getValueByPath.ts#L24)

***

### isChildrenColumnProps()

> **isChildrenColumnProps**\<`T`\>(`column`): `column is IGroupColumnProps<T, Object, Object>`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`IComponentColumnProps`](interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| [`IRenderColumnProps`](interfaces/IRenderColumnProps.md)\<`T`\> \| [`IGroupColumnProps`](interfaces/IGroupColumnProps.md)\<`T`, `object`, `object`\> \| `Without`\<[`IComponentColumnProps`](interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\>, keyof IRenderColumnProps\<T\>\> & [`IRenderColumnProps`](interfaces/IRenderColumnProps.md)\<`T`\> \| `Without`\<[`IRenderColumnProps`](interfaces/IRenderColumnProps.md)\<`T`\>, keyof IComponentColumnProps\<T, J, K\>\> & [`IComponentColumnProps`](interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| `Without`\<[`IComponentColumnProps`](interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| [`IRenderColumnProps`](interfaces/IRenderColumnProps.md)\<`T`\>, keyof IGroupColumnProps\<T, J, K\>\> & [`IGroupColumnProps`](interfaces/IGroupColumnProps.md)\<`T`, `object`, `object`\> \| Without\<IGroupColumnProps\<T, \{\}, \{\}\>, "key" \| "className" \| "hidden" \| "title" \| "fixed" \| "width" \| "responsive" \| "colSpan" \| "dataIndex" \| "shouldCellUpdate" \| ... 28 more ... \| "onFilterDropdownVisibleChange"\> & (IComponentColumnProps\<...\> \| IRenderColumnProps\<...\>) |

#### Returns

`column is IGroupColumnProps<T, Object, Object>`

#### Defined in

[packages/table/src/types/column.ts:68](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/table/src/types/column.ts#L68)

***

### isComponentActionItemProps()

> **isComponentActionItemProps**(`item`): `item is IComponentActionProps<"Button", Object>`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`IRenderActionProps`](interfaces/IRenderActionProps.md) \| [`TMapComponentActionProps`](type-aliases/TMapComponentActionProps.md)\<`object`\> \| `Without`\<[`TMapComponentActionProps`](type-aliases/TMapComponentActionProps.md)\<`object`\>, keyof IRenderActionProps\> & [`IRenderActionProps`](interfaces/IRenderActionProps.md) \| Without\<IRenderActionProps, "key" \| "component" \| "componentProps" \| "ifShow" \| "auth"\> & TMapComponentActionProps\<\{\}\> |

#### Returns

`item is IComponentActionProps<"Button", Object>`

#### Description

判断是否为组件类型action

#### Defined in

[packages/common/src/components/actions/types/actionItem.ts:131](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/components/actions/types/actionItem.ts#L131)

***

### isComponentColumnProps()

> **isComponentColumnProps**\<`T`\>(`column`): `column is IComponentColumnProps<T, Object, Object>`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`IComponentColumnProps`](interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| [`IRenderColumnProps`](interfaces/IRenderColumnProps.md)\<`T`\> \| [`IGroupColumnProps`](interfaces/IGroupColumnProps.md)\<`T`, `object`, `object`\> \| `Without`\<[`IComponentColumnProps`](interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\>, keyof IRenderColumnProps\<T\>\> & [`IRenderColumnProps`](interfaces/IRenderColumnProps.md)\<`T`\> \| `Without`\<[`IRenderColumnProps`](interfaces/IRenderColumnProps.md)\<`T`\>, keyof IComponentColumnProps\<T, J, K\>\> & [`IComponentColumnProps`](interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| `Without`\<[`IComponentColumnProps`](interfaces/IComponentColumnProps.md)\<`T`, `object`, `object`\> \| [`IRenderColumnProps`](interfaces/IRenderColumnProps.md)\<`T`\>, keyof IGroupColumnProps\<T, J, K\>\> & [`IGroupColumnProps`](interfaces/IGroupColumnProps.md)\<`T`, `object`, `object`\> \| Without\<IGroupColumnProps\<T, \{\}, \{\}\>, "key" \| "className" \| "hidden" \| "title" \| "fixed" \| "width" \| "responsive" \| "colSpan" \| "dataIndex" \| "shouldCellUpdate" \| ... 28 more ... \| "onFilterDropdownVisibleChange"\> & (IComponentColumnProps\<...\> \| IRenderColumnProps\<...\>) |

#### Returns

`column is IComponentColumnProps<T, Object, Object>`

#### Defined in

[packages/table/src/types/column.ts:62](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/table/src/types/column.ts#L62)

***

### isComponentFormItemProps()

> **isComponentFormItemProps**(`item`): `item is IComponentFormItemProps<Object>`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `Without`\<[`IRenderFormItemProps`](interfaces/IRenderFormItemProps.md), keyof [`IComponentFormItemProps`](interfaces/IComponentFormItemProps.md)\<`T`\>\> & [`IComponentFormItemProps`](interfaces/IComponentFormItemProps.md)\<`object`\> \| `Without`\<[`IComponentFormItemProps`](interfaces/IComponentFormItemProps.md)\<`object`\>, keyof [`IRenderFormItemProps`](interfaces/IRenderFormItemProps.md)\> & [`IRenderFormItemProps`](interfaces/IRenderFormItemProps.md) |

#### Returns

`item is IComponentFormItemProps<Object>`

#### Defined in

[packages/form/src/types/formItem.ts:146](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/form/src/types/formItem.ts#L146)

***

### isRenderActionItemProps()

> **isRenderActionItemProps**(`item`): `item is IRenderActionProps`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`IRenderActionProps`](interfaces/IRenderActionProps.md) \| [`TMapComponentActionProps`](type-aliases/TMapComponentActionProps.md)\<`object`\> \| `Without`\<[`TMapComponentActionProps`](type-aliases/TMapComponentActionProps.md)\<`object`\>, keyof IRenderActionProps\> & [`IRenderActionProps`](interfaces/IRenderActionProps.md) \| Without\<IRenderActionProps, "key" \| "component" \| "componentProps" \| "ifShow" \| "auth"\> & TMapComponentActionProps\<\{\}\> |

#### Returns

`item is IRenderActionProps`

#### Description

判断是否为自定义内容action

#### Defined in

[packages/common/src/components/actions/types/actionItem.ts:140](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/components/actions/types/actionItem.ts#L140)

***

### isRenderFormItemProps()

> **isRenderFormItemProps**(`item`): `item is IRenderFormItemProps`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `Without`\<[`IRenderFormItemProps`](interfaces/IRenderFormItemProps.md), keyof [`IComponentFormItemProps`](interfaces/IComponentFormItemProps.md)\<`T`\>\> & [`IComponentFormItemProps`](interfaces/IComponentFormItemProps.md)\<`object`\> \| `Without`\<[`IComponentFormItemProps`](interfaces/IComponentFormItemProps.md)\<`object`\>, keyof [`IRenderFormItemProps`](interfaces/IRenderFormItemProps.md)\> & [`IRenderFormItemProps`](interfaces/IRenderFormItemProps.md) |

#### Returns

`item is IRenderFormItemProps`

#### Defined in

[packages/form/src/types/formItem.ts:152](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/form/src/types/formItem.ts#L152)

***

### useAsyncState()

> **useAsyncState**\<`T`\>(`initialState`): [`T`, (`newState`) => `Promise`\<`void`\>]

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `initialState` | `T` | 初始状态 |

#### Returns

[`T`, (`newState`) => `Promise`\<`void`\>]

[state, setAsyncState] state 是当前状态，setAsyncState 是更新状态的函数

#### Description

自定义 Hook 用于异步更新状态

#### Defined in

[packages/common/src/hooks/useAsyncState.ts:8](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/hooks/useAsyncState.ts#L8)

***

### useXphExtendCompProps()

> **useXphExtendCompProps**(): `object`

提供给使用方来扩展xph的组件/给组件提供默认属性

#### Returns

`object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `extendComp`? | `IExtendComp` | 扩展的组件 |
| `extendProps`? | [`IXphExtendProps`](interfaces/IXphExtendProps.md) | 扩展的属性 |

#### Defined in

[packages/common/src/hooks/useExtendCompProps.tsx:59](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/hooks/useExtendCompProps.tsx#L59)

***

### useXphForm()

> **useXphForm**(): [[`IRegister`](interfaces/IRegister.md), [`IXphFormActionType`](interfaces/IXphFormActionType.md)]

#### Returns

[[`IRegister`](interfaces/IRegister.md), [`IXphFormActionType`](interfaces/IXphFormActionType.md)]

#### Description

用于注册form的方法
form组件会先于parent组件挂载，挂载完后调用register方法，将methods注册到useForm中给parent使用

#### Defined in

[packages/form/src/hooks/useForm.ts:63](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/form/src/hooks/useForm.ts#L63)

***

### XphActions()

> **XphActions**\<`T`\>(`props`): `Element`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`TXphExtendComponentPropsMap`](type-aliases/TXphExtendComponentPropsMap.md) | `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`IXphActionsProps`](interfaces/IXphActionsProps.md)\<`T`\> |

#### Returns

`Element`

#### Defined in

[packages/common/src/components/actions/actions.tsx:7](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/components/actions/actions.tsx#L7)

***

### XphAuth()

> **XphAuth**(`props`): `null` \| `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`IXphAuthProps`](interfaces/IXphAuthProps.md) |

#### Returns

`null` \| `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\>

#### Defined in

[packages/common/src/components/auth/auth.tsx:5](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/components/auth/auth.tsx#L5)

***

### XphCrudFormDialog()

> **XphCrudFormDialog**\<`T`\>(`props`): `Element`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`TXphExtendComponentPropsMap`](type-aliases/TXphExtendComponentPropsMap.md) | `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `Omit`\<[`IXphDialogProps`](interfaces/IXphDialogProps.md), `"onOk"` \| `"onCancel"`\> & `object` & `object` |

#### Returns

`Element`

#### Defined in

[packages/table/src/components/crudFormDialog/index.tsx:175](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/table/src/components/crudFormDialog/index.tsx#L175)

***

### XphDialog()

> **XphDialog**(`props`): `Element`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`IXphDialogProps`](interfaces/IXphDialogProps.md) & `object` |

#### Returns

`Element`

#### Defined in

[packages/common/src/components/dialog/dialog.tsx:317](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/components/dialog/dialog.tsx#L317)

***

### XphExtendCompPropsProvider()

> **XphExtendCompPropsProvider**(`props`): `Element`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`IXphExtendComponentProps`](interfaces/IXphExtendComponentProps.md) |

#### Returns

`Element`

#### Defined in

[packages/common/src/hooks/useExtendCompProps.tsx:43](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/hooks/useExtendCompProps.tsx#L43)

***

### XphForm()

> **XphForm**\<`T`\>(`props`): `Element`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`TXphExtendComponentPropsMap`](type-aliases/TXphExtendComponentPropsMap.md) | `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`IXphFormProps`](interfaces/IXphFormProps.md)\<`T`\> & `object` |

#### Returns

`Element`

#### Defined in

[packages/form/src/form.tsx:144](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/form/src/form.tsx#L144)

***

### XphPortal()

> **XphPortal**(`__namedParameters`): `null` \| `ReactPortal`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.children` | `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\> |
| `__namedParameters.getPopperContainer` | () => `null` \| `HTMLElement` |

#### Returns

`null` \| `ReactPortal`

#### Defined in

[packages/common/src/components/portal/portal.tsx:5](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/common/src/components/portal/portal.tsx#L5)

***

### XphTable()

> **XphTable**\<`RecordType`, `CellFuncExtendPropsMap`, `ActionsExtendPropsMap`, `ToolbarExtendPropsMap`, `FormExtendPropsMap`\>(`props`): `Element`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RecordType` *extends* [`TXphDataSourceItem`](type-aliases/TXphDataSourceItem.md) | [`TXphDataSourceItem`](type-aliases/TXphDataSourceItem.md) |
| `CellFuncExtendPropsMap` *extends* [`TXphExtendComponentPropsMap`](type-aliases/TXphExtendComponentPropsMap.md) | `object` |
| `ActionsExtendPropsMap` *extends* [`TXphExtendComponentPropsMap`](type-aliases/TXphExtendComponentPropsMap.md) | `object` |
| `ToolbarExtendPropsMap` *extends* [`TXphExtendComponentPropsMap`](type-aliases/TXphExtendComponentPropsMap.md) | `object` |
| `FormExtendPropsMap` *extends* [`TXphExtendComponentPropsMap`](type-aliases/TXphExtendComponentPropsMap.md) | `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`TXphTableProps`](type-aliases/TXphTableProps.md)\<`RecordType`, `CellFuncExtendPropsMap`, `ActionsExtendPropsMap`, `ToolbarExtendPropsMap`, `FormExtendPropsMap`\> & `object` |

#### Returns

`Element`

#### Defined in

[packages/table/src/table.tsx:51](https://github.com/XiaoPiHong/xph-crud/blob/f6ec2e3f4d9b4e39c7c3137bd04fa28a5098129b/packages/table/src/table.tsx#L51)

## Interfaces

- [IApiAutoCompleteProps](interfaces/IApiAutoCompleteProps.md)
- [IApiSelectProps](interfaces/IApiSelectProps.md)
- [IApiTransferProps](interfaces/IApiTransferProps.md)
- [IApiTreeSelectProps](interfaces/IApiTreeSelectProps.md)
- [IAutoUploadProps](interfaces/IAutoUploadProps.md)
- [IBaseActionProps](interfaces/IBaseActionProps.md)
- [IBaseFormItemProps](interfaces/IBaseFormItemProps.md)
- [ICellFuncProps](interfaces/ICellFuncProps.md)
- [IComponentActionProps](interfaces/IComponentActionProps.md)
- [IComponentColumnProps](interfaces/IComponentColumnProps.md)
- [IComponentFormItemProps](interfaces/IComponentFormItemProps.md)
- [ICurCellFuncProps](interfaces/ICurCellFuncProps.md)
- [IFRenderProps](interfaces/IFRenderProps.md)
- [IFunctionToolbarParams](interfaces/IFunctionToolbarParams.md)
- [IGroupColumnProps](interfaces/IGroupColumnProps.md)
- [IOpenActionConfig](interfaces/IOpenActionConfig.md)
- [IRegister](interfaces/IRegister.md)
- [IRenderActionProps](interfaces/IRenderActionProps.md)
- [IRenderColumnProps](interfaces/IRenderColumnProps.md)
- [IRenderFormItemProps](interfaces/IRenderFormItemProps.md)
- [IXphActionsProps](interfaces/IXphActionsProps.md)
- [IXphAuthProps](interfaces/IXphAuthProps.md)
- [IXphCrudFormDialogActionType](interfaces/IXphCrudFormDialogActionType.md)
- [IXphDialogActionType](interfaces/IXphDialogActionType.md)
- [IXphDialogProps](interfaces/IXphDialogProps.md)
- [IXphExtendComponentProps](interfaces/IXphExtendComponentProps.md)
- [IXphExtendProps](interfaces/IXphExtendProps.md)
- [IXphFormActionType](interfaces/IXphFormActionType.md)
- [IXphFormProps](interfaces/IXphFormProps.md)
- [IXphMainProps](interfaces/IXphMainProps.md)

## Type Aliases

- [Recordable](type-aliases/Recordable.md)
- [TApiTableActionType](type-aliases/TApiTableActionType.md)
- [TCellComponentPropsMap](type-aliases/TCellComponentPropsMap.md)
- [TCellProps](type-aliases/TCellProps.md)
- [TComponentPropsMap](type-aliases/TComponentPropsMap.md)
- [TComponentType](type-aliases/TComponentType.md)
- [TFunction](type-aliases/TFunction.md)
- [TMapComponentActionProps](type-aliases/TMapComponentActionProps.md)
- [TSearchFormActionType](type-aliases/TSearchFormActionType.md)
- [TXphActionItemProps](type-aliases/TXphActionItemProps.md)
- [TXphApiTableProps](type-aliases/TXphApiTableProps.md)
- [TXphColumnProps](type-aliases/TXphColumnProps.md)
- [TXphCrudFormDialogProps](type-aliases/TXphCrudFormDialogProps.md)
- [TXphDataSourceItem](type-aliases/TXphDataSourceItem.md)
- [TXphExtendComponentPropsMap](type-aliases/TXphExtendComponentPropsMap.md)
- [TXphFormItemProps](type-aliases/TXphFormItemProps.md)
- [TXphSearchFormProps](type-aliases/TXphSearchFormProps.md)
- [TXphTableActionType](type-aliases/TXphTableActionType.md)
- [TXphTableProps](type-aliases/TXphTableProps.md)
