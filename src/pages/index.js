import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroAxolotl}>🦎</div>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              🚀 Empezar a Aprender
            </Link>
            <Link
              className="button button--primary button--lg"
              to="/blog"
              style={{ marginLeft: "1rem" }}
            >
              📝 Ver Blog
            </Link>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://youtube.com/@axolotlscript"
              target="_blank"
              rel="noopener noreferrer"
            >
              🎥 YouTube
            </a>
            <a
              href="https://tiktok.com/@axolotlscript"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 TikTok
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Aprende programación de forma divertida`}
      description="Canal de YouTube y TikTok donde aprendes programación con la ternura de los axolotls 🦎"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
