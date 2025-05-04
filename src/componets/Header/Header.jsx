import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import imgAldrin from "../../assets/aldrin.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mi Portafolio</h1>
      <div className={styles.navBarRow}>
        <NavLink to = "/contact">
          <img src={imgAldrin} alt="Foto Aldrin" className={styles.avatar} />
        </NavLink>
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Sobre mi
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Proyectos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/technologies"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Tecnologías
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
