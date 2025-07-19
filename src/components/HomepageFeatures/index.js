import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "🎥 Contenido Visual",
    icon: "📱",
    description: (
      <>
        Aprende programación a través de videos cortos y divertidos en TikTok y
        tutoriales completos en YouTube. ¡La programación nunca fue tan
        adorable!
      </>
    ),
  },
  {
    title: "🦎 Fácil y Divertido",
    icon: "✨",
    description: (
      <>
        Como los axolotls, nuestro enfoque es único y regenerativo. Cada error
        es una oportunidad de crecer y cada proyecto te hace más fuerte.
      </>
    ),
  },
  {
    title: "💻 Proyectos Reales",
    icon: "🚀",
    description: (
      <>
        Desde tu primer "Hola Mundo" hasta aplicaciones completas. Construye
        proyectos que realmente importan con la guía paso a paso de
        Axolotlscript.
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
