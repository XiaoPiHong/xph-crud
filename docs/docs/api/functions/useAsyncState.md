# Function: useAsyncState()

> **useAsyncState**\<`T`\>(`initialState`): [`T`, (`newState`) => `Promise`\<`void`\>]

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `initialState` | `T` | 初始状态 |

## Returns

[`T`, (`newState`) => `Promise`\<`void`\>]

[state, setAsyncState] state 是当前状态，setAsyncState 是更新状态的函数

## Description

自定义 Hook 用于异步更新状态

## Defined in

[packages/common/src/hooks/useAsyncState.ts:8](https://github.com/XiaoPiHong/xph-crud/blob/df4afa60d65704448cd1781ed35689440e3aa7c3/packages/common/src/hooks/useAsyncState.ts#L8)
