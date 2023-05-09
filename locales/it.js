import * as enums from '@/locales/it/enums'
import * as common from '@/locales/it/common'

export default {
  head: {
    description: 'Vendita vino online su Callmewine, la tua enoteca online: il modo migliore per comprare vini, champagne e distillati in offerta a prezzi eccezionali!',
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
      recommendedProducts: 'Comprati spesso insieme',
    },
  },
  notFoundTitle: 'Ci dispiace',
  notFoundLine: 'Non abbiamo trovato nulla con queste caratteristiche, prova a cercare questi suggerimenti',
  loading: 'Recuperando i dati...',
  fetchError: 'Si è verificato un errore',
  save: 'Salva',
  phone: 'Telefono',
  phoneNote: 'Il numero di telefono sarà utilizzato per contattarti durante la spedizione',
  phonePlaceholder: 'es. +393498119200',
  note: 'Eventuali note di consegna {0}',
  noteDesktop: '(Presso, Interno, Citofono solo se diverso, Portineria)',
  country: 'Scegli paese',
  recentlySeen: 'Visti di ricente',
  sameProducer: 'Dallo stesso produttore',
  viewMore: 'Vedi di più',
  home: 'Home',
  cart: 'Carrello',
  cartDetails: 'Dettaglio carrello',
  continueShopping: 'Vuoi aggiungere altri prodotti alla tua spesa?',
  discountCode: 'Se hai un <strong>codice sconto</strong> potrai inserirlo in seguito, prima del pagamento.',
  shippingCost: 'Le <strong>spese di spedizione</strong> verranno aggiunte alla cassa, dopo aver scelto la modalità.',
  cartTotal: 'Totale Ordine',
  createYourAccount: 'Crea account',
  city: 'Città',
  civic: 'Indirizzo e numero civico',
  zip: 'CAP',
  province: 'Provincia',
  firstName: 'Nome',
  lastName: 'Cognome',
  email: 'Email',
  emailPlaceholder: 'User email',
  password: 'Password',
  passwordPlaceholder: 'User Password',
  passwordConfirm: 'Confirm Password',
  passwordConfirmPlaceholder: 'Confirm Password',
  newsletter: {
    label: 'Newsletter',
    subscribed: 'sottoscritto',
    unsubscribed: 'non iscritto',
    headline: 'Newsletter con promozioni è novità su tutto il catalogo di Callmewine',
  },
  loginFailed: 'Ops! Sembra che il nome utente o la password non siano corretti!',
  birthday: 'Data di nascita',
  privacyPolicy: 'Dichiaro di aver letto la Privacy Policy di Callmewine',
  acceptMarketing:
    'Accetto di ricevere newsletter e comunicazioni promozionali da Callmewine, come previsto dalla Privacy Policy.',
  footer: {
    company: 'L\'Azienda',
    who: 'Chi siamo',
    services: 'Servizi offerti',
    restaurantsAndWineshops: 'Ristoranti e Vinerie',
    support: 'Supporto',
    shipping: 'Spedizioni',
    payments: 'Pagamenti',
    termsOfSales: 'Condizioni di vendita',
    contacts: 'Contatti',
    explore: 'Esplora il catalogo',
    paymentMethods: 'Metodi di pagamento',
  },
  navbar: {
    search: 'Cosa stai cercando?',
    favorites: 'Favoriti',
    promotions: 'Promozioni',
    cart: {
      total: 'Totale',
      detail: 'Dettaglio carrello',
      checkout: 'Checkout',
      empty: 'Il tuo carrello è vuoto',
      startFromMessage: 'Non sai da dove cominciare?',
      cta: 'Scopri le nostre promozioni',
    },
    user: {
      myOrders: 'I miei Ordini',
      buyAgain: 'Compra di nuovo',
      favorites: 'I miei Favoriti',
      addresses: 'Indirizzi di spedizione',
      accessData: 'Dati di accesso',
      cards: 'Carte salvate',
      logout: 'Logout',
      signIn: 'Login',
      register: 'Registrati',
      notRegisteredYet: 'Non hai un account?',
      alreadyRegistered: 'Ho già un account',
      forgotPassword: 'Password dimenticata?',
    },
  },
  profile: {
    orders: {
      tableHeaders: {
        order: 'Ordine',
        date: 'Data',
        recipient: 'Destinatario',
        products: 'Prodotti',
        total: 'Totale',
        financialStatus: 'Pagamento',
        fulfillmentStatus: 'Stato',
      },
      card: {
        order: 'Ordine: {0}',
        date: 'Data {0}',
        recipient: 'Destinatario: {0}',
        products: 'Prodotto: | Prodotti:',
        total: 'Totale: {0}',
        financialStatus: 'Pagamento: {0}',
        fulfillmentStatus: 'Stato dell\'ordine: {0}',
        summary: 'Riepilogo',
        shipment: 'Spedizione: {0}',
        shipmentAddress: 'Indirizzo di spedizione',
        goods: 'articolo | articoli',
        productsTotal: 'Totale prodotti',
        shipmentCost: 'Costo spedizione',
        shipmentCostFree: 'Gratis',
        orderTotal: 'Totale ordine',
        quantity: 'Quantità',
      },
    },
    greeting: 'Ciao {name}',
    noOrder: 'Nessun ordine',
    noFavourite: 'Non hai nessun favorito',
    noProducts: 'Non hai ancora acquistato alcun prodotto',
    myAccount: 'Account',
    myOrders: 'Ordini',
    buyAgain: 'Compra di nuovo',
    favorites: 'Favoriti',
    addresses: 'Indirizzi di spedizione',
    accessData: 'Dati di accesso',
    cards: 'Carte salvate',
    logout: 'esci',
    editAddress: 'Modifica indirizzo',
    deleteAddress: 'Elimina',
    defaultAddress: 'Predefinito',
    addAddress: 'Nuovo indirizzo',
    addNewAddress: 'Aggiungi nuovo indirizzo',
    setAsDefaultLabel: 'Salva come indirizzo predefinito',
    personalData: 'Dati personali',
    setAsDefaultAddress: 'Imposta come predefinito',
    setNewEmailAddress: 'Imposta nuova mail',
    setNewPassword: 'Imposta nuova password',
    setNewPersonalData: 'Imposta dati personali',
    message: 'Messaggio',
    messagePlaceholder: 'Buon giorno, vorrei un aggiornamento sul mio stato della spedizione, grazie.',
    requestAssistanceTitle: 'Richiedi assistenza per l\'ordine N° {orderId}',
    requestAssistanceSubtitle: 'Inviaci un messagio e se necessario allega la documentazione in tuo possesso. Ti risponderemo prima possibile.',
    newPassword: 'Nuova password',
    confirmPassword: 'Conferma password',
  },
  collections: {
    breadcrumb: 'Tutte le Selezioni',
  },
  selections: {
    favourite: 'Favoriti da Callmewine',
    rarewine: 'Vini rari',
    foreveryday: 'Da ogni giorno',
    artisanal: 'Artigianali',
    unusualvariety: 'Varietà insolite',
    isnew: 'Nuovi',
    togift: 'Da regalare',
    inpromotion: 'In promozione',
    topsale: 'Top Sale',
    organic: 'Organici e Biodinamici',
  },
  search: {
    search: 'Cerca',
    showFilters: 'Mostra filtri',
    showResults: 'Mostra risultati ({count})',
    products: 'Prodotti',
    selections: 'Selezioni',
    categories: 'Categorie',
    winelists: 'Carta vini',
    pairings: 'Abbinamenti',
    dosagecontents: 'Dosaggio',
    bodystyles: 'Stile',
    boxes: 'Con confezione',
    areas: 'Area',
    provenience: 'Provenienza',
    regions: 'Provenienza',
    brands: 'Produttore',
    noBrands: 'Prova la nostra migliore lista',
    countries: 'Paese',
    sizes: 'Formato',
    vintages: 'Annate',
    awards: 'Premi',
    agings: 'Invecchiamento',
    philosophies: 'Filosofie',
    price: 'Prezzo',
    priceFromTo: 'Prezzo da {from} a {to}',
    results: 'Risultati',
    noResultsAlert: 'Non ci sono risultati',
    noResultsMessage: `
      <p class="lead">Suggerimenti per la ricerca:</p>
      <ul>
        <li>Controlla possibili errori</li>
        <li>Prova a cercare parole simili o ad usare meno parole</li>
        <li>Prova ad usare parole più generiche, potrai filtrare ulteriormente coi filtri</li>
        <li>Usa il menu principale e filtra la tua ricerca coi filtri sulla sinistra</li>
      </ul>`,
    activeFilters: 'Filtri attivi',
    removeAll: 'Rimuovi tutti',
    removeFilters: 'Rimuovi i filtri',
    sortBy: 'Ordina per',
    sort: {
      name: 'Nome',
      price: 'Prezzo',
    },
    highestPrice: 'Prezzo più alto',
    lowestPrice: 'Prezzo più basso',
    mostAwarded: 'Più premitati',
    newArrivals: 'Nuovi arrivi',
    popularity: 'Popolarità',
  },
  product: {
    tooltip: {
      guide: 'Guida {guide}',
      score: 'punteggio {value} su {maxValue}',
      year: 'Annata: {year}',
    },
    promoLabel: 'Promo',
    addToCart: 'Aggiungi al carrello',
    notifyMe: 'Avvisami',
    notifyMeTitle: 'Avvisami quando arriva',
    notifyMeSubtitle: 'Inserisci la tua mail e ti avviseremo quando il prodotto sarà disponibile',
    notifyMeNote: 'Riceverai una mail quando il prodotto sarà disponibile',
    promo: 'promo',
    notAvailable: 'Non disponibile',
    notAvailable2: 'Prodotto non disponibile',
    available: 'Disponibile ({quantity})',
    description: 'Descrizione',
    toEnjoyBetter: 'Per gustarlo meglio',
    awardsAndAcknowledgments: 'Premi',
    producer: 'Produttore',
    pairings: 'Abbinamenti',
    temperature: 'Temperatura',
    whenDrink: 'Quando bere',
    guide: 'Guida',
    year: 'Annata',
    score: 'Punteggio',
    quote: 'Citazione',
    recommendedByCallmewine: 'Consigliato da Callmewine',
    mainWines: 'Vini principali',
    foundation: 'Anno Fondazione',
    vineyardHectares: 'Ettari vitati',
    ownGrapes: 'Proprietà',
    annualProduction: 'Produzione annuale',
    winemaker: 'Enologo',
    address: 'Indirizzo',
    features: 'Caratteristiche',
    denomination: 'Denominazione',
    vines: 'Vitigni',
    region: 'Regione',
    alcoholContent: 'Contenuto alcolico',
    format: 'Formato',
    vinification: 'Vinificazione',
    refinement: 'Raffinamento',
    additionalNotes: 'Note addizionali',
    proprietaryGrapes: 'uve di proprietà',
  },
  validations: {
    password: {
      title: 'La password deve contenere:',
      effectiveness: 'Efficacia Password',
      min: 'almeno 8 caratteri',
      oneNumber: 'un numero',
      oneUpperCase: 'una lettera maiuscola',
      oneLowerCase: 'una lettera minuscola',
      oneSpecialChar: 'un carattere speciale',
    },
  },
  recoverPwd: {
    title: 'Reimposta password',
    paragraph: 'Inserisci l\'email con la quale ti sei registrato. Riceverai nella tua casella di posta un messaggio con le istruzioni per modificare la password.',
    feedback: 'Se l\'indirizzo {0} è associato ad un profilo registrato, riceverai via mail il link per reimpostare la password del tuo account.',
    feedbackFooter: {
      text: 'Il tuo profilo è registrato e non hai ricevuto l\'e-mail? Cerca nella posta indesiderata oppure {0}',
      link: 'richiede un nuovo invio',
    },
  },
}
