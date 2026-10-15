import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Restaurant.scss";

const examples = [
  {
    name: "Du Four au Tonneau",
    location: "Restaurant · Pizzeria · Lafrançaise",
    url: "https://dufour-au-tonneau-dev.netlify.app/",
    image: "/restaurants/du-four-au-tonneau.jpg",
    description:
      "Une présentation conviviale où les assiettes occupent le premier plan. La carte, les horaires et la réservation par téléphone sont faciles à retrouver.",
    features: ["Carte en ligne", "Galerie de photos", "Contact & horaires"],
  },
  {
    name: "Restaurant Yana",
    location: "Cuisine française · Castelsarrasin",
    url: "https://restaurant-yana.netlify.app/",
    image: "/restaurants/yana.jpg",
    description:
      "Une ambiance chaleureuse pour présenter une cuisine de saison et les grillades au charbon. Le parcours invite à découvrir les plats, puis à prendre contact.",
    features: [
      "Présentation du restaurant",
      "Carte en ligne",
      "Accès & itinéraire",
    ],
  },
  {
    name: "Le Petit Palais",
    location: "Cuisine de saison · Auvillar",
    url: "https://le-petit-palais-dev.netlify.app/",
    image: "/restaurants/le-petit-palais.jpg",
    description:
      "Une vitrine qui met en valeur le charme du lieu et sa cuisine. Les photos du restaurant, la galerie et les informations pratiques accompagnent la découverte.",
    features: [
      "Mise en valeur du lieu",
      "Galerie de photos",
      "Réservation par téléphone",
    ],
  },
  {
    name: "Le Marmiton",
    location: "Cuisine de saison · Montech",
    url: "https://le-marmiton-dev.netlify.app/",
    image: "/restaurants/marmiton.png",
    description:
      "Une cuisine familiale. Découvrez nos plats préparés avec passion et les ingrédients de saison. La carte est mise en avant pour faciliter le choix des visiteurs, et les informations pratiques sont accessibles rapidement.",
    features: [
      "Mise en valeur du lieu",
      "Galerie de photos",
      "Réservation par téléphone",
    ],
  },
];

const email = "contact@maximeesteves.fr";
const contactUrl = `mailto:${email}?subject=${encodeURIComponent("Projet de site web pour mon restaurant")}&body=${encodeURIComponent("Bonjour Maxime,\n\nJe souhaite échanger au sujet du site web de mon restaurant.\n\nNom du restaurant :\nVille :\nSite actuel (si existant) :\nMon besoin :\n\nÀ bientôt,")}`;

export default function Restaurant() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = "Sites web pour restaurants | Maxime Esteves";
    if (description)
      description.content =
        "Découvrez trois exemples de sites web pour restaurants réalisés par Maxime Esteves. Parlons de la création ou de la refonte du site de votre restaurant.";
    return () => {
      document.title = previousTitle;
      if (description) description.content = previousDescription;
    };
  }, []);

  return (
    <main className="restaurant-page">
      <section className="restaurant-hero section">
        <div className="container">
          <Link to="/" className="restaurant-back">
            ← Retour au portfolio
          </Link>
          <p className="section-eyebrow">
            Création de sites web pour restaurants
          </p>
          <h1>
            Donnez envie de venir.
            <br />
            <span>Avant même de passer à table.</span>
          </h1>
          <p className="restaurant-lead">
            Votre cuisine, votre lieu, votre identité : un site web pour les
            faire découvrir et faciliter le premier contact avec vos futurs
            clients.
          </p>
          <div className="restaurant-actions">
            <a href="#exemples-restaurants" className="btn btn-primary">
              Découvrir les exemples
            </a>
            <a href="#contact-restaurant" className="btn btn-secondary">
              Parlons de votre restaurant
            </a>
          </div>
          <p className="restaurant-signature">
            Maxime Esteves · Développeur web · Montauban, Toulouse et à distance
          </p>
        </div>
      </section>

      <section
        className="section restaurant-examples"
        id="exemples-restaurants"
        aria-labelledby="restaurant-examples-title"
      >
        <div className="container">
          <div className="restaurant-section-intro">
            <p className="section-eyebrow">Trois univers à découvrir</p>
            <h2 id="restaurant-examples-title">
              Imaginez le site de votre restaurant.
            </h2>
            <p>
              Ces sites d’exemple illustrent différentes façons de présenter un
              établissement. Ils sont proposés comme démonstrations, et non
              comme références de clients.
            </p>
          </div>
          <div className="restaurant-showcase">
            {examples.map((example, index) => (
              <article className="restaurant-example" key={example.url}>
                <a
                  href={example.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="restaurant-preview"
                  aria-label={`Découvrir le site d’exemple ${example.name} (nouvel onglet)`}
                >
                  <img
                    src={example.image}
                    alt={`Aperçu de la page d’accueil du site d’exemple ${example.name}`}
                    width="1265"
                    height="712"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <div className="restaurant-example-body">
                  <div className="restaurant-example-meta">
                    <span className="pill">Site d’exemple</span>
                    <span aria-hidden="true">0{index + 1}</span>
                  </div>
                  <p className="restaurant-location">{example.location}</p>
                  <h3>{example.name}</h3>
                  <p>{example.description}</p>
                  <ul className="restaurant-features">
                    {example.features.map((feature) => (
                      <li className="tag" key={feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={example.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    aria-label={`Visiter l’exemple ${example.name} (nouvel onglet)`}
                  >
                    Visiter le site d’exemple <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section restaurant-benefits"
        aria-labelledby="restaurant-benefits-title"
      >
        <div className="container">
          <div className="restaurant-section-intro">
            <p className="section-eyebrow">Pensé pour vos visiteurs</p>
            <h2 id="restaurant-benefits-title">L’essentiel, au bon endroit.</h2>
          </div>
          <div className="restaurant-benefit-grid">
            <div>
              <span className="section-eyebrow">01 · Donner envie</span>
              <h3>Votre univers en images</h3>
              <p>
                Présentez votre salle, votre terrasse et vos assiettes avec une
                identité qui vous ressemble.
              </p>
            </div>
            <div>
              <span className="section-eyebrow">02 · Informer</span>
              <h3>Une carte facile à consulter</h3>
              <p>
                Aidez vos visiteurs à découvrir votre cuisine et à retrouver vos
                horaires, sur ordinateur comme sur mobile.
              </p>
            </div>
            <div>
              <span className="section-eyebrow">03 · Faciliter le contact</span>
              <h3>Un chemin vers votre table</h3>
              <p>
                Mettez en évidence votre téléphone, votre adresse et les
                indications pour venir vous rencontrer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        id="contact-restaurant"
        aria-labelledby="restaurant-contact-title"
      >
        <div className="container restaurant-contact card-surface">
          <div>
            <p className="section-eyebrow">Et pour votre établissement ?</p>
            <h2 id="restaurant-contact-title">Parlons de votre futur site.</h2>
            <p>
              Vous ouvrez un restaurant ou souhaitez moderniser votre site
              actuel ? Présentez-moi votre établissement, vos envies et les
              informations que vous souhaitez mettre en avant.
            </p>
            <p>
              Nous pourrons définir ensemble un projet adapté à vos besoins.
            </p>
          </div>
          <div className="restaurant-contact-actions">
            <a href={contactUrl} className="btn btn-primary">
              Discuter de mon projet
            </a>
            <a href={contactUrl} className="restaurant-email">
              {email}
            </a>
            <span>Montauban · Toulouse · À distance</span>
          </div>
        </div>
      </section>
    </main>
  );
}
