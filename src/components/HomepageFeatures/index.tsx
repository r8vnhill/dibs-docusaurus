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
        title: 'Propósito del Curso',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                El curso "Diseño e Implementación de Bibliotecas de Software" está orientado a estudiantes con conocimientos básicos de OOP y se enfoca en desarrollar bibliotecas de software robustas y mantenibles. Se abordan principios de código limpio, void-safety, y sistemas de construcción para gestionar dependencias y automatizar tareas. El curso profundiza en temas avanzados de OOP como herencia múltiple y el problema del diamante, además de explorar la programación genérica, la funcional y técnicas avanzadas de testing. Los estudiantes aprenderán a crear bibliotecas eficientes, seguras y de calidad, listas para entornos de producción.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--12', styles.featureItem)}>
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
