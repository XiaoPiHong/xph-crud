import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";

const Portal = ({
  children,
  getPopperContainer,
}: {
  children: React.ReactElement | ((container: HTMLElement) => React.ReactNode);
  getPopperContainer: () => HTMLElement | null;
}) => {
  const [portalRoot, setPortalRoot] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    let disposed = false;
    let observer: MutationObserver | undefined;
    const resolveContainer = () => {
      if (disposed) return;
      const container = getPopperContainer();
      if (!container) return;
      observer?.disconnect();
      setPortalRoot(container);
    };
    // 缓存页可能由父组件的 effect 插入 DOM。等本次提交的 effects 完成后
    // 再解析一次容器，并把同一个引用交给 Portal 内的布局逻辑。
    queueMicrotask(() => {
      if (disposed) return;
      observer = new MutationObserver(resolveContainer);
      observer.observe(document.documentElement, { childList: true, subtree: true });
      resolveContainer();
    });
    return () => {
      disposed = true;
      observer?.disconnect();
    };
  }, []);
  return portalRoot
    ? ReactDOM.createPortal(
        typeof children === "function" ? children(portalRoot) : children,
        portalRoot
      )
    : null;
};

export default Portal;
