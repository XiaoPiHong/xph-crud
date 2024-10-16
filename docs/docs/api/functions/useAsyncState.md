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

[common/src/hooks/useAsyncState.ts:8](https://github.com/XiaoPiHong/xph-crud/blob/7515b2133578ebc5c9e01d24589011620605cd71/packages/common/src/hooks/useAsyncState.ts#L8)
