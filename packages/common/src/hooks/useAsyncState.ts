import { useState, useEffect, useRef } from "react";

/**
 * 自定义 Hook 用于异步更新状态
 * @param initialState 初始状态
 * @returns [state, setAsyncState] state 是当前状态，setAsyncState 是更新状态的函数
 */
export const useAsyncState = <T>(
  initialState: T
): [T, (newState: T) => Promise<void>] => {
  const [state, setState] = useState(initialState);
  const resolveRef = useRef<Function | null>(null);

  useEffect(() => {
    if (resolveRef.current) {
      resolveRef.current();
      resolveRef.current = null; // 防止 resolve 被调用多次
    }
  }, [state]);

  const setAsyncState = (newState): Promise<void> => {
    return new Promise((resolve, reject) => {
      // 更新 state 并设置 resolve 函数
      setState((prevState) => {
        // 确保 newState 是正确的值或函数
        const nextState =
          typeof newState === "function" ? newState(prevState) : newState;
        resolveRef.current = resolve;
        return nextState;
      });
    });
  };

  return [state, setAsyncState];
};
