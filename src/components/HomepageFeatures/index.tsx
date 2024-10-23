import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from "react";
import {translate} from '@docusaurus/Translate';


type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  Img: string,
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      message: 'Easy to Use',
      id: 'home-feature-install-title'
    }),
    description: translate({
      message: 'Works out of the box on both x86_64 and ARM64 architectures for a smooth installation experience.',
      id: 'home-feature-install-desc'
    }),
    Svg: require('@site/static/img/landing_feature1.svg').default,
    Img: null,
  },
  {
    title: translate({
      message: 'Unified Infrastructure, LLM & Application Lifecycle Management',
      id: 'home-feature-mgmt-title'
    }),
    description: translate({
      message: 'Offers a unified interface that makes it easy for both developers and non-developers to manage infrastructure, ML clusters, models, and user workloads.',
      id: 'home-feature-mgmt-desc'
    }),
    Img: require('@site/static/img/landing_feature2.png').default,
    Svg: null,
  },
  {
    title: translate({
      message: 'Private Deployment, Ideal for Edge & Branch',
      id: 'home-feature-deploy-title'
    }),
    Svg: require('@site/static/img/landing_feature3.svg').default,
    description: translate({
      message: 'Supports private deployments with optimized resources for running models and workloads in edge and branch networks. It also allows for horizontal scaling to meet future business needs.',
      id: 'home-feature-deploy-desc'
    }),
    Img: null,
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
