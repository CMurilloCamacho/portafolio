
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre mí</h2>
        <p className={styles.text}>
        Soy desarrollador Full Stack con enfoque en desarrollo backend, apasionado por crear soluciones escalables, seguras y bien estructuradas. Disfruto diseñar APIs eficientes, gestionar bases de datos relacionales y aplicar buenas prácticas de arquitectura en cada proyecto.

Trabajo principalmente con Node.js, NestJS y TypeScript, integrando herramientas modernas como JWT y OAuth2 para autenticación, Prisma ORM para la interacción con bases de datos, y Swagger para la documentación clara de mis APIs. Me interesa construir plataformas sólidas que puedan escalar y ser mantenidas fácilmente.

Entre mis proyectos destacan una plataforma de eCommerce y Huellas Unidas, una app enfocada en el rescate y adopción de mascotas, donde implementé pagos con Stripe, gestión de imágenes con Cloudinary, despliegue con Docker y Render, y arquitectura modular con enfoque profesional.

Siempre estoy en búsqueda de nuevos desafíos que me permitan seguir creciendo como backend developer y aportar valor real a través del código.
        </p>
      </div>
    </section>
  );
};

export default About;
