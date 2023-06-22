import styles from "../../styles/Experience.module.scss";
import Titles from "../Titles";
import Image from "next/image";

function Experience() {
  const experiences = [
    {
      yearStart: 2022,
      yearEnd: 2025,
      title: " Mediaschool Supdeweb",
      description:
        " Actuellement étudiant pour devenir développeur web  Full-stack .",
      type: "study", // study / job
    },
    {
      yearStart: 2018,
      yearEnd: 2022,
      title: " Campus La Salle Saint Christophe",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
      type: "study", // study / job
    },
    {
      yearStart: 2016,
      yearEnd: 2018,
      title: " Collège Excellencia",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
      type: "study", // study / job
    },
    //
    {
      yearStart: 2022,
      yearEnd: 2023,
      title: "devloppent web",

      description:
        "un stage de formation au développement web a la societe VERMEG au service et de devloppent web  .",
      type: "job", // study / job
    },
    {
      yearStart: 2020,
      yearEnd: 2022,
      title: "Service Commerciale",

      description:
        "un stage de formation au Service Commerciale à la societe ESPRIT ELECTRO   le service commercial encadre la fonction vente dans l'entreprise. Son rôle est de transformer un prospect en client  .",
      type: "job", // study / job
    },
    {
      yearStart: 2018,
      yearEnd: 2020,
      title: "Chef de Magasin ",

      description:
        "un stage de formation au Chef de Magasin  à la societe MMSM     Le responsable d'un magasin est le garant de l'offre de son magasin. Il organise son équipe de vendeurs. Il a l'œil fixé sur le résultat des ventes.",
      type: "job", // study / job
    },
    {
      yearStart: 2017,
      yearEnd: 2018,
      title: "Service de Vente",

      description:
        "un stage de formation au Service de Vente à la societe ETS HABIB MAKNI    Dans chaque entreprise, le service commercial consiste généralement à la recherche des produits, à la réalisation de vente, au choix des politiques marketing, à la distribution des produits .",
      type: "job", // study / job
    },
  ];

  return (
    <div id="experiences" className="container mt-section">
      <Titles value="Expériences" />
      <div className="row mt-5">
        <div className="col-md-6 ">
          <div className="rounded-4 ps-4 pe-5 py-4 bg-white shadow">
            <div className="border-start border-danger">
              <div className="d-flex flex-column gap-5">
                {experiences
                  .slice(0, experiences.length / 2)
                  .map((experience, i) => (
                    <Competence key={i} experience={experience} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="rounded-4 ps-4 pe-5 py-4 bg-white shadow mt-4 mt-md-0">
            <div className="border-start border-danger">
              <div className="d-flex flex-column gap-5">
                {experiences
                  .slice(experiences.length / 2, experiences.length)
                  .map((experience, i) => (
                    <Competence key={i} experience={experience} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Competence({ experience }) {
  return (
    <div className={`ps-5 position-relative ${styles.competence}`}>
      {experience.type === "study" ? (
        <span className={styles.studyIcon}>
          <i className={`${styles.icon} text-danger bi bi-mortarboard`}></i>
        </span>
      ) : (
        ""
      )}
      <small className="text-muted d-block">
        {experience.yearStart} -{" "}
        {experience.yearEnd === null ? "Present" : experience.yearEnd}
      </small>
      <h3 className="mt-2 fs-5 d-inline-block">{experience.title}</h3> -{" "}
      <small>{experience.organization}</small>
      <p className="m-0">{experience.description}</p>
    </div>
  );
}

export default Experience;
