import { useRef } from "react";
import { TTableProps, TSearchFormActionType } from "../types";

export default function useSearchForm({ searchForm }: TTableProps) {
  const searchFormRef = useRef<TSearchFormActionType>(null);

  return {
    searchFormRef,
    searchFormProps: searchForm,
  };
}
