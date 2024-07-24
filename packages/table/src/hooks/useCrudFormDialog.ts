import { useRef } from "react";
import { TTableProps, ICrudFormDialogActionType } from "../types";

const useCrudFormDialog = ({ crudFormDialog }: TTableProps) => {
  const crudFormDialogRef = useRef<ICrudFormDialogActionType>(null);
  return {
    crudFormDialogRef,
    crudFormProps: crudFormDialog,
  };
};

export default useCrudFormDialog;
