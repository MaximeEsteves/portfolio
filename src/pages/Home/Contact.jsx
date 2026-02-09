import "./Contact.scss";
import SectionHeader from "./SectionHeader";
import Reseaux from "./Reseaux";

const contactDescription =
  "💪 Ma curiosité et mon engagement dans chacune des missions que j'ai menées dans ma carrière et mes réalisations m’ont motivé aujourd'hui à me lancer dans cette reconversion professionnelle.<br><br>Je suis disponible dans la zone de 📍 Montauban (82) 📍 Toulouse (31), mais également prêt à travailler en 🖥️ 100 % distanciel ! ☺️";

export default function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container contact-card card-surface">
        <div className="contact-content">
          <div className="contact-intro">
            <SectionHeader title="Contact" description={contactDescription} />
            <div className="location-card">
              <p className="location-label">Zone géographique</p>
              <p className="location-value">Montauban (82)</p>
              <p className="location-value">Toulouse (31)</p>
              <p className="location-remote">Disponible en 100 % distanciel</p>
            </div>
          </div>
          <Reseaux />
        </div>
      </div>
    </section>
  );
}
