import {
  ABOUT_STORY,
  BUSINESS_INFO,
  GALLERY_IMAGES,
  OPTIONAL_SERVICES,
  OWNER_JOURNEY,
  SERVICE_PACKAGES,
  TESTIMONIALS,
  WHY_CHOOSE_US,
  type OptionalService,
  type OwnerStep,
  type PageRoute,
  type ServicePackage,
  type Testimonial,
} from './conciergeData';
import type { Locale } from '../utils/contactValidation';

export interface LocalizedSiteContent {
  pageTitles: Record<PageRoute, string>;
  nav: {
    items: { id: PageRoute; label: string }[];
    cta: string;
    activePageLabel: string;
    mobileCta: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    languageGroupLabel: string;
  };
  home: {
    heroKicker: string;
    heroTitle: string;
    heroSubtitle: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    heroCardKicker: string;
    heroCardTitle: string;
    heroCardBullets: string[];
    introKicker: string;
    introTitle: string;
    introParagraphs: string[];
    introAboutCta: string;
    introOwnersCta: string;
    servicesKicker: string;
    servicesTitle: string;
    servicesCta: string;
    packDetailsCta: string;
    packQuoteCta: string;
    whyKicker: string;
    whyTitle: string;
    whyLead: string;
    whyItems: { number: string; title: string; description: string }[];
    galleryKicker: string;
    galleryTitle: string;
    galleryCards: { title: string; subtitle: string }[];
    testimonialsKicker: string;
    testimonialsTitle: string;
    contactKicker: string;
    contactTitle: string;
    contactLead: string;
    contactCta: string;
  };
  services: {
    kicker: string;
    title: string;
    lead: string;
    filterAll: string;
    packages: ServicePackage[];
    customQuoteNote: string;
    quoteCtaPrefix: string;
    optionalKicker: string;
    optionalTitle: string;
    optionalLead: string;
    optionalItems: OptionalService[];
    optionalCta: string;
  };
  about: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    hospitalityKicker: string;
    hospitalityText: string;
    philosophyKicker: string;
    philosophyHeading: string;
    philosophyParagraphs: string[];
    territoryKicker: string;
    territoryTitle: string;
    territoryLead: string;
    territoryCta: string;
    communesHeading: string;
    communesCountSuffix: string;
  };
  owners: {
    kicker: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    journeyKicker: string;
    journeyTitle: string;
    journeySteps: OwnerStep[];
    matrixKicker: string;
    matrixTitle: string;
    matrixHeaderFeature: string;
    matrixHeaders: [string, string, string];
    matrixRows: { feature: string; complet: boolean; digital: boolean; relais: boolean }[];
    includedLabel: string;
    notIncludedLabel: string;
    choosePackComplet: string;
    packDigitalLabel: string;
    packRelaisLabel: string;
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    directTitle: string;
    directSubtitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    socialLabel: string;
    mapTitle: string;
    mapSubtitle: string;
    mapFooterLabel: string;
    mapOpenLink: string;
    formTitle: string;
    formRequiredNote: string;
    firstNameLabel: string;
    firstNamePlaceholder: string;
    lastNameLabel: string;
    lastNamePlaceholder: string;
    emailLabelField: string;
    emailPlaceholder: string;
    phoneLabelField: string;
    phonePlaceholder: string;
    packLabel: string;
    packPlaceholder: string;
    communeLabel: string;
    communePlaceholder: string;
    otherCommuneOption: string;
    otherRequestOption: string;
    messageLabel: string;
    messagePlaceholder: string;
    consentBeforeLink: string;
    consentLinkText: string;
    submittingLabel: string;
    submitLabel: string;
    directCallPrefix: string;
    successKicker: string;
    successTitlePrefix: string;
    successTitleSuffix: string;
    successRefLabel: string;
    successPackLabel: string;
    successCommuneLabel: string;
    successWebhookNote: string;
    successLocalNote: string;
    successMailtoCta: string;
    successResetCta: string;
    genericError: string;
    networkError: string;
  };
  testimonials: Testimonial[];
  footer: {
    description: string;
    navigationHeading: string;
    navLinks: { id: PageRoute; label: string }[];
    areaHeading: string;
    areaNote: string;
    socialHeading: string;
    legalNotices: string;
    privacyPolicy: string;
  };
  legal: {
    mentionsTitle: string;
    privacyTitle: string;
    closeLabel: string;
    mentionsTab: string;
    privacyTab: string;
    mentionsParagraphs: {
      editorLabel: string;
      managedBy: string;
      addressLabel: string;
      contactLabel: string;
      activityLabel: string;
      activityText: string;
    };
    privacyParagraphs: string[];
  };
}

const FR_CONTENT: LocalizedSiteContent = {
  pageTitles: {
    accueil: `${BUSINESS_INFO.name} – Conciergerie Gaillard & Haute-Savoie`,
    services: `Nos Services – ${BUSINESS_INFO.name}`,
    apropos: `À propos d’Indya – ${BUSINESS_INFO.name}`,
    proprietaires: `Espace Propriétaires – ${BUSINESS_INFO.name}`,
    contact: `Contact & Devis – ${BUSINESS_INFO.name}`,
  },
  nav: {
    items: [
      { id: 'accueil', label: 'Accueil' },
      { id: 'services', label: 'Services' },
      { id: 'apropos', label: 'À propos' },
      { id: 'proprietaires', label: 'Propriétaires' },
      { id: 'contact', label: 'Contact' },
    ],
    cta: 'Nous contacter',
    activePageLabel: 'Page active',
    mobileCta: 'Demander un accompagnement',
    openMenuLabel: 'Ouvrir le menu de navigation',
    closeMenuLabel: 'Fermer le menu de navigation',
    languageGroupLabel: 'Choisir la langue',
  },
  home: {
    heroKicker: 'Gaillard · Annemasse · Haute-Savoie',
    heroTitle: 'Votre bien mérite une attention particulière.',
    heroSubtitle:
      'Une conciergerie attentive et professionnelle pour valoriser votre logement et offrir une expérience inoubliable à vos voyageurs sur Airbnb et Booking.com.',
    heroPrimaryCta: 'Découvrir nos services',
    heroSecondaryCta: 'Nous contacter',
    heroCardKicker: 'Conciergerie de proximité',
    heroCardTitle: 'Gestion locative courte durée & accueil en personne',
    heroCardBullets: [
      'Airbnb & Booking.com',
      'Remise des clés en personne à Gaillard & alentours',
      'Disponibilité voyageurs 7 jours sur 7',
    ],
    introKicker: 'Proximité & confiance',
    introTitle: 'Une conciergerie de proximité à Gaillard et Annemasse',
    introParagraphs: [
      `Spécialisée en location courte durée sur Airbnb et Booking.com en Haute-Savoie, ${BUSINESS_INFO.name} propose une gestion complète de la location de votre bien : communication avec les voyageurs, accueil sur place, ménage, coordination de la maintenance et suivi attentif.`,
      'Notre approche personnalisée s’adapte à vos objectifs de propriétaire tout en offrant à vos voyageurs un séjour fluide, soigné et chaleureux.',
    ],
    introAboutCta: 'À propos d’Indya',
    introOwnersCta: 'Parcours propriétaires',
    servicesKicker: 'Nos formules de gestion',
    servicesTitle: 'Des solutions adaptées à votre degré de délégation',
    servicesCta: 'Voir toutes nos prestations',
    packDetailsCta: 'Détails du pack',
    packQuoteCta: 'Demander un devis',
    whyKicker: 'Pourquoi nous confier votre bien ?',
    whyTitle: 'Ce qui compte pour vous, compte pour nous.',
    whyLead:
      'Votre logement est précieux, et vos voyageurs le sont tout autant : ils font vivre votre bien, vous permettent de le rentabiliser et y créent des souvenirs. Nous veillons sur cet équilibre chaque jour.',
    whyItems: WHY_CHOOSE_US.map((item) => ({ ...item })),
    galleryKicker: 'Exigence hôtelière',
    galleryTitle: 'Des intérieurs préparés avec soin avant chaque arrivée',
    galleryCards: [
      {
        title: 'Préparation du linge & contrôle qualité',
        subtitle: 'Ménage suivi et linge soigné entre chaque séjour.',
      },
      {
        title: 'Mise en valeur du logement',
        subtitle: 'Annonces soignées et conseils d’aménagement.',
      },
    ],
    testimonialsKicker: 'Témoignages vérifiés',
    testimonialsTitle: 'Ce que disent nos propriétaires et voyageurs',
    contactKicker: 'Parlons de votre logement',
    contactTitle: 'Confiez la gestion de votre bien en toute sérénité',
    contactLead:
      'Échangeons sur votre appartement ou maison à Gaillard, Annemasse et alentours pour définir la formule la plus adaptée.',
    contactCta: 'Prendre contact',
  },
  services: {
    kicker: 'Nos prestations · Gaillard & Annemasse',
    title: 'Une gestion sur mesure, de l’annonce en ligne à l’accueil sur place.',
    lead: 'Que vous souhaitiez déléguer l’intégralité de votre location courte durée ou vous appuyer sur une présence locale de confiance en Haute-Savoie, nos formules répondent à vos attentes.',
    filterAll: 'Toutes les formules',
    packages: SERVICE_PACKAGES,
    customQuoteNote: 'Étude personnalisée selon votre logement',
    quoteCtaPrefix: 'Demander un devis',
    optionalKicker: 'Prestations complémentaires',
    optionalTitle: 'Services à la carte pour enrichir votre accueil',
    optionalLead:
      'Des options ciblées pour valoriser votre hébergement et offrir un confort supplémentaire à vos voyageurs.',
    optionalItems: OPTIONAL_SERVICES,
    optionalCta: 'Se renseigner sur cette option',
  },
  about: {
    kicker: `À propos · ${BUSINESS_INFO.name}`,
    heading: ABOUT_STORY.heading,
    paragraphs: ABOUT_STORY.paragraphs,
    hospitalityKicker: 'Savoir-faire hôtelier',
    hospitalityText:
      'Diplôme et expérience significative dans l’hôtellerie, mis au service des propriétaires et des voyageurs de Gaillard, Annemasse et des communes voisines.',
    philosophyKicker: 'Notre philosophie',
    philosophyHeading: ABOUT_STORY.philosophyHeading,
    philosophyParagraphs: ABOUT_STORY.philosophyParagraphs,
    territoryKicker: 'Ancrage territorial',
    territoryTitle: 'Une présence réelle sur le terrain en Haute-Savoie',
    territoryLead:
      'Installée rue des Vignes à Gaillard, notre conciergerie intervient rapidement dans toute l’agglomération annemassienne et les communes limitrophes.',
    territoryCta: 'Rencontrer Indya',
    communesHeading: 'Communes desservies',
    communesCountSuffix: 'secteurs principaux',
  },
  owners: {
    kicker: 'Espace propriétaires',
    title: 'Valorisez votre bien tout en libérant votre emploi du temps.',
    lead: 'Gérer une location courte durée exige une disponibilité de chaque instant : réponses rapides, ajustement des tarifs, remise des clés, ménage impeccable et suivi technique. Nous prenons le relais avec rigueur et proximité.',
    primaryCta: 'Estimer votre projet',
    secondaryCta: 'Comparer les packs',
    journeyKicker: 'Votre parcours propriétaire',
    journeyTitle: 'Un accompagnement clair, étape par étape',
    journeySteps: OWNER_JOURNEY,
    matrixKicker: 'Tableau comparatif',
    matrixTitle: 'Choisir la formule adaptée à votre bien',
    matrixHeaderFeature: 'Prestation incluse',
    matrixHeaders: ['Pack Complet', 'Pack Digital Avancé', 'Pack Relais Local'],
    matrixRows: [
      {
        feature: 'Création & optimisation d’annonce (Airbnb / Booking.com)',
        complet: true,
        digital: true,
        relais: false,
      },
      {
        feature: 'Tarification dynamique & stratégie de revenus',
        complet: true,
        digital: true,
        relais: false,
      },
      {
        feature: 'Communication & assistance voyageurs 7j/7',
        complet: true,
        digital: true,
        relais: true,
      },
      {
        feature: 'Gestion du calendrier & synchronisation multi-plateformes',
        complet: true,
        digital: true,
        relais: false,
      },
      {
        feature: 'Accueil en personne & gestion sécurisée des clés',
        complet: true,
        digital: false,
        relais: true,
      },
      {
        feature: 'Gestion du ménage, blanchisserie & contrôle propreté',
        complet: true,
        digital: false,
        relais: true,
      },
      {
        feature: 'Réapprovisionnement des consommables',
        complet: true,
        digital: false,
        relais: false,
      },
      {
        feature: 'Relais terrain & coordination maintenance',
        complet: true,
        digital: false,
        relais: true,
      },
    ],
    includedLabel: 'Inclus',
    notIncludedLabel: 'Non inclus',
    choosePackComplet: 'Choisir le Pack Complet',
    packDigitalLabel: 'Pack Digital Avancé',
    packRelaisLabel: 'Pack Relais Local',
  },
  contact: {
    kicker: 'Contact · Gaillard, Haute-Savoie',
    title: 'Parlons de votre projet immobilier et locatif.',
    lead: 'Nous sommes à votre disposition pour répondre à toutes vos demandes et vous offrir des conseils personnalisés.',
    directTitle: 'Coordonnées directes',
    directSubtitle: `Échange direct avec ${BUSINESS_INFO.founder}, fondatrice et gérante.`,
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    emailLabel: 'E-mail',
    socialLabel: 'Réseaux & messagerie',
    mapTitle: 'Secteur Gaillard & Annemasse',
    mapSubtitle: 'Intervention locale à la frontière de Genève',
    mapFooterLabel: '74240 Gaillard · Haute-Savoie',
    mapOpenLink: 'Voir sur la carte',
    formTitle: 'Formulaire de contact',
    formRequiredNote: 'Les champs marqués d’un astérisque (*) sont obligatoires.',
    firstNameLabel: 'Prénom *',
    firstNamePlaceholder: 'Votre prénom',
    lastNameLabel: 'Nom *',
    lastNamePlaceholder: 'Votre nom',
    emailLabelField: 'E-mail *',
    emailPlaceholder: 'nom@exemple.fr',
    phoneLabelField: 'Téléphone',
    phonePlaceholder: '+33 6 00 00 00 00',
    packLabel: 'Formule souhaitée',
    packPlaceholder: 'Sélectionner une prestation',
    communeLabel: 'Commune du logement',
    communePlaceholder: 'Choisir une commune',
    otherCommuneOption: 'Autre commune en Haute-Savoie',
    otherRequestOption: 'Autre demande / renseignement',
    messageLabel: 'Écrivez votre message *',
    messagePlaceholder: 'Type de bien, localisation, disponibilité souhaitée ou questions…',
    consentBeforeLink:
      'En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées dans le cadre de la présente demande et de la relation professionnelle qui pourrait en découler. Pour connaître et exercer vos droits, veuillez consulter notre ',
    consentLinkText: 'politique de confidentialité',
    submittingLabel: 'Envoi en cours…',
    submitLabel: 'Envoyer la demande',
    directCallPrefix: 'Réponse directe ou par téléphone au',
    successKicker: 'Demande enregistrée',
    successTitlePrefix: 'Merci',
    successTitleSuffix: ', votre message a bien été transmis.',
    successRefLabel: 'Référence :',
    successPackLabel: 'Formule / Prestation :',
    successCommuneLabel: 'Commune :',
    successWebhookNote: 'Votre demande a été enregistrée et relayée vers la messagerie configurée.',
    successLocalNote:
      'Votre demande est enregistrée sur le serveur. Pour un envoi e-mail automatique externe, renseignez CONTACT_WEBHOOK_URL côté serveur, ou cliquez ci-dessous pour ouvrir directement votre messagerie.',
    successMailtoCta: 'Envoyer aussi par e-mail direct',
    successResetCta: 'Envoyer un autre message',
    genericError:
      'Une erreur est survenue lors de l’envoi. Vous pouvez nous joindre par téléphone ou e-mail.',
    networkError:
      'Connexion au serveur momentanément indisponible. Vous pouvez contacter directement Indya par e-mail ou téléphone.',
  },
  testimonials: TESTIMONIALS,
  footer: {
    description:
      'Conciergerie locale dédiée à la location courte durée sur Airbnb et Booking.com en Haute-Savoie.',
    navigationHeading: 'Navigation',
    navLinks: [
      { id: 'accueil', label: 'Accueil' },
      { id: 'services', label: 'Nos services' },
      { id: 'apropos', label: 'À propos d’Indya' },
      { id: 'proprietaires', label: 'Espace propriétaires' },
      { id: 'contact', label: 'Contact & devis' },
    ],
    areaHeading: 'Secteur d’intervention',
    areaNote: 'Présence de proximité en Haute-Savoie, à la frontière genevoise.',
    socialHeading: 'Suivre l’actualité',
    legalNotices: 'Mentions légales',
    privacyPolicy: 'Politique de confidentialité',
  },
  legal: {
    mentionsTitle: 'Mentions légales',
    privacyTitle: 'Politique de confidentialité',
    closeLabel: 'Fermer la fenêtre',
    mentionsTab: 'Mentions légales',
    privacyTab: 'Confidentialité & RGPD',
    mentionsParagraphs: {
      editorLabel: 'Éditeur du site :',
      managedBy: `gérée par ${BUSINESS_INFO.founder}.`,
      addressLabel: 'Adresse :',
      contactLabel: 'Contact :',
      activityLabel: 'Activité :',
      activityText:
        'Services de conciergerie et d’accompagnement à la gestion de locations courte durée (secteur Gaillard, Annemasse et communes voisines de Haute-Savoie).',
    },
    privacyParagraphs: [
      `Les informations recueillies via le formulaire de contact (prénom, nom, adresse e-mail, numéro de téléphone, commune et description de votre demande) sont utilisées exclusivement par ${BUSINESS_INFO.name} pour étudier votre projet et vous répondre dans le cadre de la relation professionnelle sollicitée.`,
      'Aucune donnée personnelle n’est vendue ou cédée à des tiers à des fins commerciales.',
      'Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez demander l’accès, la rectification ou le retrait de votre consentement à tout moment en écrivant à',
    ],
  },
};

const EN_CONTENT: LocalizedSiteContent = {
  pageTitles: {
    accueil: `${BUSINESS_INFO.name} – Property Concierge Gaillard & Haute-Savoie`,
    services: `Our Services – ${BUSINESS_INFO.name}`,
    apropos: `About Indya – ${BUSINESS_INFO.name}`,
    proprietaires: `For Property Owners – ${BUSINESS_INFO.name}`,
    contact: `Contact & Quote – ${BUSINESS_INFO.name}`,
  },
  nav: {
    items: [
      { id: 'accueil', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'apropos', label: 'About' },
      { id: 'proprietaires', label: 'Owners' },
      { id: 'contact', label: 'Contact' },
    ],
    cta: 'Contact Us',
    activePageLabel: 'Active page',
    mobileCta: 'Request a consultation',
    openMenuLabel: 'Open navigation menu',
    closeMenuLabel: 'Close navigation menu',
    languageGroupLabel: 'Select language',
  },
  home: {
    heroKicker: 'Gaillard · Annemasse · Haute-Savoie',
    heroTitle: 'Your property deserves thoughtful care.',
    heroSubtitle:
      'An attentive, local hospitality concierge to showcase your home and deliver an unforgettable stay to your guests on Airbnb and Booking.com.',
    heroPrimaryCta: 'Explore our services',
    heroSecondaryCta: 'Contact us',
    heroCardKicker: 'Local boutique concierge',
    heroCardTitle: 'Short-term rental management & in-person welcome',
    heroCardBullets: [
      'Airbnb & Booking.com',
      'In-person key handover in Gaillard & nearby towns',
      '7-day-a-week guest support',
    ],
    introKicker: 'Proximity & trust',
    introTitle: 'A hands-on local concierge in Gaillard and Annemasse',
    introParagraphs: [
      `Specializing in short-term rentals on Airbnb and Booking.com in Haute-Savoie, ${BUSINESS_INFO.name} provides comprehensive management for your property: guest communication, on-site welcome, housekeeping, maintenance coordination, and attentive care.`,
      'Our tailored approach aligns with your goals as a property owner while ensuring every guest enjoys a seamless, welcoming stay.',
    ],
    introAboutCta: 'About Indya',
    introOwnersCta: 'Owner journey',
    servicesKicker: 'Management packages',
    servicesTitle: 'Tailored solutions for your preferred level of delegation',
    servicesCta: 'View all services',
    packDetailsCta: 'Package details',
    packQuoteCta: 'Request a quote',
    whyKicker: 'Why entrust your property to us?',
    whyTitle: 'What matters to you matters to us.',
    whyLead:
      'Your home is important to us, and so are your guests: they bring life to your property, generate rental income, and create lasting memories. We care for that balance every day.',
    whyItems: [
      {
        number: '01',
        title: 'Stronger visibility & bookings',
        description:
          'Professional platform management and listing optimization bring greater visibility and bookings on Airbnb and Booking.com.',
      },
      {
        number: '02',
        title: 'Local dynamic pricing',
        description:
          'We continuously adjust nightly rates based on seasonality and local demand across the Gaillard–Annemasse area.',
      },
      {
        number: '03',
        title: 'Everyday peace of mind',
        description:
          'By entrusting your property to our team, you free up your time for what matters most while knowing your home is in safe hands.',
      },
      {
        number: '04',
        title: 'In-person welcome in Gaillard',
        description:
          'Based in Gaillard, we greet guests in person for a warm arrival, friendly key handover, and personalized walk-through of your property.',
      },
    ],
    galleryKicker: 'Hospitality standards',
    galleryTitle: 'Interiors thoughtfully prepared before every arrival',
    galleryCards: [
      {
        title: 'Linen care & quality inspection',
        subtitle: 'Supervised cleaning and crisp linen between every stay.',
      },
      {
        title: 'Thoughtful property presentation',
        subtitle: 'Refined listings and tailored interior styling advice.',
      },
    ],
    testimonialsKicker: 'Verified reviews',
    testimonialsTitle: 'What our owners and guests say',
    contactKicker: 'Let us discuss your property',
    contactTitle: 'Entrust your rental management with complete peace of mind',
    contactLead:
      'Speak with us about your apartment or house in Gaillard, Annemasse, and surrounding towns to choose the right formula.',
    contactCta: 'Get in touch',
  },
  services: {
    kicker: 'Our services · Gaillard & Annemasse',
    title: 'Bespoke management, from online listing to in-person welcome.',
    lead: 'Whether you prefer full end-to-end short-term rental management or reliable on-the-ground local support in Haute-Savoie, our packages are built around your needs.',
    filterAll: 'All packages',
    packages: [
      {
        id: 'pack-complet',
        number: '01',
        name: 'Pack Complet',
        subtitle: 'Full end-to-end management',
        summary:
          'Delegate your rental completely and enjoy your investment with peace of mind. Your property is managed from A to Z, revenue is optimized, and you have zero day-to-day constraints.',
        image: GALLERY_IMAGES.bedroomLinen.src,
        imageAlt: GALLERY_IMAGES.bedroomLinen.alt,
        pillars: [
          {
            title: 'Listing creation & optimization',
            items: [
              'Optimized copywriting for Airbnb / Booking.com',
              'Showcasing your property and its standout features',
              'Listing SEO & continuous improvement',
            ],
          },
          {
            title: 'Dynamic pricing & revenue optimization',
            items: [
              'Smart nightly rate adjustments driven by demand',
              'Targeted pricing strategy to maximize rental turnover',
              'Improved occupancy rate year-round',
            ],
          },
          {
            title: '7-day-a-week availability & responsiveness',
            items: [
              'Complete guest messaging before, during, and after each stay',
              'Guest support and handling of unexpected situations',
              'Regular updates with the property owner',
            ],
          },
          {
            title: 'Booking & calendar management',
            items: [
              'Multi-platform calendar synchronization',
              'Low-season gap optimization',
              'Guest profile screening',
            ],
          },
          {
            title: 'Housekeeping & linen management',
            items: [
              'Scheduling cleaning after every check-out',
              'Coordination with cleaning teams',
              'Linen management and cleanliness inspection with issue reporting',
            ],
          },
          {
            title: 'Consumables restocking',
            items: [
              'Inventory tracking (toilet paper, paper towels, soap, coffee, tea, capsules, cleaning supplies)',
              'Regular replenishment for a comfortable guest welcome',
              'Notifying the owner when restocks are required',
            ],
          },
          {
            title: 'Maintenance & repair coordination',
            items: [
              'Reporting and tracking technical incidents',
              'Coordination with maintenance tradespeople',
              'Handling minor everyday emergencies',
            ],
          },
        ],
      },
      {
        id: 'pack-digital',
        number: '02',
        name: 'Pack Digital Avancé',
        subtitle: 'Remote commercial & guest management',
        summary:
          'Boost your short-term rental performance and offer a seamless guest experience while retaining direct management of your on-site service providers.',
        image: GALLERY_IMAGES.ownerDining.src,
        imageAlt: GALLERY_IMAGES.ownerDining.alt,
        pillars: [
          {
            title: 'Listing creation & optimization',
            items: [
              'Optimized copywriting for Airbnb / Booking.com',
              'Showcasing your property and its key strengths',
              'Listing SEO & continuous refinement',
            ],
          },
          {
            title: 'Dynamic pricing & revenue optimization',
            items: [
              'Smart rate adjustments aligned with market demand',
              'Pricing strategy to strengthen occupancy and revenue',
            ],
          },
          {
            title: '7-day-a-week remote responsiveness',
            items: [
              'Full guest communication before, during, and after stays',
              'Remote guest assistance and issue resolution',
              'Regular owner communication',
            ],
          },
          {
            title: 'Booking & calendar management',
            items: [
              'Multi-platform synchronization',
              'Shoulder-period optimization & guest profile verification',
            ],
          },
          {
            title: 'Light housekeeping & maintenance coordination',
            items: [
              'Forwarding booking schedules and instructions to your providers',
              'Flagging maintenance needs as reported',
              'Owner retains direct management of providers (we coordinate, without executing on-site)',
            ],
          },
          {
            title: 'Performance tracking & owner advice',
            items: [
              'Clear monthly performance reporting',
              'Actionable recommendations to improve attractiveness and yield',
            ],
          },
        ],
      },
      {
        id: 'pack-relais',
        number: '03',
        name: 'Pack Relais Local',
        subtitle: 'On-site presence & key safekeeping',
        summary:
          'A straightforward monthly package covering secure key holding, local presence in Gaillard and nearby towns, on-site intervention when needed, cleaning access coordination, and check-up visits.',
        image: GALLERY_IMAGES.keyHandover.src,
        imageAlt: GALLERY_IMAGES.keyHandover.alt,
        pillars: [
          {
            title: 'Key management & safekeeping',
            items: [
              'Secure storage of keys and spare sets',
              'Prompt assistance in case of lost or forgotten keys',
            ],
          },
          {
            title: 'On-site guest assistance',
            items: [
              'In-person support when an issue arises',
              'Reassuring local relay for urgent on-site situations',
            ],
          },
          {
            title: 'Inspection & maintenance relay',
            items: [
              'Periodic check-in visits and swift verification if an issue is reported',
              'Liaison with tradespeople or building management, simple quick fixes, and anomaly reports',
            ],
          },
          {
            title: 'Housekeeping coordination',
            items: [
              'Granting access to your cleaning provider',
              'Quick post-clean check and reporting of supply needs',
            ],
          },
        ],
      },
    ],
    customQuoteNote: 'Tailored proposal based on your property',
    quoteCtaPrefix: 'Request a quote',
    optionalKicker: 'À la carte add-ons',
    optionalTitle: 'Optional services to elevate your guest experience',
    optionalLead:
      'Targeted extras designed to enhance your property presentation and provide added comfort for guests.',
    optionalItems: [
      {
        id: 'packs-bienvenue',
        number: '01',
        title: 'Welcome Packs',
        description:
          'A thoughtful arrival gesture prepared ahead of check-in to delight guests and encourage repeat stays.',
      },
      {
        id: 'formule-romantique',
        number: '02',
        title: 'Romantic Package',
        description:
          'An elegant, memorable ambiance setup that appeals to couples and strengthens your listing appeal.',
      },
      {
        id: 'boite-cles',
        number: '03',
        title: 'Secure Key Lockbox',
        description:
          'Supply and installation of a secure key lockbox so guests can enjoy smooth self-check-in with peace of mind.',
      },
      {
        id: 'arrivees-tardives',
        number: '04',
        title: 'Late Arrivals',
        description:
          'Flexible personal check-in outside standard hours so you never miss a booking due to arrival schedules.',
      },
      {
        id: 'gestion-intervenants',
        number: '05',
        title: 'Vendor & Contractor Coordination',
        description:
          'Connecting you with trusted local professionals for repairs and maintenance, complete with a detailed post-visit report.',
      },
      {
        id: 'home-staging',
        number: '06',
        title: 'Home-Staging & Styling',
        description:
          'Layout and styling tailored to short-term rentals: decor refinement, separating personal belongings, and harmonizing guest amenities.',
      },
    ],
    optionalCta: 'Enquire about this option',
  },
  about: {
    kicker: `About · ${BUSINESS_INFO.name}`,
    heading: 'Hello, I am Indya, founder and manager.',
    paragraphs: [
      'Passionate about property management and backed by formal hospitality qualifications and significant experience in the hotel industry, I put my expertise to work helping you maximize rental income while delivering an exceptional guest experience.',
      'My goal is to simplify property management for you and ensure complete satisfaction for your guests.',
    ],
    hospitalityKicker: 'Hospitality expertise',
    hospitalityText:
      'Formal hospitality education and hands-on industry experience dedicated to property owners and travelers across Gaillard, Annemasse, and neighboring towns.',
    philosophyKicker: 'Our philosophy',
    philosophyHeading: 'What matters to you matters to us.',
    philosophyParagraphs: [
      `At ${BUSINESS_INFO.name}, personalization sits at the heart of how we care for your property. Our dedicated team is committed to delivering high-standard service tailored to every owner and guest so each stay feels memorable.`,
      'We deeply believe in proximity, availability, and genuine human connection—people are at the center of our craft.',
      'Because great service begins with lasting trust, we prioritize clear communication and an active local presence across Gaillard, Annemasse, and the surrounding area.',
    ],
    territoryKicker: 'Local presence',
    territoryTitle: 'Grounded on the ground in Haute-Savoie',
    territoryLead:
      'Located on Rue des Vignes in Gaillard, our concierge team responds quickly across the greater Annemasse area and neighboring border towns.',
    territoryCta: 'Meet Indya',
    communesHeading: 'Towns served',
    communesCountSuffix: 'core areas',
  },
  owners: {
    kicker: 'For Property Owners',
    title: 'Elevate your property while reclaiming your time.',
    lead: 'Managing a short-term rental demands constant availability: fast guest replies, nightly rate tuning, key handovers, immaculate housekeeping, and technical follow-up. We take over with precision and local care.',
    primaryCta: 'Discuss your property',
    secondaryCta: 'Compare packages',
    journeyKicker: 'Your owner journey',
    journeyTitle: 'Clear guidance, step by step',
    journeySteps: [
      {
        number: '01',
        title: 'Initial conversation & property visit',
        description:
          'We meet, visit your apartment or house in Gaillard, Annemasse, or nearby towns, and choose the package aligned with your goals.',
      },
      {
        number: '02',
        title: 'Preparation & listing launch',
        description:
          'Tailored copywriting for Airbnb and Booking.com, styling recommendations (home-staging if desired), consumables setup, and secure access.',
      },
      {
        number: '03',
        title: 'Welcome, calendar & daily care',
        description:
          'Multi-platform sync, dynamic pricing, 7-day guest support, in-person key handover, cleaning, linen care, and maintenance coordination.',
      },
      {
        number: '04',
        title: 'Transparent follow-up & peace of mind',
        description:
          'Consistent owner communication, prompt reporting of any technical needs, and clear updates so you stay informed effortlessly.',
      },
    ],
    matrixKicker: 'Comparison guide',
    matrixTitle: 'Choose the right formula for your home',
    matrixHeaderFeature: 'Included service',
    matrixHeaders: ['Pack Complet', 'Pack Digital Avancé', 'Pack Relais Local'],
    matrixRows: [
      {
        feature: 'Listing creation & optimization (Airbnb / Booking.com)',
        complet: true,
        digital: true,
        relais: false,
      },
      {
        feature: 'Dynamic pricing & revenue strategy',
        complet: true,
        digital: true,
        relais: false,
      },
      {
        feature: '7-day-a-week guest messaging & support',
        complet: true,
        digital: true,
        relais: true,
      },
      {
        feature: 'Calendar management & multi-platform sync',
        complet: true,
        digital: true,
        relais: false,
      },
      {
        feature: 'In-person welcome & secure key holding',
        complet: true,
        digital: false,
        relais: true,
      },
      {
        feature: 'Housekeeping, linen & cleanliness inspection',
        complet: true,
        digital: false,
        relais: true,
      },
      {
        feature: 'Consumables restocking',
        complet: true,
        digital: false,
        relais: false,
      },
      {
        feature: 'On-site relay & maintenance coordination',
        complet: true,
        digital: false,
        relais: true,
      },
    ],
    includedLabel: 'Included',
    notIncludedLabel: 'Not included',
    choosePackComplet: 'Choose Pack Complet',
    packDigitalLabel: 'Pack Digital Avancé',
    packRelaisLabel: 'Pack Relais Local',
  },
  contact: {
    kicker: 'Contact · Gaillard, Haute-Savoie',
    title: 'Let us discuss your property and rental goals.',
    lead: 'We are available to answer all your questions and provide personalized guidance.',
    directTitle: 'Direct contact details',
    directSubtitle: `Speak directly with ${BUSINESS_INFO.founder}, founder and manager.`,
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    socialLabel: 'Social & messaging',
    mapTitle: 'Gaillard & Annemasse Area',
    mapSubtitle: 'Local service right on the Geneva border',
    mapFooterLabel: '74240 Gaillard · Haute-Savoie',
    mapOpenLink: 'View on map',
    formTitle: 'Enquiry form',
    formRequiredNote: 'Fields marked with an asterisk (*) are required.',
    firstNameLabel: 'First name *',
    firstNamePlaceholder: 'Your first name',
    lastNameLabel: 'Last name *',
    lastNamePlaceholder: 'Your last name',
    emailLabelField: 'Email *',
    emailPlaceholder: 'name@example.com',
    phoneLabelField: 'Phone',
    phonePlaceholder: '+33 6 00 00 00 00',
    packLabel: 'Preferred package',
    packPlaceholder: 'Select a service',
    communeLabel: 'Property town',
    communePlaceholder: 'Select a town',
    otherCommuneOption: 'Other town in Haute-Savoie',
    otherRequestOption: 'Other enquiry / general question',
    messageLabel: 'Your message *',
    messagePlaceholder: 'Property type, location, desired timeline, or any questions…',
    consentBeforeLink:
      'By submitting this form, I agree that the information entered may be processed in connection with this enquiry and any resulting professional relationship. To learn about and exercise your rights, please read our ',
    consentLinkText: 'privacy policy',
    submittingLabel: 'Sending…',
    submitLabel: 'Send enquiry',
    directCallPrefix: 'Direct response or call',
    successKicker: 'Enquiry received',
    successTitlePrefix: 'Thank you',
    successTitleSuffix: ', your message has been recorded.',
    successRefLabel: 'Reference:',
    successPackLabel: 'Selected service:',
    successCommuneLabel: 'Town:',
    successWebhookNote: 'Your enquiry has been saved and forwarded to the configured email relay.',
    successLocalNote:
      'Your enquiry has been saved on the server. To forward submissions automatically to an external inbox, configure CONTACT_WEBHOOK_URL on the server, or click below to open your email app directly.',
    successMailtoCta: 'Also send via email client',
    successResetCta: 'Send another message',
    genericError:
      'An error occurred while sending your message. Please reach out directly by phone or email.',
    networkError:
      'Unable to reach the server right now. Please contact Indya directly by email or phone.',
  },
  testimonials: [
    {
      id: 'cerina',
      author: 'Cérina C.',
      context: 'Owner in Annemasse (translated from French)',
      quote:
        'A huge thank you to Indya who managed my apartment in Annemasse masterfully at the start of summer. I have finally found a reliable, local solution to manage my rentals. Thank you again!',
    },
    {
      id: 'tony',
      author: 'Tony M.',
      context: 'Owner (translated from French)',
      quote:
        "La Petite Conciergerie d'Indya gave me complete peace of mind by taking care of every aspect of my rental management. I warmly recommend their professional services.",
    },
    {
      id: 'manon',
      author: 'Manon A.',
      context: 'Owner in Ambilly (translated from French)',
      quote:
        'I entrusted my Ambilly apartment to Indya and I am delighted. Indya is very welcoming and responsive with guests, and the housekeeping is spotless. Nothing to fault!',
    },
    {
      id: 'rodrigue',
      author: 'Rodrigue D.',
      context: 'Guest (translated from French)',
      quote:
        'Perfect stay with Indya: the apartment was spotless, tidy, and true to the listing. Indya is an exceptional host—warm, proactive, and professional, with a genuine human touch in how she welcomes guests.',
    },
  ],
  footer: {
    description:
      'Local boutique concierge dedicated to short-term rentals on Airbnb and Booking.com in Haute-Savoie.',
    navigationHeading: 'Navigation',
    navLinks: [
      { id: 'accueil', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'apropos', label: 'About Indya' },
      { id: 'proprietaires', label: 'Property Owners' },
      { id: 'contact', label: 'Contact & Quote' },
    ],
    areaHeading: 'Service Area',
    areaNote: 'Hands-on local presence in Haute-Savoie along the Geneva border.',
    socialHeading: 'Connect',
    legalNotices: 'Legal Notices',
    privacyPolicy: 'Privacy Policy',
  },
  legal: {
    mentionsTitle: 'Legal Notices',
    privacyTitle: 'Privacy Policy',
    closeLabel: 'Close window',
    mentionsTab: 'Legal Notices',
    privacyTab: 'Privacy & GDPR',
    mentionsParagraphs: {
      editorLabel: 'Website Publisher:',
      managedBy: `managed by ${BUSINESS_INFO.founder}.`,
      addressLabel: 'Address:',
      contactLabel: 'Contact:',
      activityLabel: 'Activity:',
      activityText:
        'Short-term rental concierge and property care services (Gaillard, Annemasse, and neighboring Haute-Savoie municipalities).',
    },
    privacyParagraphs: [
      `Information collected through the contact form (first name, last name, email address, phone number, town, and enquiry details) is used solely by ${BUSINESS_INFO.name} to review your project and respond to your enquiry.`,
      'No personal data is ever sold or transferred to third parties for commercial purposes.',
      'In accordance with the General Data Protection Regulation (GDPR), you may request access, correction, or withdrawal of your consent at any time by writing to',
    ],
  },
};

export function getSiteContent(locale: Locale): LocalizedSiteContent {
  return locale === 'en' ? EN_CONTENT : FR_CONTENT;
}
