import { memo, useRef, forwardRef, useImperativeHandle } from "react";
import { TSearchFormActionType } from "../../../../types";
import { XphForm as Form, IXphFormActionType } from "xph-crud/form";

const XphForm = memo(Form);

const CacheForm = forwardRef<
  TSearchFormActionType,
  { getBindProps: () => any }
>(({ getBindProps }, ref) => {
  console.log(
    "==============================================================渲染CacheForm"
  );
  const { formProps, setFormLoading } = getBindProps();

  const xphFormRef = useRef<IXphFormActionType>(null);

  useImperativeHandle(ref, () => ({
    /** 扩展了loading方法，让table调用 */
    setFormLoading,
    ...xphFormRef.current!,
  }));

  return <XphForm ref={xphFormRef} {...formProps} />;
});

export default CacheForm;
