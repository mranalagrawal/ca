import * as enums from '@/locales/de/enums'
import * as common from '@/locales/de/common'
import * as pages from '@/locales/de/pages'

export default {
  ...common.validations,
  head: {
    description: 'Online -Wein zum Verkauf auf Callmewine, Ihr Online -Weinwerk: Der beste Weg, um Weine zu kaufen, Champagner und destilliert zu außergewöhnlichen Preisen zu destilliert!',
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
    ...common.forms,
    ...common.info,
    carousel: {
      recommendedProducts: 'Oft zusammen gekauft',
    },
  },
  pages: {
    ...pages.notFound,
    ...pages.gone,
    ...pages.billing,
  },
  giftCards: 'Geschenkgutschein',
  chooseGiftCard: 'Wählen Sie den Betrag des Geschenkgutscheins',
  searchResultLabel: 'Die Ergebnisse Ihrer Suche',
  loading: 'Daten werden abgerufen...',
  fetchError: 'Ein Fehler ist aufgetreten',
  save: 'Speichern',
  phone: 'Telefon',
  phoneNote: 'Ihre Telefonnummer wird verwendet, um Sie während des Versands zu kontaktieren',
  phonePlaceholder: 'es. +442035190811',
  note: 'Evtl. Lieferscheine',
  noteDesktop: '(At, Intern, Gegensprechanlage nur falls abweichend, Concierge)',
  country: 'Land auswählen',
  recentlySeen: 'Kürzlich gesehen',
  sameProducer: 'Vom selben Hersteller',
  viewMore: 'Mehr sehen',
  cart: 'Wagen',
  cartDetails: 'Wagendetail',
  continueShopping: 'Möchten Sie Ihrem Einkauf weitere Produkte hinzufügen?',
  discountCode: 'Wenn Sie einen <strong>Rabattcode</strong> haben, können Sie ihn später eingeben, bevor Sie bezahlen.',
  shippingCost: 'Die <strong>Versandkosten</strong> werden an der Kasse hinzugefügt, nachdem Sie die Methode ausgewählt haben.',
  home: 'Heim',
  cartTotal: 'Winkelwagen totaal\n',
  createYourAccount: 'Erstelle deinen Account',
  city: 'Stadt',
  civic: 'Adresse und Bürgernummer',
  zip: 'Postleitzahl',
  province: 'Provinz',
  firstName: 'Vorname',
  lastName: 'Nachname',
  businessName: 'Firmenname',
  vatNumber: 'Umsatzsteuer-Identifikationsnummer',
  businessType: 'Aktivitätsbereich',
  email: 'Email',
  emailPlaceholder: 'Benutzer Email',
  password: 'Password',
  passwordPlaceholder: 'Benutzer-Passwort',
  passwordConfirm: 'Confirm Password',
  passwordConfirmPlaceholder: 'Confirm Password',
  newsletter: {
    label: 'Newsletter',
    subscribed: 'gezeichnet',
    unsubscribed: 'abgemeldet',
    headline: 'Newsletter mit Aktionen und Neuigkeiten zum gesamten Callmewine-Katalog',
    offer: 'Abonnieren Sie unseren Newsletter und erhalten Sie {discount}% Rabatt auf Ihre erste Bestellung!',
    frequency: {
      DAILY: 'Täglich',
      WEEKLY: 'Wöchentlich',
    },
    splash: {
      headline: 'Abonnieren Sie unseren Newsletter, um täglich Rabatte, Aktionen und Neuigkeiten zu erhalten!',
      offer: 'Ab sofort für Sie {discount}% Rabatt auf Ihre erste Bestellung von mindestens {goal}!',
      acceptMarketing: 'Ich bin damit einverstanden, Newsletter und Werbemitteilungen von Callmewine gemäß den {0}-Vorschriften zu erhalten.',
      profiling: 'Ich stimme der Verwendung meiner Daten für Profiling-Aktivitäten zu, die darauf abzielen, mein Surferlebnis zu verbessern und Angebote im Zusammenhang mit meinen Interessen und meinen Kaufgewohnheiten zu erhalten, wie in der {0} vorgeschrieben.',
      readMore: 'Weitere Informationen finden Sie in unserem {0}',
      privacyPolicy: 'Datenschutz-Bestimmungen',
    },
  },
  loginFailed: 'Ops! Sembra che il nome utente o la password non siano corretti!',
  birthday: 'Geburtstag',
  privacyPolicy:
    'Ich erkläre, dass ich die Datenschutzrichtlinie von Callmewine gelesen habe',
  acceptMarketing:
    'Ich stimme zu, Newsletter und Werbemitteilungen von Callmewine zu erhalten, wie in der Datenschutzrichtlinie vorgeschrieben.',
  footer: {
    company: 'Die Firma',
    who: 'Über uns',
    sustainability: 'Nachhaltigkeit',
    services: 'Unsere Dienstleistungen',
    restaurantsAndWineShops: 'Önothek und Restaurants',
    corporateGifts: 'Werbegeschenke',
    guideToOurWines: 'Leitfaden zu unseren Weinen',
    giftCards: 'Geschenkgutschein',
    support: 'Unterstützung',
    shipping: 'Lieferungen',
    payments: 'Zahlungsarten',
    termsOfSales: 'AGB',
    contacts: 'Kontaktseite',
    explore: 'Entdecken Sie Unseren Katalog',
    paymentMethods: 'Zahlungsarten',
    privacyPolicy: 'Klicken Sie auf {label}, um unsere {link} zu lesen.',
  },
  navbar: {
    search: 'Wonach suchst du?',
    favorites: 'Favoriten',
    promotions: 'Werbeaktionen',
    cart: {
      total: 'Gesamt',
      detail: 'Warenkorbdetails',
      checkout: 'Zum Checkout gehen',
      empty: 'Ihr Warenkorb ist leer!',
      startFromMessage: 'Wo soll man anfangen?',
      cta: 'Entdecken Sie unsere Angebote',
    },
    user: {
      myOrders: 'Aufträge',
      buyAgain: 'Zurück kaufen',
      favorites: 'Favoriten',
      addresses: 'Lieferadresse',
      accessData: 'Zugangsdaten',
      billing: 'Abrechnung',
      cards: 'Saved cards',
      notRegisteredYet: 'Sie haben noch kein Account?',
      alreadyRegistered: 'Ich habe bereits einen Account',
      socialLogin: 'Soziales Login',
      socialRegister: 'Soziales Login',
      forgotPassword: 'Haben Sie Ihr Passwort vergessen?',
      orLoginWith: 'Oder melden Sie sich mit an',
      orRegisterWith: 'Oder melden Sie sich mit an',
      facebookLogin: 'Melden Sie sich mit Facebook an',
      googleLogin: 'Melden Sie sich mit Google an',
    },
  },
  profile: {
    orders: {
      print: {
        invoiceNumber: 'Rechnung Nr. {0}',
        tableHeaders: {
          code: 'Code',
          description: 'Beschreibung',
          quantity: 'Menge',
          price: 'Preis',
        },
      },
      tableHeaders: {
        order: 'Befehl',
        date: 'Datum',
        recipient: 'Empfänger',
        products: 'Produkte',
        total: 'Gesamt',
        financialStatus: 'Finanzieller Status',
        fulfillmentStatus: 'Erfüllungsstatus',
      },
      card: {
        order: 'Befehl: {0}',
        date: 'Datum {0}',
        recipient: 'Empfänger: {0}',
        products: 'Produkt: | Produkte:',
        total: 'Gesamt: {0}',
        financialStatus: 'Zahlung: {0}',
        fulfillmentStatus: 'Bestellstatus: {0}',
        summary: 'Zusammenfassung',
        shipment: 'Sendung: {0}',
        shipmentAddress: 'Lieferanschrift',
        billingAddress: 'Rechnungsadresse',
        businessAddress: 'Geschäftsadresse',
        goods: 'Artikel | Artikel',
        productsTotal: 'Gesamte Produkte',
        shipmentCost: 'Versandkosten',
        shipmentCostFree: 'Kostenlos',
        orderTotal: 'Gesamtbestellung',
        quantity: 'Menge',
      },
    },
    greeting: 'Hallo {name}',
    noOrder: 'Sie haben noch keine Bestellung',
    noFavourite: 'Sie haben noch keinen Favoriten',
    noProducts: 'Sie haben noch kein Produkt gekauft',
    myAccount: 'Account',
    myOrders: 'Aufträge',
    buyAgain: 'Zurück kaufen',
    favorites: 'Favoriten',
    editAddress: 'Adresse ändern',
    deleteAddress: 'Löschen',
    defaultAddress: 'Standard',
    addresses: 'Lieferadresse',
    accessData: 'Zugangsdaten',
    billing: 'Abrechnungsdaten',
    cards: 'Saved cards',
    logout: 'Logout',
    addAddress: 'Adresse hinzufügen',
    addNewAddress: 'Neue Adresse hinzufügen',
    setAsDefaultLabel: 'Als Standardadresse speichern',
    personalData: 'Persönliche Daten',
    setAsDefaultAddress: 'Als Standard festlegen',
    setNewEmailAddress: 'Neue E-Mail-Adresse festlegen',
    setNewPassword: 'Neues Passwort festlegen',
    setNewPersonalData: 'Legen Sie neue persönliche Daten fest',
    message: 'Nachricht',
    messagePlaceholder: 'Guten Morgen, ich hätte gerne ein Update zu meinem Sendungsstatus, danke.',
    ratingMessage: 'Meine Bewertung (für andere Benutzer nicht sichtbar)',
    ratingDescriptionPlaceholder: 'Bsp. Ausgezeichneter Bio-Wein.',
    requestAssistanceTitle: 'Unterstützung für Bestellung {orderId} anfordern',
    requestAssistanceSubtitle: 'Senden Sie uns eine Nachricht und fügen Sie ggf. die in Ihrem Besitz befindlichen Unterlagen bei. Wir werden so schnell wie möglich antworten.',
    newPassword: 'Neues Passwort',
    confirmPassword: 'Passwort bestätigen',
  },
  collections: {
    breadcrumb: 'Alle Auswahlen',
  },
  search: {
    search: 'Suche',
    showMore: 'Zeig mehr',
    showLess: 'Zeige weniger',
    showFilters: 'Filter anzeigen',
    showResults: 'Zeige Ergebnisse ({count})',
    products: 'Produkte',
    selections: 'Unsere Auswahl',
    productionTypes: 'Produktionsarten',
    regions: 'Regionen',
    country: 'Land',
    categories: 'Kategorien',
    winelists: 'Weinkarten',
    pairings: 'Paarungen',
    dosagecontents: 'Dosierungsinhalt',
    bodystyles: 'Körperformen',
    boxes: 'Boxen',
    areas: 'Bereiche',
    provenience: 'Herkunft',
    brands: 'brands',
    noBrands: 'Probieren Sie unsere beste Liste aus',
    countries: 'Länder',
    sizes: 'Größen',
    vintages: 'Jahrgänge',
    awards: 'Auszeichnungen',
    agings: 'Alterungen',
    philosophies: 'Philosophien',
    price: 'Preis',
    priceFromTo: 'Preis von {from} bis {to}',
    results: 'Ergebnisse',
    noResultsAlert: 'Es gibt keine Ergebnisse für Ihre Suche',
    noResultsMessage: `
      <p class="lead">Vorschläge für Ihre Suche:</p>
      <ul>
        <li>Überprüfen Sie mögliche Tippfehler</li>
        <li>Versuchen Sie, ein ähnliches Wort zu suchen oder weniger Wörter zu verwenden</li>
        <li>Versuchen Sie, ein allgemeineres Wort zu verwenden, Sie können dann Ihre Suche mit den Filtern verfeinern</li>
        <li>Verwenden Sie die Hauptmenüs und filtern Sie Ihre Suche mit den links angezeigten Filtern</li>
      </ul>`,
    activeFilters: 'Aktive Filter',
    removeAll: 'Alles entfernen',
    removeFilters: 'Filter entfernen',
  },
  product: {
    otherVintages: 'Andere Jahrgänge: ',
    tooltip: {
      guide: 'Handbuch {guide}',
      score: 'Punktzahl {value} von {maxValue}',
      year: 'Jahr: {year}',
    },
    promoLabel: 'Werbeaktion',
    notifyMeTitle: 'Benachrichtigen Sie mich, wenn es ankommt',
    notifyMeSubtitle: 'Geben Sie Ihre E-Mail-Adresse ein und wir benachrichtigen Sie, sobald das Produkt verfügbar ist',
    notifyMeNote: 'Sie erhalten eine E-Mail, sobald das Produkt verfügbar ist',
    promo: 'Werbeaktion',
    notAvailable: 'Nicht verfügbar',
    notAvailable2: 'Produkt nicht verfügbar',
    available: 'Jetzt verfügbar',
    description: 'Beschreibung',
    toEnjoyBetter: 'Optimaler Genuss',
    awardsAndAcknowledgments: 'Auszeichnungen',
    producer: 'Hersteller',
    pairings: 'Weinbegleitung',
    pairingsTitle: 'Perfekte Weinkombination',
    temperature: 'Serviertemperatur',
    whenOpen: 'Wann zu öffnen',
    whenDrink: 'Wann zu genießen',
    glass: 'Glas',
    longevity: 'Langlebigkeit',
    guide: 'Führen',
    year: 'Jahr',
    score: 'Punktzahl',
    quote: 'Zitieren',
    recommendedByCallmewine: 'Empfohlen von Callmewine',
    mainWines: 'Hauptweine',
    foundation: 'Gründungsjahr',
    vineyardHectares: 'Hektar Weinberge',
    ownGrapes: 'Eigene Trauben',
    annualProduction: 'Jährliche Produktion',
    winemaker: 'Winzer',
    address: 'Adresse',
    features: 'Merkmale',
    denomination: 'Benennung',
    grapes: 'Reben',
    regionCountry: 'Region',
    alcoholContent: 'Alkoholgehalt',
    size: 'Format',
    winemaking: 'Vinifikation',
    vineyards: 'Weingärten',
    agingDescription: 'Weinausbau',
    productInformations: 'Zusätzliche Bemerkungen',
    proprietaryGrapes: 'eigene Trauben',
    productionPhilosophies: 'Herstellphilosophie',
    tipology: 'Weinart',
    color: 'Farbe',
    taste: 'Geruch',
    aroma: 'Geschmack',
    collectionBottle: 'Bouteille de collection, non soumise à promotion',
    bioInfo: 'da agricoltura Italia o EU',
    bioOperator: 'Codice Operatore nr.',
    subCategory: 'Tipologia',
  },
  recoverPwd: {
    title: 'Passwort zurücksetzen',
    paragraph: 'Geben Sie die E-Mail ein, mit der Sie sich registriert haben. Sie erhalten eine Nachricht in Ihrem Posteingang mit Anweisungen zum Ändern Ihres Passworts.',
    feedback: 'Wenn die Adresse {0} mit einem registrierten Profil verknüpft ist, erhalten Sie per E-Mail den Link zum Zurücksetzen des Passworts Ihres Kontos.',
    feedbackFooter: {
      text: 'Ist Ihr Profil registriert und Sie haben die E-Mail nicht erhalten? Durchsuchen Sie Ihre Junk-Mail oder fordern Sie eine {0}',
      link: 'erneute Zusendung an',
    },
  },
  contactForm: {
    motivation: 'Grund für den Kontakt',
    loginRequired: 'erfordert eine Anmeldung',
    selectOrder: 'Wählen Sie die Bestellung aus',
    selectedOrder: 'Bestellnr. {orderNumber} vom {date}, von {name} für {total}',
    choices: {
      PAYMENT: 'Benachrichtigungen bezüglich der Zahlung einer Bestellung',
      ORDER_SHIPMENT: 'Fordern Sie Informationen zum Versand einer Bestellung an',
      ORDER_RECEIVED: 'Berichte zu einer eingegangenen Bestellung',
      PURCHASE_SUGGEST: 'Kaufvorschlagsanfrage',
      SITE_IMPROVEMENT: 'Produktvorschläge zum Hinzufügen zu Callmewine oder Website-Verbesserungen',
      OTHER: 'Sonstige Fragen oder Berichte',
    },
  },
  waitingForConfirmation: {
    msg: 'Vielen Dank für die Übermittlung Ihrer Daten. Einer unserer Mitarbeiter wird sich so schnell wie möglich mit Ihnen in Verbindung setzen.',
    alreadyApproved: 'Sie sind bereits zugelassen und können auf unserer gesamten Website suchen.',
  },
  bundle: {
    whatIsInTheBox: 'Produkte der Degustationskasse:',
  },
  productDescriptionTab: 'BESCHREIBUNG DES {productTitle}',
}
