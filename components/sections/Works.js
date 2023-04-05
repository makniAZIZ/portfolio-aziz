import styles from "../../styles/Works.module.scss";
import Titles from "../Titles";
import Link from "next/link";
import allWorks from "@/json/allWorks.json";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Works() {
  const categories = new Set(allWorks.map((e) => (e = e.categorie)));
  const [activeCategorie, setActiveCategorie] = useState(null);

  return (
    <div id="works" className="container mt-section">
      <Titles value="Dernières créations" />

      <div className="d-flex gap-4 fw-bold">
        <button
          className={`btn btn-sm ${
            null === activeCategorie ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveCategorie(null)}
        >
          Tous
        </button>
        {[...categories].map((categorie, i) => (
          <button
            key={i}
            className={`btn btn-sm ${
              categorie === activeCategorie
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setActiveCategorie(categorie)}
          >
            {categorie}
          </button>
        ))}
      </div>
      <div className="row gy-4 mt-3">
        <AnimatePresence>
          {allWorks
            .filter(
              (work) =>
                work.categorie === activeCategorie || activeCategorie === null
            )
            .map((work, i) => (
              <motion.div
                layout
                key={i}
                className="col-md-4"
                transition={{ type: "spring", duration: 0.2 }}
                exit={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0, opacity: 0 }}
              >
                <div
                  className={`${styles.work} rounded-5 shadow-sm position-relative`}
                  style={{
                    backgroundImage: `url('/realisations/${work.illustration}')`,
                  }}
                >
                  <div className={`${styles.overlay} rounded-5`}></div>
                  <a
                    target="_blank"
                    href={work.slug}
                    className="stretched-link"
                  >
                    <span className="p-2 rounded-bottom-4">
                      {work.categorie}
                    </span>
                    <h3>{work.name}</h3>
                  </a>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Works;
