import { useRef } from "react";
const useMinResizeRecord = () => {
  const minResizeRecord = useRef<null | {
    width: number;
    height: number;
  }>(null);
  const setMinResizeRecord = (
    record: {
      width: number;
      height: number;
    } | null
  ) => {
    minResizeRecord.current = record;
  };

  return {
    minResizeRecord,
    setMinResizeRecord,
  };
};
export default useMinResizeRecord;
