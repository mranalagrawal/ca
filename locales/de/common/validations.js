import validation from 'vee-validate/dist/locale/de.json'

export default {
  validations: {
    code: validation.code,
    messages: {
      ...validation.messages,
      oneLowerCase: 'ein Kleinbuchstabe',
      oneNumber: 'eine Zahl',
      oneSpecialChar: 'ein besonderer Charakter',
      oneUpperCase: 'ein Großbuchstabe',
    },
    password: {
      effectiveness: 'Kennwortwirksamkeit',
      min: 'mindestens 8 Zeichen',
      oneLowerCase: 'ein kleiner Buchstabe',
      oneNumber: 'eine Nummer',
      oneSpecialChar: 'ein Sonderzeichen',
      oneUpperCase: 'ein Großbuchstabe',
      title: 'Passwort muss enthalten:',
    },
    fields: {
      'checkout_billing_address_address1': 'Adresse und Hausnummer',
      'checkout_billing_address_city': 'Stadt',
      'checkout_billing_address_company': 'Firma (optional)',
      'checkout_billing_address_country': 'Land',
      'checkout_billing_address_first_name': 'Name',
      'checkout_billing_address_invoice_type': 'Rechnungstyp',
      'checkout_billing_address_last_name': 'Familienname, Nachname',
      'checkout_billing_address_province': 'Provinz',
      'checkout_billing_address_zip': 'PLZ',
      'checkout_invoice_company_name': 'Firmenname',
      'checkout_invoice_company_pec': 'PEC',
      'checkout_invoice_company_vat': 'MwSt.',
      'checkout_invoice_private_taxcode': 'Steuernummer',
      'contact-first-name': 'Name',
      'contact-last-name': 'Familienname, Nachname',
      'contact-user-email': 'Email',
      'customer-edit-email': 'Email',
      'customer-edit-firstname': 'Vorname',
      'customer-edit-lastname': 'Familienname, Nachname',
      'customer-edit-password': 'Passwort',
      'customer-edit-phone': 'Telefon',
      'message': 'Nachricht',
      'new-password': 'Passwortd',
      'newsletter-checkbox': 'newsletter',
      'newsletter-footer-checkbox': 'newsletter',
      'notify-me-user-email': 'Email',
      'phone': 'Telefon',
      'privacy': 'Datenschutz',
      'register-business-name': 'Firmenname',
      'register-business-type': 'Geschäftsbereich',
      'register-phone': 'Telefon',
      'register-user-email': 'EEmail',
      'register-user-firstname': 'Name',
      'register-user-lastname': 'Familienname, Nachname',
      'register-vat-number': 'MwSt.',
      'user-email': 'Email',
      'user-email-navbar': 'Email',
      'user-email-newsletter': 'Email',
      'user-password': 'Passwort',
      'user-password-navbar': 'Passwort',
    },
  },
}
