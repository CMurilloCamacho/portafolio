import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>Contacto</h2>

      <p className={styles.subtitle}>¿Te interesa trabajar conmigo? ¡Hablemos!</p>

      <div className={styles.contactInfo}>
        <a href="mailto: aldrin.edu.bo@gmail.com" className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          aldrin.edu.bo@gmail.com
        </a>
        <a
          href="https://wa.me/+59179053388"
          className={styles.contactItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={styles.icon} />
          WhatsApp
        </a>
        <a
          href="https://github.com/CMurilloCamacho"
          className={styles.contactItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icon} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-aldrin-murillo-camacho-2a9229341/"
          className={styles.contactItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
