import XphTable from "./src/table";
import XphCrudFormDialog from "./src/components/crudFormDialog";

import type {
  TTableProps as TXphTableProps,
  TTableActionType as TXphTableActionType,
  TDataSourceItem as TXphDataSourceItem,
  TColumnProps as TXphColumnProps,
  TApiTableProps as TXphApiTableProps,
  TSearchFormProps as TXphSearchFormProps,
  IMainProps as IXphMainProps,
  TCrudFormDialogProps as TXphCrudFormDialogProps,
} from "./src/types";

export * from "./src/types";

export {
  XphTable,
  TXphTableProps,
  TXphTableActionType,
  TXphDataSourceItem,
  TXphColumnProps,
  TXphApiTableProps,
  TXphSearchFormProps,
  IXphMainProps,
  XphCrudFormDialog,
  TXphCrudFormDialogProps,
};
