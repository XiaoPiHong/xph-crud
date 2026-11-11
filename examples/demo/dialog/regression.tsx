import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  XphDialog,
  XphExtendCompPropsProvider,
  type IXphDialogActionType,
} from "xph-crud";

type MountMode = "body" | "fixed" | "active" | "mixed";
type PageId = "a" | "b";

const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 8,
  marginBottom: 12,
};

const buttonStyle: React.CSSProperties = {
  padding: "6px 10px",
  border: "1px solid #b8c5d6",
  borderRadius: 4,
  background: "white",
  color: "#17324d",
  cursor: "pointer",
};

function TestButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...props} style={{ ...buttonStyle, ...props.style }} />;
}

class ScenarioBoundary extends React.Component<
  { children: React.ReactNode },
  { error: string | null }
> {
  state = { error: null as string | null };

  static getDerivedStateFromError(error: Error) {
    return { error: `${error.name}: ${error.message}` };
  }

  render() {
    if (this.state.error) {
      return (
        <pre data-testid="regression-error" role="alert" style={{ color: "#b42318", whiteSpace: "pre-wrap" }}>
          {this.state.error}
          {"\n请点击上方“重置场景”恢复。"}
        </pre>
      );
    }
    return this.props.children;
  }
}

function DialogContent({
  page,
  number,
  mask,
  mountToBody,
  onOpenSibling,
  onCloseSibling,
  onSwitchPage,
  onDropPage,
}: {
  page: PageId;
  number: number;
  mask: boolean;
  mountToBody: boolean;
  onOpenSibling: () => void;
  onCloseSibling: () => void;
  onSwitchPage: () => void;
  onDropPage: () => void;
}) {
  const [tab, setTab] = useState("info");
  const [value, setValue] = useState(`页面 ${page.toUpperCase()} 的弹窗 ${number}`);
  const [longContent, setLongContent] = useState(true);
  const nestedRef = useRef<IXphDialogActionType>(null);
  const id = `${page}-${number}`;

  return (
    <div data-testid={`dialog-content-${id}`}>
      <p>切换业务页签后，应保留输入值、内部页签、窗口位置和正文滚动位置。</p>
      <div style={rowStyle}>
        <TestButton data-testid={`open-sibling-${id}`} onClick={onOpenSibling}>打开同页另一个弹窗</TestButton>
        <TestButton data-testid={`close-sibling-${id}`} onClick={onCloseSibling}>关闭同页另一个弹窗</TestButton>
        <TestButton data-testid={`open-nested-${id}`} onClick={() => nestedRef.current?.open()}>打开嵌套弹窗</TestButton>
        <TestButton data-testid={`switch-from-${id}`} onClick={onSwitchPage}>切换到另一个业务页签</TestButton>
        <TestButton data-testid={`drop-from-${id}`} onClick={onDropPage}>关闭所属缓存页 {page.toUpperCase()}</TestButton>
      </div>
      <label style={{ display: "block", marginBottom: 12 }}>
        状态保留输入
        <input
          aria-label={`状态保留输入 ${id}`}
          data-testid={`input-${id}`}
          value={value}
          onChange={event => setValue(event.target.value)}
          style={{ display: "block", width: "100%", padding: 6, boxSizing: "border-box" }}
        />
      </label>
      <div role="tablist" aria-label={`弹窗内部页签 ${id}`} style={rowStyle}>
        <TestButton role="tab" aria-selected={tab === "info"} data-testid={`tab-info-${id}`} onClick={() => setTab("info")}>任务参数</TestButton>
        <TestButton role="tab" aria-selected={tab === "details"} data-testid={`tab-details-${id}`} onClick={() => setTab("details")}>节点详情</TestButton>
      </div>
      <div role="tabpanel" data-testid={`panel-${id}`}>
        <strong>{tab === "info" ? "当前显示任务参数" : "当前显示节点详情"}</strong>
        <div style={{ margin: "12px 0" }}>
          <TestButton data-testid={`toggle-length-${id}`} onClick={() => setLongContent(value => !value)}>
            {longContent ? "改为短内容" : "改为长内容"}
          </TestButton>
        </div>
        {Array.from({ length: longContent ? 30 : 2 }, (_, index) => (
          <p key={index} style={{ padding: "8px 0", borderBottom: "1px solid #e5eaf0" }}>
            {page.toUpperCase()} / 弹窗 {number} / {tab === "info" ? "参数" : "节点"} {index + 1}：用于检查内容高度、滚动及缓存页面恢复。
          </p>
        ))}
        <p data-testid={`content-bottom-${id}`}>正文底部：滚动可到达这里。</p>
      </div>
      <XphDialog
        ref={nestedRef}
        title={`页面 ${page.toUpperCase()} · 弹窗 ${number} 的嵌套弹窗`}
        width={380}
        height={240}
        mask={mask}
        {...(mountToBody ? { getPopperContainer: () => document.body } : {})}
        renderFooter={() => <TestButton data-testid={`close-nested-${id}`} onClick={() => nestedRef.current?.close()}>关闭嵌套弹窗</TestButton>}
      >
        <div data-testid={`nested-content-${id}`}>
          <p>嵌套弹窗应位于父弹窗之上；关闭后父弹窗仍能使用。</p>
          <label>嵌套输入 <input aria-label={`嵌套输入 ${id}`} defaultValue="嵌套内容保留" /></label>
          <p><TestButton data-testid={`switch-nested-${id}`} onClick={onSwitchPage}>嵌套弹窗打开时切业务页签</TestButton></p>
        </div>
      </XphDialog>
    </div>
  );
}

function PageContents({
  page,
  mode,
  mask,
  onSwitchPage,
  onDropPage,
}: {
  page: PageId;
  mode: MountMode;
  mask: boolean;
  onSwitchPage: () => void;
  onDropPage: () => void;
}) {
  const firstRef = useRef<IXphDialogActionType>(null);
  const secondRef = useRef<IXphDialogActionType>(null);
  const [openStates, setOpenStates] = useState([false, false]);
  const refs = [firstRef, secondRef];

  return (
    <section data-testid={`cache-page-${page}`} style={{ padding: 16, minHeight: 1000, boxSizing: "border-box" }}>
      <h3 style={{ marginTop: 0 }}>缓存页面 {page.toUpperCase()}</h3>
      <p>遮罩只锁定对应挂载容器的滚动；最后一个带遮罩弹窗关闭后恢复。</p>
      <div style={rowStyle}>
        <TestButton data-testid={`open-${page}-1`} onClick={() => firstRef.current?.open()}>打开 {page.toUpperCase()} 弹窗 1</TestButton>
        <TestButton data-testid={`open-${page}-2`} onClick={() => secondRef.current?.open()}>打开 {page.toUpperCase()} 弹窗 2</TestButton>
        <TestButton data-testid={`open-${page}-both`} onClick={() => { firstRef.current?.open(); secondRef.current?.open(); }}>同时打开两个弹窗</TestButton>
        <TestButton data-testid={`close-${page}-all`} onClick={() => { firstRef.current?.close(); secondRef.current?.close(); }}>关闭本页两个弹窗</TestButton>
      </div>
      <output data-testid={`open-state-${page}`}>弹窗 1：{openStates[0] ? "打开" : "关闭"}；弹窗 2：{openStates[1] ? "打开" : "关闭"}</output>
      <p>浅色区域是当前页的指定容器。切到其他页后，该容器会真实脱离 DOM，返回时重新插入。</p>
      {refs.map((dialogRef, index) => (
        <XphDialog
          key={index}
          ref={dialogRef}
          title={`页面 ${page.toUpperCase()} · 弹窗 ${index + 1}`}
          width={index === 0 ? 560 : 440}
          height={index === 0 ? undefined : 350}
          mask={mask}
          {...(mode === "mixed" && index === 0 ? { getPopperContainer: () => document.body } : {})}
          onOpen={() => setOpenStates(states => states.map((state, i) => i === index ? true : state))}
          onClose={() => setOpenStates(states => states.map((state, i) => i === index ? false : state))}
          renderFooter={() => (
            <div style={{ padding: 8, textAlign: "right" }}>
              <TestButton data-testid={`close-${page}-${index + 1}`} onClick={() => dialogRef.current?.close()}>关闭弹窗 {index + 1}</TestButton>
            </div>
          )}
        >
          <DialogContent
            page={page}
            number={index + 1}
            mask={mask}
            mountToBody={mode === "body" || (mode === "mixed" && index === 0)}
            onOpenSibling={() => refs[1 - index].current?.open()}
            onCloseSibling={() => refs[1 - index].current?.close()}
            onSwitchPage={onSwitchPage}
            onDropPage={onDropPage}
          />
        </XphDialog>
      ))}
      <p style={{ marginTop: 650 }}>缓存页面底部：用于检查容器滚动锁释放。</p>
    </section>
  );
}

/** 与 admin 的 KeepAlive 一样：保留组件，只摘除/重挂每个缓存页的 DOM。 */
function CachedPage({
  page,
  active,
  mode,
  mask,
  host,
  onSwitchPage,
  onDropPage,
}: {
  page: PageId;
  active: boolean;
  mode: MountMode;
  mask: boolean;
  host: React.RefObject<HTMLDivElement>;
  onSwitchPage: () => void;
  onDropPage: () => void;
}) {
  const [container] = useState(() => {
    const element = document.createElement("div");
    element.className = "dialog-regression-cache-page";
    element.dataset.testid = `container-${page}`;
    Object.assign(element.style, { width: "100%", height: "100%", position: "relative", overflow: "auto", background: page === "a" ? "#edf6ff" : "#eefaf1" });
    return element;
  });

  useEffect(() => {
    if (active) host.current?.appendChild(container);
    else if (container.parentElement === host.current) host.current?.removeChild(container);
  }, [active, container, host]);

  useEffect(() => () => { container.remove(); }, [container]);

  const dialogDefaults = mode === "body" ? {} : {
    getPopperContainer: mode === "fixed" || mode === "mixed"
      ? () => container
      : () => host.current?.querySelector<HTMLElement>(".dialog-regression-cache-page") ?? container,
  };

  return createPortal(
    <XphExtendCompPropsProvider value={{ extendProps: { dialog: dialogDefaults } }}>
      <PageContents page={page} mode={mode} mask={mask} onSwitchPage={onSwitchPage} onDropPage={onDropPage} />
    </XphExtendCompPropsProvider>,
    container,
  );
}

function Scenario({ mode, mask }: { mode: MountMode; mask: boolean }) {
  const [active, setActive] = useState<PageId | null>("a");
  const [pages, setPages] = useState<PageId[]>(["a"]);
  const host = useRef<HTMLDivElement>(null);
  const showPage = (page: PageId) => {
    setPages(values => values.includes(page) ? values : [...values, page]);
    setActive(page);
  };
  const dropPage = (page: PageId) => {
    if (!pages.includes(page)) return;
    const remaining = pages.filter(value => value !== page);
    setPages(remaining);
    setActive(current => current === page ? remaining[remaining.length - 1] ?? null : current);
  };

  return (
    <>
      <div role="tablist" aria-label="业务页签" style={rowStyle}>
        <TestButton role="tab" aria-selected={active === "a"} data-testid="page-a" onClick={() => showPage("a")}>页面 A</TestButton>
        <TestButton role="tab" aria-selected={active === "b"} data-testid="page-b" onClick={() => showPage("b")}>页面 B</TestButton>
        <TestButton data-testid="drop-page-a" disabled={!pages.includes("a")} onClick={() => dropPage("a")}>关闭缓存页 A</TestButton>
        <TestButton data-testid="drop-page-b" disabled={!pages.includes("b")} onClick={() => dropPage("b")}>关闭缓存页 B</TestButton>
        <output data-testid="active-page">当前页面：{active?.toUpperCase() ?? "无"}；缓存：{pages.join(", ").toUpperCase() || "无"}</output>
      </div>
      <div ref={host} data-testid="cache-host" style={{ position: "relative", width: "100%", height: 540, border: "1px solid #b8c5d6", overflow: "hidden" }}>
        {active === null ? <p data-testid="empty-cache" style={{ padding: 16 }}>缓存页已全部关闭。点击页面 A 或页面 B 创建新页面。</p> : null}
      </div>
      {pages.map(page => (
        <CachedPage key={page} page={page} active={page === active} mode={mode} mask={mask} host={host} onSwitchPage={() => showPage(active === "a" ? "b" : "a")} onDropPage={() => dropPage(page)} />
      ))}
    </>
  );
}

/** 可以放入库示例，也可以临时接入 admin，验证实际安装的 npm 包。 */
export default function DialogRegression() {
  const [mode, setMode] = useState<MountMode>("active");
  const [mask, setMask] = useState(true);
  const [reset, setReset] = useState(0);

  return (
    <main data-testid="dialog-regression" style={{ maxWidth: 1000, margin: "0 auto", padding: 16, fontFamily: "sans-serif", color: "#17324d" }}>
      <h2 style={{ marginTop: 0 }}>弹窗与缓存页签回归验证</h2>
      <div style={rowStyle}>
        <label>挂载方式：
          <select data-testid="mount-mode" aria-label="挂载方式" value={mode} onChange={event => setMode(event.target.value as MountMode)} style={{ padding: 6, marginLeft: 8 }}>
            <option value="body">body 默认容器</option>
            <option value="fixed">明确指定当前页容器</option>
            <option value="active">全局选择当前活动容器</option>
            <option value="mixed">混合：弹窗 1 body / 弹窗 2 指定容器</option>
          </select>
        </label>
        <label><input type="checkbox" data-testid="mask-toggle" checked={mask} onChange={event => setMask(event.target.checked)} /> 开启遮罩</label>
        <TestButton data-testid="reset-scenario" onClick={() => setReset(value => value + 1)}>重置场景</TestButton>
      </div>
      <p style={{ fontSize: 13 }}>检查：首次打开、切页后首次打开、多个弹窗叠放、关闭一个后操作另一个、最小化/最大化恢复、拖动/缩放后切页、关闭缓存页、正文滚动、内部页签与输入保留。body 弹窗覆盖顶部时，可使用弹窗内的切页按钮。</p>
      <p style={{ fontSize: 13 }}>嵌套弹窗沿用所属父窗的挂载方式和遮罩选项。关闭所属缓存页会同时卸载该页的父窗与嵌套窗；关闭后台缓存页不会切走当前页。</p>
      <ScenarioBoundary key={`${mode}-${reset}`}>
        <Scenario mode={mode} mask={mask} />
      </ScenarioBoundary>
      <p data-testid="fixture-end" style={{ marginTop: 24 }}>回归页底部：关闭遮罩后，确认相应挂载容器的滚动恢复。</p>
    </main>
  );
}
