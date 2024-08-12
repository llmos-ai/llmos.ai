import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from "react";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  Img: string,
  description: Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Install',
    Svg: require('@site/static/img/landing_feature1.svg').default,
    description: (
      <>
        Install directly on the x86_64 or ARM64 architecture, offering an out-of-the-box user experience.
      </>
    ),
  },
  {
    title: 'Complete Infrastructure & LLM Lifecycle Management',
    Svg: require('@site/static/img/landing_feature2.svg').default,
    description: (
      <>
        Provides a unified interface for both developers and non-developers to manage the LLM infrastructure, ML Cluster, models and workloads.
      </>
    ),
  },
  {
    title: 'Perfect for Edge & Branch',
    Svg: require('@site/static/img/landing_feature3.svg').default,
    description: (
      <>
        Better resource optimization, simplify the deployment of models and workloads to edge and branch networks, but can also scale up horizontally to handle large workloads.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
      <div className={clsx('col col--4')}>
          <div className="text--center">
              <Svg className="feature-svg" role="img"/>
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
