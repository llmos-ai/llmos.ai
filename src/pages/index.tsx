import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary landing-bg', styles.heroBanner)}>
        <div className="landing-container container">
            <Heading as="h1" className="hero__title">
                {siteConfig.title}
            </Heading>
            <p className="hero__subtitle landing-subtitle">
              <Translate id="home-title">
                An Open Source, Cloud-native Infrastructure Software designed to simplify the management of AI applications and Large Language Models (LLMs).
              </Translate>
            </p>
            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/quickstart">
                  <Translate id="home-quickstart">Quickstart - 1min ⏱️</Translate>
                </Link>
            </div>
        </div>
    </header>
  );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Open Source, Cloud-Native Infrastructure Software tailored for AI>">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
