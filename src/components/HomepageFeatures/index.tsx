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
                Este curso está enfocado en el desarrollo de bibliotecas de software, introduciendo técnicas avanzadas
                de programación orientada a objetos y explorando paradigmas funcionales, genéricos y orientados a
                lenguajes. A lo largo del curso, se abordarán temas clave como el uso correcto de herencia y
                composición, metodologías rigurosas de testing, manejo eficiente de colecciones, diseño de APIs
                intuitivas y extensibles, sistemas de construcción (build systems), y análisis estático. Además, se
                explorarán soluciones a problemas como el diamante en herencia múltiple y el uso de reflexión para crear
                software adaptado a dominios específicos, todo con el objetivo de escribir bibliotecas reutilizables,
                mantenibles y robustas.
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
