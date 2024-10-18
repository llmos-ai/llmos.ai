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
        Works out of the box on both x86_64 and ARM64 architectures for a smooth installation experience.
      </>
    ),
  },
  {
    title: 'Unified Infrastructure, LLM & Application Lifecycle Management',
    Img: require('@site/static/img/landing_feature2.png').default,
    description: (
      <>
        Offers a unified interface that makes it easy for both developers and non-developers to manage infrastructure, ML clusters, models, and user workloads.
      </>
    ),
  },
  {
    title: 'Private Deployment, Ideal for Edge & Branch',
    Svg: require('@site/static/img/landing_feature3.svg').default,
    description: (
      <>
        Supports private deployments with optimized resources for running models and workloads in edge and branch networks. It also allows for horizontal scaling to meet future business needs.
      </>
    ),
  },
];

function Feature({title, Svg, Img, description}: FeatureItem) {
  return (
      <div className={clsx('col col--4')}>
          <div className="text--center">
            <div className={styles.featureContainer}>
              {Svg &&
                <div>
                  <Svg className={styles.featureSvg} role="img"/>
                </div>
              }
              {Img &&
                <div>
                  <img src={Img} className={styles.featureSvg} role="img"/>
                </div>
              }
            </div>
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
