import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "📦 Diseño de Bibliotecas",
    Svg: require("@site/static/img/undraw_code-typing_laf4.svg").default,
    description: (
      <>
        Aprende a construir bibliotecas modulares y reutilizables desde cero.
        Diseña APIs claras, mantenibles y centradas en la lógica de negocio.
      </>
    ),
  },
  {
    title: "🧱 Build Systems y Análisis",
    Svg: require("@site/static/img/undraw_building-blocks_h5jb.svg").default,
    description: (
      <>
        Usa herramientas como Gradle para automatizar tareas, generar
        documentación, compilar artefactos y aplicar análisis estático.
      </>
    ),
  },
  {
    title: "🧪 Estrategias de Testing",
    Svg: require("@site/static/img/undraw_science_kut5.svg").default,
    description: (
      <>
        Valida tus bibliotecas con enfoques como <b>BDD</b>, pruebas
        declarativas, con datos y basadas en propiedades, usando Kotest y otras
        herramientas.
      </>
    ),
  },
  {
    title: "🔡 Tipos y Estructuras de Datos",
    Svg: require("@site/static/img/undraw_design-notes_vwa7.svg").default,
    description: (
      <>
        Usa tipos algebraicos, estructuras recursivas, null-safety y tipos
        estructurales para modelar tus dominios de forma segura y expresiva.
      </>
    ),
  },
  {
    title: "🧩 Funciones y Modularidad",
    Svg: require("@site/static/img/undraw_dev-productivity_5wps.svg").default,
    description: (
      <>
        Trabaja con funciones como ciudadanos de primera clase, extensión de
        comportamiento, miembros estáticos y expresiones idiomáticas.
      </>
    ),
  },
  {
    title: "🧬 Jerarquías y Genéricos",
    Svg: require("@site/static/img/undraw_static-assets_di5m.svg").default,
    description: (
      <>
        Diseña jerarquías sólidas con interfaces y subtipado. Aplica
        polimorfismo genérico, contratos de tipo y variancia para lograr máxima
        reutilización.
      </>
    ),
  },
  {
    title: "🎭 Patrones Multiparadigma",
    Svg: require("@site/static/img/undraw_engineering-team_13ax.svg").default,
    description: (
      <>
        Aprende a aplicar patrones como <b>Iterator</b>, <b>Delegation</b>,{" "}
        <b>Functor</b> y <b>Monad</b> en el contexto de bibliotecas modernas.
      </>
    ),
  },
  {
    title: "🌪️ Manejo de Errores y Efectos",
    Svg: require("@site/static/img/undraw_alert_w756.svg").default,
    description: (
      <>
        Controla flujos con excepciones, tipos como <code>Result</code> y{" "}
        <code>Either</code>, y maneja efectos de forma explícita y composable.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--6", styles.featureItem)}>
      <div className={clsx("text--center", styles.featureImage)}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div
        className={clsx(
          "text--center",
          "padding-horiz--md",
          styles.featureContent
        )}
      >
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
        <div className="text--center margin-top--lg">
          <a className="button button--primary button--lg" href="/docs/howto">
            👀 Empezar aquí: ¿Cómo usar este apunte?
          </a>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="text--center margin-top--lg">
          <a className="button button--primary button--lg" href="/docs/howto">
            👀 Empezar aquí: ¿Cómo usar este apunte?
          </a>
        </div>
      </div>
    </section>
  );
}
