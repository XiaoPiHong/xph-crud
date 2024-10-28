import {
  forwardRef,
  useCallback,
  useState,
  RefObject,
  useImperativeHandle,
  useRef,
  memo,
} from "react";
import {
  TSearchFormProps,
  TTableActionType,
  TSearchFormActionType,
} from "../../types";
import { Button, Spin } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import { XphForm as Form, IXphFormActionType } from "xph-crud/form";

const XphForm = memo(Form);

const SearchForm = forwardRef<
  TSearchFormActionType,
  TSearchFormProps & {
    tableRef: RefObject<TTableActionType>;
  }
>((props, ref) => {
  const { renderActions, showSearch = true, tableRef } = props;

  const [loading, setLoading] = useState(false);

  const xphFormRef = useRef<IXphFormActionType>(null);

  const onClickSearch = () => {
    const { reloadData } = tableRef.current!;
    reloadData();
  };

  const onClickReset = () => {
    const { resetData } = tableRef.current!;
    resetData();
  };

  /** 代理一下renderActions（useCallback处理一下防止传递给表单的renderActions引用不一致导致重新渲染表单） */
  const proxyRenderActions = useCallback(() => {
    return (
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ flex: 1, width: 0 }}>{renderActions?.()}</div>
        {showSearch && (
          <div style={{ display: "flex", gap: "8px" }}>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              onClick={onClickSearch}
            >
              搜索
            </Button>
            <Button icon={<ReloadOutlined />} onClick={onClickReset}>
              重置
            </Button>
          </div>
        )}
      </div>
    );
  }, [showSearch, renderActions]);

  /** 这里可以排除一些扩展的属性 */
  const getBindXphFormProps = () => {
    const { renderActions, ...rest } = props;
    const newProps = {
      ...rest,
      renderActions: proxyRenderActions,
    };
    return newProps;
  };

  useImperativeHandle(ref, () => ({
    /** 扩展了loading方法，让table调用 */
    setFormLoading: setLoading,
    ...xphFormRef.current!,
  }));

  return (
    <Spin spinning={loading}>
      <XphForm ref={xphFormRef} {...getBindXphFormProps()} />
    </Spin>
  );
});

export default SearchForm;
