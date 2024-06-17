import { TTableProps } from "../types";
import { useState, useRef, useMemo, RefObject } from "react";

export interface IPagination {
  pageSize: number;
  current: number;
  total: number;
  pageSizeOptions: number[];
}

export interface IUsePagination {
  show: boolean;
  model: IPagination | false;
  update: (props: Partial<IPagination>) => void;
}

export default function usePagination(props: TTableProps): {
  pagination: IUsePagination;
  lastPaginationState: RefObject<IPagination | false>;
} {
  const { pagination: propsPagination, autoPagination } = props.table!;

  const [paginationState, setPaginationState] = useState<IPagination | false>(
    propsPagination as IPagination | false
  );

  /** 上一次update的数据，解决state异步问题 */
  const lastPaginationState = useRef<IPagination | false>(
    propsPagination as IPagination | false
  );

  const show = useMemo(() => {
    return (
      (paginationState &&
        (autoPagination === true || autoPagination === void 0)) ||
      false
    );
  }, [paginationState]);

  const pagination = {
    model: paginationState,
    update: (props: Partial<IPagination>) => {
      /** 兼容propsPagination为false的情况 */
      if (!lastPaginationState.current) return;
      const newModel = { ...lastPaginationState.current, ...props };
      setPaginationState(newModel);
      lastPaginationState.current = newModel;
    },
    show,
  };

  return {
    pagination,
    lastPaginationState,
  };
}
