import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

const formExample = `import { XphForm } from "xph-crud";

<XphForm
  items={[
    { name: "name", label: "姓名", component: "Input" },
    { name: "email", label: "邮箱", component: "Input" },
  ]}
/>`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className={`container ${styles.heroLayout}`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{siteConfig.title} / React 组件库</p>
          <Heading as="h1" className={styles.heroTitle}>
            用配置搭建
            <br />
            <span>你的业务界面</span>
          </Heading>
          <p className={styles.heroDescription}>
            {siteConfig.tagline}。将表单、表格、弹窗和操作组合起来，把更多精力留给业务。
          </p>
          <div className={styles.buttons}>
            <Link className={styles.primaryButton} to="/docs/guide/getStarted">
              快速上手 <span aria-hidden="true">→</span>
            </Link>
            <Link className={styles.secondaryButton} to="/docs/comp/table/base">
              查看组件示例
            </Link>
          </div>
          <p className={styles.techStack}>
            React <span aria-hidden="true">/</span> TypeScript
            <span aria-hidden="true">/</span> Ant Design
          </p>
        </div>
        <figure className={styles.heroVisual}>
          <img
            src={useBaseUrl("/img/xph-crud-hero.svg")}
            alt="XphTable 的搜索表单、数据表格和表单弹窗三组配置与界面对应示意"
            width="640"
            height="480"
          />
          <figcaption>搜索表单、数据表格、表单弹窗，按需配置与组合。</figcaption>
        </figure>
      </div>
    </header>
  );
}

function GettingStarted() {
  return (
    <section className={styles.gettingStarted} aria-labelledby="getting-started-title">
      <div className={`container ${styles.startLayout}`}>
        <div className={styles.startCopy}>
          <p className={styles.eyebrow}>从一个字段开始</p>
          <Heading as="h2" id="getting-started-title">
            熟悉的 React，<br />更少的重复代码。
          </Heading>
          <p>
            用 items 描述表单字段，再按需加入校验、布局和联动。
            从一个简单表单出发，逐步组合出你的业务页面。
          </p>
          <Link className={styles.textLink} to="/docs/guide/getStarted">
            查看安装与完整用法 <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.codeExample}>
          <CodeBlock language="tsx" title="一个简单的表单">
            {formExample}
          </CodeBlock>
          <p>使用前请按快速上手文档安装依赖，并引入全局样式。</p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="用配置搭建 React 业务页面"
      description="xph-crud 是基于 React、TypeScript 与 Ant Design 的可配置 CRUD 组件库，提供表单、数据表格、弹窗、操作组和业务组件扩展，让后台页面开发更专注于业务。"
    >
      <main className={styles.homepage}>
        <HomepageHeader />
        <HomepageFeatures />
        <GettingStarted />
      </main>
    </Layout>
  );
}
