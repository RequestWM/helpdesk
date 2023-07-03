import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil Implantação',
    Svg: require('@site/static/img/svg/integração.svg').default,
    description: (
      <>
        RequestWm foi projetado desde o início para ser facilmente instalado e
        usado para colocar as encomendas do condomínio em funcionamento rapidamente.
      </>
    ),
  },
  {
    title: 'Treinamento',
    Svg: require('@site/static/img/svg/treinamento.svg').default,
    description: (
      <>
        Nós oferecemos toda estrutura e treinamento para permitir que você sua experiência seja produtiva, rápida e objetiva. Vá em frente e mude a forma de lançar as encomendas.
      </>
    ),
  },
  {
    title: 'Suporte',
    Svg: require('@site/static/img/svg/suporte.svg').default,
    description: (
      <>
        Você não está sozinho.Tire suas dúvidas, estaremos aqui sempre para auxilia-los, oferecendo o melhor suporte técnico.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
