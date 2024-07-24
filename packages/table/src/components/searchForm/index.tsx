import { forwardRef, useCallback, useState, RefObject } from "react";
import {
  TSearchFormProps,
  TTableActionType,
  TSearchFormActionType,
} from "../../types";
import CacheForm from "./components/cacheForm";
import { Button, Spin } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";

const SearchForm = forwardRef<
  TSearchFormActionType,
  TSearchFormProps & {
    tableRef: RefObject<TTableActionType>;
  }
>((props, ref) => {
  const { renderActions, showSearch, tableRef } = props;

  const [loading, setLoading] = useState(false);

  /** 这里可以排除一些扩展的属性 */
  const getBindProps = () => {
    const { renderActions, ...rest } = props;
    return rest;
  };

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

  const getBindCacheFormProps = () => {
    return {
      setFormLoading: setLoading,

      formProps: {
        ...getBindProps(),
        renderActions: proxyRenderActions,
      },
    };
  };

  return (
    <Spin spinning={loading}>
      {/** 只要该文件触发渲染，都会触发CacheForm渲染（但是CacheForm内部的XphForm是根据其props浅比较，基本数据类型不一致或者引用不一致时才发生渲染） */}
      <CacheForm ref={ref} getBindProps={getBindCacheFormProps} />
    </Spin>
  );
});

export default SearchForm;
