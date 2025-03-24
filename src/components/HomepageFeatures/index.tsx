import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Diseño de Bibliotecas',
    Svg: require('@site/static/img/undraw_code-typing_laf4.svg').default,
    description: (
      <>
        Aprende a desarrollar bibliotecas de software robustas, modulares y listas para entornos de producción. Nos enfocamos en APIs claras y mantenibles.
      </>
    ),
  },
  {
    title: 'Fundamentos de Calidad',
    Svg: require('@site/static/img/undraw_code-review_ept3.svg').default,
    description: (
      <>
        Aplicamos principios de código limpio, documentación efectiva, y técnicas para garantizar <b>void-safety</b> y evitar errores comunes en el diseño.
      </>
    ),
  },
  {
    title: 'Sistemas de Construcción',
    Svg: require('@site/static/img/undraw_building-blocks_h5jb.svg').default,
    description: (
      <>
        Domina herramientas como Gradle para gestionar <b>dependencias</b>, automatizar tareas y compilar bibliotecas de forma eficiente.
      </>
    ),
  },
  {
    title: 'OOP y Más Allá',
    Svg: require('@site/static/img/undraw_education_3vwh.svg').default,
    description: (
      <>
        Explora técnicas avanzadas de programación orientada a objetos, herencia múltiple y el problema del diamante, además de paradigmas genérico y funcional.
      </>
    ),
  },
  {
    title: 'Testing Avanzado',
    Svg: require('@site/static/img/undraw_science_kut5.svg').default,
    description: (
      <>
        Aprende a validar tus bibliotecas con pruebas <b>basadas en propiedades</b>, datos y comportamientos, usando herramientas modernas como Kotest.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--6', styles.featureItem)}>
      <div className={clsx('text--center', styles.featureImage)}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={clsx('text--center', 'padding-horiz--md', styles.featureContent)}>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
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
