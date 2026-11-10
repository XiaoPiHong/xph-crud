import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: string;
  alt: string;
  description: string;
  link: string;
  linkLabel: string;
};

const features: FeatureItem[] = [
  {
    title: "用配置描述表单",
    image: "/img/feature-form.svg",
    alt: "配置姓名字段的 name、label 和 component，在 XphForm 中渲染一个输入框",
    description:
      "围绕字段组织表单，按需配置校验、布局和条件显示。让常见的录入与查询界面，拥有统一的编写方式。",
    link: "/docs/comp/form/base",
    linkLabel: "了解 XphForm",
  },
  {
    title: "把 CRUD 流程串起来",
    image: "/img/feature-table.svg",
    alt: "带搜索、行操作和分页的数据表格",
    description:
      "组合搜索表单、数据表格与新增编辑弹窗，配合分页、自定义列和操作组，减少列表页面的重复搭建。",
    link: "/docs/comp/table/base",
    linkLabel: "了解 XphTable",
  },
  {
    title: "为业务保留扩展空间",
    image: "/img/feature-extend.svg",
    alt: "通过 XphExtendCompPropsProvider 提供 MyInput 映射，再通过 component 在表单中使用",
    description:
      "通过扩展机制接入业务组件，自定义表单项、表格单元格和操作组，在统一配置中复用项目已有的能力。",
    link: "/docs/comp/extends/base",
    linkLabel: "查看组件扩展",
  },
];

function Feature({ title, image, alt, description, link, linkLabel }: FeatureItem) {
  return (
    <article className={styles.feature}>
      <img
        className={styles.featureImage}
        src={useBaseUrl(image)}
        alt={alt}
        width="360"
        height="220"
        loading="lazy"
        decoding="async"
      />
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
      <Link to={link}>
        {linkLabel} <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features} aria-labelledby="features-title">
      <div className="container">
        <div className={styles.sectionHeading}>
          <Heading as="h2" id="features-title">从表单到列表，覆盖常见业务场景</Heading>
          <p>基础组件可以独立使用，也能按需组合成完整的 CRUD 页面。</p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => <Feature key={feature.title} {...feature} />)}
        </div>
      </div>
    </section>
  );
}
