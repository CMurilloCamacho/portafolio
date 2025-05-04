import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Proyectos</h2>
        <div className={styles.projectList}>
          {/* Proyecto 1 */}

          <a
            href="https://vite-project-two-ecru.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div>
              <h3 className={styles.cardTitle}>Gestion de Turnos</h3>
              <p className={styles.cardDesc}>
                Una aplicación donde se pueden reservar y eliminar turnos en un
                dentista
              </p>
            </div>
          </a>

          {/* Proyecto 2 */}
          <a
            href="https://ecommerce-m4-5b3j.onrender.com/api"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div>
              <h3 className={styles.cardTitle}>E-commerce</h3>
              <p className={styles.cardDesc}>
                Aplicación web desarrollada con enfoque backend para la gestión
                completa de una tienda online.
              </p>
            </div>
          </a>

          {/* Proyecto 3 */}
          <a
            href="https://huellasunidas.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div >
              <h3 className={styles.cardTitle}>Huellas Unidas</h3>
              <p className={styles.cardDesc}>
                Aplicación web Full Stack diseñada para facilitar la adopción
                responsable y el rescate de mascotas.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
