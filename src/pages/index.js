import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Syntax",
    imageUrl: "img/revenue__monochromatic.svg",
    link: "/docs/syntax/",
    description: (
      <>
        The root of Costflow. Costflow Syntax is the rules that{" "}
        <strong>convert one line text into plain text accounting format</strong>{" "}
        like Beancount, etc.
      </>
    ),
  },
  {
    title: "Parser",
    imageUrl: "img/cpu_monochromatic.svg",
    link: "/docs/parser/",
    description: (
      <>Official JavaScript parser that makes Costflow Syntax a reality.</>
    ),
  },
  {
    title: "Self-Hosted Costflow Hub",
    badge: "NEW",
    imageUrl: "img/money_transfer__monochromatic.svg",
    link: "https://hub.costflow.io/",
    description: (
      <>
        With Self-Hosted Costflow Hub and your own <code>Telegram</code> bot,
        you can keep accounting anytime, anywhere.
      </>
    ),
  },
  {
    title: "Costflow CLI",
    imageUrl: "img/world_wide_web_monochromatic.svg",
    link: "/docs/cli/",
    description: <>Costflow's official command line tool.</>,
  },
  {
    title: "Playground",
    imageUrl: "img/finance_analytics__monochromatic.svg",
    link: "https://playground.costflow.io/",
    description: <>Try Costflow Syntax in your browser.</>,
  },
  {
    title: "VSCode Extension",
    imageUrl: "img/online_report_monochromatic.svg",
    description: <>Coming soon.</>,
  },
];

function Feature({ imageUrl, title, badge, link, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>
        {link ? (
          <Link className={clsx(styles.productLink)} to={link}>
            {title}
          </Link>
        ) : (
          <span className={clsx(styles.productLink)}>{title}</span>
        )}
        {badge && (
          <span className={clsx("badge badge--danger", styles.productBadge)}>
            {badge}
          </span>
        )}
      </h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Costflow is a series of products for making plain text accounting easier, including syntax, parser, CLI, playground and self-hosted costflow hub, which let you keep accounting anytime, anywhere."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
