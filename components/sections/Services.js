import styles from "../../styles/Services.module.scss";
import Titles from "../Titles";
import Image from "next/image";
import uxui from "../../public/services/ux-ui.svg";
import development from "../../public/services/development.svg";
import photography from "../../public/services/photography.svg";

function Services() {
  const services = [
    {
      img: uxui,
      title: "UI/UX design",
      description:
        "Apprentissage de l'UX design sur AdobeXD et figma , savoir lire et crée du wireframe jusqu'à la maquette.",
      bgColor: "rgb(108, 108, 229)",
      color: "white",
    },
    {
      img: development,
      title: "Javascript/ReactJS/PHP",
      description:
        "Actuellement les trois langages que j'ai appris durant ma première année d'études, mais ce n'est que le début !",
      bgColor: "rgb(249, 215, 76)",
      color: "white",
    },
    {
      img: photography,
      title: "UI/UX design",
      description:
        "C'est vrai que ce n'est pas une compétence, mais c'est toujours bon à savoir pour les photos d'entreprises.",
      bgColor: "#FF4C60",
      color: "white",
    },
  ];

  return (
    <div id="skills" className="container mt-section">
      <Titles value="Compétences" />
      <div className="row">
        {services.map((service, i) => (
          <div key={i} className="col-md-4 mt-4 mt-md-0">
            <div
              style={{ backgroundColor: service.bgColor }}
              className={`rounded-5 shadow text-center px-4 py-5 text-${service.color}`}
            >
              <Image src={service.img} alt={service.title} />
              <h2 className="fs-4 mt-4">{service.title}</h2>
              <p className="mt-3 mb-0">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-5">
        Vous cherchez votre prochain alternant Développeur Web ?{" "}
        <a href="mailto:exemple@exemple.com">Contactez-moi</a> 👋
      </p>
    </div>
  );
}

export default Services;
