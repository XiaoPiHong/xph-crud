# Function: useAsyncState()

> **useAsyncState**\<`T`\>(`initialState`): [`T`, (`newState`) => `Promise`\<`void`\>]

自定义 Hook 用于异步更新状态

## Type Parameters

• **T**

## Parameters

• **initialState**: `T`

初始状态

## Returns

[`T`, (`newState`) => `Promise`\<`void`\>]

[state, setAsyncState] state 是当前状态，setAsyncState 是更新状态的函数

## Defined in

[packages/common/src/hooks/useAsyncState.ts:8](https://github.com/XiaoPiHong/xph-crud/blob/300d288b2cb7d1d481589252292dd1816109678d/packages/common/src/hooks/useAsyncState.ts#L8)
