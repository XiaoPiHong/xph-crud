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

[packages/common/src/hooks/useAsyncState.ts:8](https://github.com/XiaoPiHong/xph-crud/blob/4f1a30dcf95acc1b0b790144a16f551c2adfa643/packages/common/src/hooks/useAsyncState.ts#L8)
