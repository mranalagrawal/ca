import * as enums from '@/locales/fr/enums'
import * as common from '@/locales/fr/common'

export default {
  head: {
    description: 'Vin en ligne à vendre sur Callmewine, votre boutique de vins en ligne: la meilleure façon d\'acheter des vins, du champagne et distillé à des prix exceptionnels!',
  },
  enums: {
    ...enums.Accessibility,
    ...enums.OrderFinancialStatus,
    ...enums.OrderFulfillmentStatus,
  },
  common: {
    ...common.confirm,
    ...common.cta,
    ...common.features,
    ...common.feedback,
    ...common.filters,
    carousel: {
      recommendedProducts: 'Souvent achetés ensemble',
    },
  },
  searchResultLabel: 'Les résultats de votre recherche',
  notFoundTitle: 'Nous sommes désolés',
  notFoundLine: 'Nous n\'avons rien trouvé avec ces caractéristiques, essayez de rechercher ces suggestions',
  loading: 'Récupération des données...',
  fetchError: 'Une erreur s\'est produite',
  save: 'Save',
  phone: 'Phone',
  phoneNote: 'Votre numéro de téléphone sera utilisé pour vous contacter lors de l\'expédition',
  phonePlaceholder: 'es. +442035190811',
  note: 'Les éventuels bordereaux de livraison {0}',
  noteDesktop: '(At, Interne, Interphone uniquement si différent, Conciergerie)',
  country: 'Choose Country',
  recentlySeen: 'Recently seen',
  sameProducer: 'From the same producer',
  viewMore: 'View more',
  cart: 'Panier',
  cartDetails: 'Détail du chariot',
  continueShopping: 'Vous souhaitez ajouter d\'autres produits à votre shopping ?',
  discountCode: 'Si vous avez un <strong>code de réduction</strong>, vous pouvez le saisir plus tard, avant de payer.',
  shippingCost: 'Les <strong>frais d\'expédition</strong> seront ajoutés à la caisse, après avoir choisi la méthode.',
  home: 'Maison',
  cartTotal: 'Total du panier\n',
  createYourAccount: 'Créez votre compte',
  city: 'Ville',
  civic: 'Adresse et numéro civique',
  zip: 'Cap',
  province: 'Province * ANTIBES FRANCE',
  firstName: 'Prénom',
  lastName: 'Nom',
  businessName: 'Nom de l\'entreprise',
  vatNumber: 'numéro de TVA',
  businessType: 'Secteur d\'activité',
  email: 'Email',
  emailPlaceholder: 'Courriel de l\'utilisateur',
  password: 'Mot de passe',
  passwordPlaceholder: 'Mot de passe de l\'utilisateur',
  passwordConfirm: 'Confirm Password',
  passwordConfirmPlaceholder: 'Confirm Password',
  newsletter: {
    label: 'Newsletter',
    subscribed: 'abonné',
    unsubscribed: 'désabonné',
    headline: 'Newsletter avec promotions et nouveautés sur tout le catalogue Callmewine',
    frequency: {
      DAILY: 'Quotidien',
      WEEKLY: 'Hebdomadaire',
    },
    splash: {
      headline: 'Abonnez-vous à notre newsletter pour recevoir des réductions, des promotions et des nouvelles tous les jours !',
      offer: 'Immédiatement pour vous une remise de {discount}% sur votre première commande !',
      acceptMarketing: 'J\'accepte de recevoir des newsletters et des communications promotionnelles de Callmewine, comme l\'exige le {0}.',
      profiling: 'Je consens à l\'utilisation de mes données pour des activités de profilage visant à améliorer mon expérience de navigation et à recevoir des offres liées à mes intérêts et à mes habitudes d\'achat, comme l\'exige le {0}.',
      readMore: 'Pour plus d\'informations, veuillez lire notre {0}',
      privacyPolicy: 'politique de confidentialité',
    },
  },
  loginFailed: 'Oops! Il semble que le nom d\'utilisateur ou le mot de passe soient incorrects!',
  birthday: 'Anniversaire',
  privacyPolicy: 'Je déclare avoir lu la politique de confidentialité de Callmewine',
  acceptMarketing:
    'J\'accepte de recevoir des newsletters et des communications promotionnelles de Callmewine, comme l\'exige la politique de confidentialité.',
  footer: {
    company: 'Société',
    who: 'Qui Nous Sommes',
    sustainability: 'Durabilité',
    services: 'Nos Services',
    restaurantsAndWineShops: 'Bar à vins & Restaurants',
    corporateGifts: 'Cadeaux d\'entreprise',
    guideToOurWines: 'Guide de nos vins',
    giftCards: 'Chèques-cadeaux',
    support: 'Service Client',
    shipping: 'Livraisons',
    payments: 'Paiements',
    termsOfSales: 'Conditions de Vente',
    contacts: 'Contacts',
    explore: 'Explorez Notre Catalogue',
    paymentMethods: 'Moyen de paiement',
  },
  navbar: {
    search: 'Recherche?',
    favorites: 'Favoris',
    promotions: 'Promotions',
    cart: {
      total: 'Total',
      detail: 'Détail du panier',
      checkout: 'Aller à la caisse',
      empty: 'Votre panier est vide!',
      startFromMessage: 'Vous ne savez pas par où commencer ?',
      cta: 'Découvrez nos promos',
    },
    user: {
      myOrders: 'Mes commandes',
      buyAgain: 'Acheter à nouveau',
      favorites: 'Mes favoris',
      addresses: 'Adresses de livraison',
      accessData: 'Données d\'accès',
      cards: 'Cartes enregistrées',
      logout: 'Se déconnecter',
      signIn: 'S\'identifier',
      register: 'Enregistrer',
      notRegisteredYet: 'Vous n\'avez pas encore de profil ?',
      alreadyRegistered: 'Je ai déjà un compte',
      forgotPassword: 'Avez-vous oublié votre mot de passe?',
    },
  },
  profile: {
    orders: {
      print: {
        invoiceNumber: 'Facture n° {0}',
        tableHeaders: {
          code: 'Code',
          description: 'Description',
          quantity: 'Montant',
          price: 'prix',
        },
      },
      tableHeaders: {
        order: 'Ordre',
        date: 'Date',
        recipient: 'Destinataire',
        products: 'Des produits',
        total: 'Total',
        financialStatus: 'Statut financier',
        fulfillmentStatus: 'Statut d\'exécution',
      },
      card: {
        order: 'Ordre: {0}',
        date: 'Date {0}',
        recipient: 'Destinataire: {0}',
        products: 'Produit: | Produits:',
        total: 'Total: {0}',
        financialStatus: 'Paiement: {0}',
        fulfillmentStatus: 'Statut de la commande: {0}',
        summary: 'Résumé',
        shipment: 'Expédition: {0}',
        shipmentAddress: 'Adresse de livraison',
        billingAddress: 'Adresse de facturation',
        businessAddress: 'Adresse d\'affaires',
        goods: 'objet | éléments',
        productsTotal: 'Produits totaux',
        shipmentCost: 'Frais de port',
        shipmentCostFree: 'Gratuite',
        orderTotal: 'Commande totale',
        quantity: 'Quantité',
      },
    },
    greeting: 'Bonjour {name}',
    noOrder: 'Vous n\'avez pas encore de commande',
    noFavourite: 'Vous n\'avez pas encore de favori',
    myAccount: 'Mon compte',
    myOrders: 'Mes commandes',
    buyAgain: 'Acheter à nouveau',
    favorites: 'Mes favoris',
    addresses: 'Adresses de livraison',
    accessData: 'Données d\'accès',
    cards: 'Cartes enregistrées',
    logout: 'Se déconnecter',
    editAddress: 'Changement d\'adresse',
    deleteAddress: 'Supprimer',
    defaultAddress: 'Défaut',
    addAddress: 'Add address',
    addNewAddress: 'Ajouter une nouvelle adresse',
    setAsDefaultLabel: 'Enregistrer comme adresse par défaut',
    personalData: 'Personal data',
    setAsDefaultAddress: 'Définir par défaut',
    setNewEmailAddress: 'Set new email address',
    setNewPassword: 'Set new password',
    setNewPersonalData: 'Set new personal data',
    message: 'Message',
    messagePlaceholder: 'Bonjour, je voudrais une mise à jour sur l\'état de mon envoi, merci.',
    ratingMessage: 'Ma note (non visible par les autres utilisateurs)',
    ratingDescriptionPlaceholder: 'Ex. Excellent vin bio.',
    requestAssistanceTitle: 'Demander de l\'aide pour la commande n° {orderId}',
    requestAssistanceSubtitle: 'Envoyez-nous un message et, si nécessaire, joignez la documentation en votre possession. Nous vous répondrons dès que possible.',
    newPassword: 'New password',
    confirmPassword: 'Confirm password',
  },
  collections: {
    breadcrumb: 'Toutes les sélections',
  },
  selections: {
    favourite: 'Callmewine Favourites',
    rarewine: 'Vins rares',
    foreveryday: 'Pour tous les jours',
    artisanal: 'Artisanale',
    unusualvariety: 'Variété inhabituelle',
    isnew: 'Nouvelle',
    togift: 'À offrir',
    inpromotion: 'En promotion',
    topsale: 'Meilleure vente',
    organic: 'Biologique et Biodynamique',
  },
  search: {
    search: 'Recherche',
    showMore: 'Montre plus',
    showLess: 'Montrer moins',
    showFilters: 'Afficher les filtres',
    showResults: 'Montrer les résultats ({count})',
    products: 'Des produits',
    selections: 'Nos Sélections',
    productionTypes: 'Types de fabrication',
    regions: 'Régions',
    country: 'Pays',
    categories: 'Catégories',
    winelists: 'Cartes des vins',
    pairings: 'Accords',
    dosagecontents: 'Contenu posologique',
    bodystyles: 'styles de corps',
    boxes: 'des boites',
    areas: 'domaines',
    provenience: 'provenance',
    brands: 'marques',
    noBrands: 'Essayez notre meilleure liste',
    countries: 'des pays',
    sizes: 'tailles',
    vintages: 'millésimes',
    awards: 'prix',
    agings: 'vieillissements',
    philosophies: 'philosophies',
    price: 'prix',
    priceFromTo: 'Tarif de {from} à {to}',
    results: 'résultats',
    noResultsAlert: 'Il n\'y a aucun résultat pour votre recherche',
    noResultsMessage: `
        <p class="lead">Suggestions pour votre recherche:</p>
         <ul>
           <li>Vérifier les éventuelles erreurs de frappe</li>
           <li>Essayez de rechercher un mot similaire ou d'utiliser moins de mots</li>
           <li>Essayez d'utiliser un mot plus générique, vous pourrez ensuite affiner votre recherche à l'aide des filtres</li>
           <li>Utilisez les menus principaux et filtrez votre recherche à l'aide des filtres qui apparaissent à gauche</li>
         </ul>`,
    activeFilters: 'Filtres actifs',
    removeAll: 'Enlever tout',
    removeFilters: 'Supprimer les filtres',
    sortBy: 'Trier par',
    sort: {
      name: 'Nom',
      price: 'Prix',
    },
    highestPopularity: 'Les plus populier',
    lowestPopularity: 'Le moins populier',
    highestPrice: 'Le plus cher',
    lowestPrice: 'Le moins cher',
    mostAwarded: 'Les plus rècompensés',
    newArrivals: 'Nouvetautés',
    popularity: 'Popularité',
    brandAsc: 'Brand (A-Z)',
    brandDesc: 'Brand (Z-A)',
    giftCards: 'Chèque cadeau',
    chooseGiftCard: 'choisissez votre chèque cadeau',
  },
  product: {
    otherVintages: 'Autres millésimes: ',
    tooltip: {
      guide: 'Guide {guide}',
      score: 'note {value} sur {maxValue}',
      year: 'Année: {year}',
    },
    promoLabel: 'Promo',
    addToCart: 'Ajouter au chariot',
    notifyMe: 'Prévenez-moi',
    notifyMeTitle: 'Avertissez-moi quand il arrive',
    notifyMeSubtitle: 'Entrez votre e-mail et nous vous informerons lorsque le produit sera disponible',
    notifyMeNote: 'Vous recevrez un e-mail lorsque le produit sera disponible',
    promo: 'promotion',
    notAvailable: 'Not available',
    notAvailable2: 'Produit non disponible',
    available: 'Available now',
    description: 'Description',
    toEnjoyBetter: 'To wnjoy it better',
    awardsAndAcknowledgments: 'Awards',
    producer: 'Producer',
    pairings: 'Pairings',
    temperature: 'Temperature',
    whenDrink: 'When drink',
    guide: 'Guide',
    year: 'Year',
    score: 'Score',
    quote: 'Quote',
    recommendedByCallmewine: 'Recommended by Callmewine',
    mainWines: 'Main wines',
    foundation: 'Année de Fondation',
    vineyardHectares: 'Vineyard hectares',
    ownGrapes: 'Own grapes',
    annualProduction: 'Annual production',
    winemaker: 'Winemaker',
    address: 'Address',
    features: 'Features',
    denomination: 'Denomination',
    vines: 'Vines',
    region: 'Region',
    alcoholContent: 'Alcohol content',
    format: 'Format',
    vinification: 'Vinification',
    refinement: 'Refinement',
    additionalNotes: 'Additional Notes',
    proprietaryGrapes: 'raisins propriétaires',
  },
  validations: {
    password: {
      title: 'Le mot de passe doit contenir:',
      effectiveness: 'Efficacité du mot de passe',
      min: 'au moins 8 caractères',
      oneNumber: 'un nombre',
      oneUpperCase: 'une lettre majuscule',
      oneLowerCase: 'une lettre minuscule',
      oneSpecialChar: 'un caractère spécial',
    },
  },
  recoverPwd: {
    title: 'Réinitialiser le mot de passe',
    paragraph: 'Entrez l\'e-mail avec lequel vous vous êtes inscrit. Vous recevrez un message dans votre boîte de réception avec des instructions pour changer votre mot de passe.',
    feedbackFooter: {
      text: 'Votre profil est enregistré et vous n\'avez pas reçu l\'email ? Rechercher dans vos courriers indésirables ou {0}',
      link: 'demander un renvoi',
    },
  },
  contactForm: {
    motivation: 'Raison du contact',
    loginRequired: 'nécessite une connexion',
    selectOrder: 'Sélectionnez la commande',
    selectedOrder: 'Commande n {orderNumber} du {date}, par {name} pour {total}',
    choices: {
      PAYMENT: 'Notifications relatives au paiement d\'une commande',
      ORDER_SHIPMENT: 'Demander des informations sur l\'expédition d\'une commande',
      ORDER_RECEIVED: 'Rapports concernant une commande reçue',
      PURCHASE_SUGGEST: 'Demande de suggestion d\'achat',
      SITE_IMPROVEMENT: 'Suggestions de produits à ajouter sur Callmewine ou améliorations du site',
      OTHER: 'Autres questions ou rapports',
    },
  },
  waitingForConfirmation: {
    msg: 'Merci d\'avoir envoyé vos données, un de nos opérateurs vous contactera dans les plus brefs délais.',
    alreadyApproved: 'Vous êtes déjà approuvé, vous pouvez effectuer une recherche dans tout notre site.',
  },
  bundle: {
    whatIsInTheBox: 'Produits de la Dégustation:',
  },
  productDescriptionTab: 'DESCRIPTION DU {productTitle}',
}
