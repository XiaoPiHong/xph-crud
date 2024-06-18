import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "易学易用",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>易学易用</>,
  },
  {
    title: "灵活多变",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>灵活多变</>,
  },
  {
    title: "可配置",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>可配置</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
