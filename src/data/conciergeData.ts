export type PageRoute = 'accueil' | 'services' | 'apropos' | 'proprietaires' | 'contact';

export interface ServicePillar {
  title: string;
  items: string[];
}

export interface ServicePackage {
  id: 'pack-complet' | 'pack-digital' | 'pack-relais';
  number: string;
  name: string;
  subtitle: string;
  summary: string;
  image: string;
  imageAlt: string;
  pillars: ServicePillar[];
}

export interface OptionalService {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  context: string;
  quote: string;
}

export interface OwnerStep {
  number: string;
  title: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: "La Petite Conciergerie d'Indya",
  shortName: 'Indya Conciergerie',
  founder: 'Indya',
  tagline: 'Conciergerie de confiance en Haute-Savoie',
  addressLine1: 'Rue des Vignes',
  addressLine2: '74240 Gaillard, Haute-Savoie, France',
  phoneDisplay: '+33 6 86 39 18 85',
  phoneRaw: '+33686391885',
  phoneHref: 'tel:+33686391885',
  email: 'contact@la-petite-conciergerie-indya.com',
  emailHref: 'mailto:contact@la-petite-conciergerie-indya.com',
  socials: {
    instagram: 'https://www.instagram.com/la.petite.conciergerie.indya/',
    facebook: 'https://www.facebook.com/profile.php?id=61574691372113',
    whatsapp: 'https://wa.me/33686391885',
  },
  platforms: ['Airbnb', 'Booking.com'],
} as const;

export const COMMUNES = [
  'Gaillard',
  'Annemasse',
  'Ambilly',
  'Étrembières',
  'Vétraz-Monthoux',
  'Ville-la-Grand',
  'Cranves-Sales',
  'Saint-Cergues',
  'Juvigny',
  'Bonne',
  'Lucinges',
] as const;

export const GALLERY_IMAGES = {
  hero: {
    src: '/src/assets/images/hero_french_apartment_1794639324237.jpg',
    alt: 'Salon lumineux d’un appartement de standing en Haute-Savoie avec vue sur les Alpes',
  },
  keyHandover: {
    src: '/src/assets/images/service_key_handover_1794639325254.jpg',
    alt: 'Clés en laiton et linge de maison préparés pour l’accueil des voyageurs',
  },
  bedroomLinen: {
    src: '/src/assets/images/service_bedroom_linen_1794639325201.jpg',
    alt: 'Chambre d’hôte préparée avec linge en lin lavé et lumière naturelle',
  },
  alpineTerrace: {
    src: '/src/assets/images/about_alpine_terrace_1794639326198.jpg',
    alt: 'Loggia en pierre donnant sur les reliefs de Haute-Savoie',
  },
  ownerDining: {
    src: '/src/assets/images/owner_dining_interior_1794639326445.jpg',
    alt: 'Salle à manger lumineuse avec table en travertin et parquet en chevrons',
  },
} as const;

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Visibilité & réservations maîtrisées',
    description:
      'Une gestion professionnelle génère davantage de visibilité et de réservations sur Airbnb et Booking.com grâce à la mise en valeur de votre logement.',
  },
  {
    number: '02',
    title: 'Tarification dynamique locale',
    description:
      'Nous ajustons constamment les tarifs de votre location en tenant compte de la saisonnalité et de la demande locale sur le secteur Gaillard–Annemasse.',
  },
  {
    number: '03',
    title: 'Tranquillité d’esprit au quotidien',
    description:
      'En confiant votre logement à notre équipe, vous consacrez votre temps à ce qui compte vraiment pour vous, tout en sachant votre bien entre de bonnes mains.',
  },
  {
    number: '04',
    title: 'Accueil en personne à Gaillard',
    description:
      'Basés à Gaillard, nous accueillons chaque voyageur en personne pour une arrivée chaleureuse, une remise des clés conviviale et une présentation du logement.',
  },
] as const;

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'pack-complet',
    number: '01',
    name: 'Pack Complet',
    subtitle: 'Gestion intégrale de A à Z',
    summary:
      'Déléguez totalement votre location et profitez de votre investissement en toute sérénité. Votre logement est géré de A à Z, vos revenus sont optimisés et vous n’avez plus aucune contrainte.',
    image: GALLERY_IMAGES.bedroomLinen.src,
    imageAlt: GALLERY_IMAGES.bedroomLinen.alt,
    pillars: [
      {
        title: 'Création et optimisation de votre annonce',
        items: [
          'Rédaction optimisée Airbnb / Booking.com',
          'Mise en valeur du logement et de ses atouts',
          'Optimisation SEO et amélioration continue',
        ],
      },
      {
        title: 'Tarification dynamique et optimisation des revenus',
        items: [
          'Ajustement intelligent des tarifs selon la demande',
          'Stratégie prix avancée pour maximiser le chiffre d’affaires',
          'Amélioration du taux d’occupation',
        ],
      },
      {
        title: 'Disponibilité et réactivité 7 jours sur 7',
        items: [
          'Gestion complète des messages avant, pendant et après le séjour',
          'Assistance voyageurs et gestion des imprévus',
          'Communication régulière avec le propriétaire',
        ],
      },
      {
        title: 'Gestion des réservations et du calendrier',
        items: [
          'Synchronisation multi-plateformes',
          'Optimisation des périodes creuses',
          'Vérification des profils voyageurs',
        ],
      },
      {
        title: 'Gestion du ménage et de la blanchisserie',
        items: [
          'Organisation et planification des ménages après chaque séjour',
          'Coordination des équipes de nettoyage',
          'Gestion du linge et contrôle de propreté avec remontée des anomalies',
        ],
      },
      {
        title: 'Réapprovisionnement des consommables',
        items: [
          'Suivi des stocks (papier toilette, essuie-tout, savon, café, thé, capsules, produits d’entretien)',
          'Réassort régulier pour un accueil confortable',
          'Signalement des besoins de renouvellement au propriétaire',
        ],
      },
      {
        title: 'Coordination maintenance & interventions',
        items: [
          'Signalement et suivi des incidents techniques',
          'Coordination des prestataires de maintenance',
          'Gestion des petites urgences du quotidien',
        ],
      },
    ],
  },
  {
    id: 'pack-digital',
    number: '02',
    name: 'Pack Digital Avancé',
    subtitle: 'Pilotage commercial & suivi à distance',
    summary:
      'Optimisez la performance de votre location courte durée et offrez une expérience voyageurs irréprochable, tout en conservant la gestion directe de vos prestataires sur place.',
    image: GALLERY_IMAGES.ownerDining.src,
    imageAlt: GALLERY_IMAGES.ownerDining.alt,
    pillars: [
      {
        title: 'Création et optimisation de votre annonce',
        items: [
          'Rédaction optimisée Airbnb / Booking.com',
          'Mise en valeur du logement et de ses atouts',
          'Optimisation SEO et amélioration continue',
        ],
      },
      {
        title: 'Tarification dynamique et optimisation des revenus',
        items: [
          'Ajustement intelligent des tarifs selon la demande',
          'Stratégie prix avancée et amélioration du taux d’occupation',
        ],
      },
      {
        title: 'Disponibilité et réactivité 7 jours sur 7',
        items: [
          'Gestion complète des messages avant, pendant et après le séjour',
          'Assistance voyageurs et gestion des imprévus à distance',
          'Communication régulière avec le propriétaire',
        ],
      },
      {
        title: 'Gestion des réservations et du calendrier',
        items: [
          'Synchronisation multi-plateformes',
          'Optimisation des périodes creuses et vérification des profils voyageurs',
        ],
      },
      {
        title: 'Coordination légère du ménage et de la maintenance',
        items: [
          'Transmission des informations de réservation et consignes aux prestataires',
          'Signalement des besoins d’intervention',
          'Le propriétaire conserve la gestion directe des prestataires (coordination sans exécution)',
        ],
      },
      {
        title: 'Suivi des performances et conseils propriétaires',
        items: [
          'Reporting mensuel clair',
          'Recommandations d’optimisation pour améliorer rentabilité et attractivité',
        ],
      },
    ],
  },
  {
    id: 'pack-relais',
    number: '03',
    name: 'Pack Relais Local',
    subtitle: 'Présence terrain & sécurisation des clés',
    summary:
      'Un forfait mensuel simple incluant la détention sécurisée des clés, la présence locale à Gaillard et alentours, les interventions terrain, la coordination du ménage et des visites ponctuelles entre chaque séjour.',
    image: GALLERY_IMAGES.keyHandover.src,
    imageAlt: GALLERY_IMAGES.keyHandover.alt,
    pillars: [
      {
        title: 'Gestion & sécurisation des clés',
        items: [
          'Conservation sécurisée des clés et gestion des doubles',
          'Intervention rapide en cas de perte ou d’oubli',
        ],
      },
      {
        title: 'Assistance voyageurs sur place',
        items: [
          'Intervention en cas de problème',
          'Relais en cas d’urgence terrain et présence locale rassurante',
        ],
      },
      {
        title: 'Contrôle & relais maintenance',
        items: [
          'Visites de contrôle ponctuelles et vérification rapide si souci signalé',
          'Relais avec artisans ou syndic, petits dépannages simples et signalement des anomalies',
        ],
      },
      {
        title: 'Coordination ménage',
        items: [
          'Ouverture au prestataire ménage',
          'Vérification rapide après nettoyage et remontée des besoins',
        ],
      },
    ],
  },
];

export const OPTIONAL_SERVICES: OptionalService[] = [
  {
    id: 'packs-bienvenue',
    number: '01',
    title: 'Les Packs de Bienvenue',
    description:
      'Une attention particulière préparée avant l’arrivée pour garantir la satisfaction et la fidélisation de vos voyageurs.',
  },
  {
    id: 'formule-romantique',
    number: '02',
    title: 'La Formule Romantique',
    description:
      'Une mise en scène élégante et mémorable qui séduit les voyageurs et renforce l’attractivité de votre hébergement.',
  },
  {
    id: 'boite-cles',
    number: '03',
    title: 'Boîte à clés sécurisée',
    description:
      'Fourniture et installation d’une boîte à clés sécurisée permettant aux voyageurs une arrivée autonome en toute sérénité.',
  },
  {
    id: 'arrivees-tardives',
    number: '04',
    title: 'Arrivées tardives',
    description:
      'Un accueil flexible en dehors des horaires standards pour accueillir vos voyageurs en personne et éviter toute perte de réservation.',
  },
  {
    id: 'gestion-intervenants',
    number: '05',
    title: 'Gestion des intervenants',
    description:
      'Mise en relation avec nos partenaires professionnels pour la maintenance et les réparations, avec compte rendu détaillé de chaque intervention.',
  },
  {
    id: 'home-staging',
    number: '06',
    title: 'Home-staging & aménagement',
    description:
      'Solutions d’aménagement adaptées à la location courte durée : décoration, séparation de vos effets personnels et uniformisation de l’équipement.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'cerina',
    author: 'Cérina C.',
    context: 'Propriétaire à Annemasse',
    quote:
      'Un grand merci à Indya qui a géré mon appartement sur Annemasse d’une main de maître en ce début d’été. J’ai enfin trouvé une solution de proximité et rassurante pour gérer mes locations. Encore merci !',
  },
  {
    id: 'tony',
    author: 'Tony M.',
    context: 'Propriétaire',
    quote:
      'La petite conciergerie d’Indya m’a libéré l’esprit en prenant en charge tous les aspects de la gestion de ma location. Je recommande vivement leurs services professionnels.',
  },
  {
    id: 'manon',
    author: 'Manon A.',
    context: 'Propriétaire à Ambilly',
    quote:
      'J’ai mis mon appartement d’Ambilly en confiage à Indya et j’en suis ravie. Indya est très accueillante et réactive envers les locataires, le ménage est impeccable. Rien à redire !',
  },
  {
    id: 'rodrigue',
    author: 'Rodrigue D.',
    context: 'Voyageur',
    quote:
      'Séjour parfait chez Indya : l’appartement est très propre, bien rangé et conforme à l’annonce. Indya est une hôte exceptionnelle : très sympathique, proactive et professionnelle, avec une vraie dimension humaine dans sa manière d’accueillir.',
  },
];

export const OWNER_JOURNEY: OwnerStep[] = [
  {
    number: '01',
    title: 'Échange initial & visite du bien',
    description:
      'Nous faisons connaissance, visitons votre logement à Gaillard, Annemasse ou dans les communes voisines, et définissons ensemble la formule adaptée à vos objectifs.',
  },
  {
    number: '02',
    title: 'Mise en valeur & création d’annonce',
    description:
      'Rédaction optimisée pour Airbnb et Booking.com, conseils d’aménagement (home-staging si souhaité), préparation des consommables et sécurisation des accès.',
  },
  {
    number: '03',
    title: 'Accueil, calendrier & intendance',
    description:
      'Synchronisation multi-plateformes, tarification dynamique, réponses 7j/7 aux voyageurs, remise des clés en personne, coordination ménage, blanchisserie et maintenance.',
  },
  {
    number: '04',
    title: 'Suivi transparent & sérénité',
    description:
      'Communication régulière avec vous, signalement immédiat en cas de besoin technique et comptes rendus clairs pour suivre l’activité de votre bien en toute confiance.',
  },
];

export const ABOUT_STORY = {
  heading: 'Bonjour, je suis Indya, fondatrice et gérante.',
  paragraphs: [
    'Passionnée par la gestion des biens immobiliers et forte d’un diplôme ainsi que d’une expérience significative dans l’hôtellerie, je mets à profit mon savoir-faire pour vous aider à maximiser vos revenus locatifs tout en offrant à vos locataires une expérience exceptionnelle.',
    'Mon objectif est de vous simplifier la gestion et de vous garantir la satisfaction de vos locataires.',
  ],
  philosophyHeading: 'Ce qui compte pour vous, compte pour nous.',
  philosophyParagraphs: [
    'Chez La Petite Conciergerie d’Indya, nous plaçons la personnalisation au cœur de la gestion de votre propriété. Notre équipe dévouée s’engage à offrir un service de qualité, adapté aux attentes de chaque propriétaire et locataire, afin de rendre chaque séjour inoubliable.',
    'Nous croyons profondément en la proximité, la disponibilité et les échanges authentiques ; l’humain est au cœur de notre métier.',
    'Parce qu’un bon service commence par une vraie relation de confiance, nous privilégions toujours la communication et la présence sur le terrain à Gaillard, Annemasse et dans les communes alentours.',
  ],
};
