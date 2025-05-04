import styles from './Technologies.module.css';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs
} from 'react-icons/si';

const techData = [
  {
    name: 'HTML5',
    icon: <SiHtml5 className={`${styles.icon} ${styles.html}`} />,
    description: 'Estructuro interfaces web semánticas y accesibles.'
  },
  {
    name: 'CSS3',
    icon: <SiCss3 className={`${styles.icon} ${styles.css}`} />,
    description: 'Maqueto diseños responsivos y modernos con Flexbox y Grid.'
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className={`${styles.icon} ${styles.js}`} />,
    description: 'Agrego interactividad y lógica a sitios web dinámicos.'
  },
  {
    name: 'React',
    icon: <SiReact className={`${styles.icon} ${styles.react}`} />,
    description: 'Construyo interfaces reactivas y componentes reutilizables.'
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs className={`${styles.icon} ${styles.node}`} />,
    description: 'Creo servidores backend eficientes con Express.'
  }
];

export const Technologies = () => {
  return (
    <section className={styles.techSection}>
      <h2 className={styles.title}>Tecnologías</h2>
      <div className={styles.techGrid}>
        {techData.map((tech, index) => (
          <div key={index} className={styles.card}>
            {tech.icon}
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Technologies