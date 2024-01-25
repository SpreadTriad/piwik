// Dit zijn de custom dimensions, niet sessie-gerelateerd.
// NB: moeten we nog even nalopen: wat is hiervan een session dimension en wat niet?
export enum PiwikDimension {
  /** Gebruikerstype (al gebruikt door mijn.amsterdam als ProfileType) */
  userType = 1,
  /** Gebruikersstad (al gebruikt door mijn.amsterdam als City) */
  userCity = 2,
  /** Zoekterm gebruikt in zoekmachine */
  searchTerm = 3,
  /** Aantal zoekresultaten */
  searchResultAmount = 4,
  /** Soort zoekopdracht */
  searchType = 5,
  /** Title van het aangeklikte zoekresultaat */
  searchResultTitle = 6,
  /** URL van het aangeklikte zoekresultaat */
  searchResultUrl = 7,
  /** Soort van het aangeklikte zoekresultaat */
  searchResultType = 8,
  /** Het hoeveelste zoekresultaat is aangeklikt (telt van boven) */
  searchResultSelected = 9,
  /** Titel van het content bericht */
  contentTitle = 10,
  /** Onderwerp/Onderwerpen van het content bericht */
  contentSubject = 11,
  /** Team dat het content bericht heeft geschreven */
  contentTeam = 12,
  /** Laatste publicatiedatum van het content bericht */
  contentPublicationDate = 13,
  /** Type van de content (artikel/nieuws) */
  contentType = 14,
  /** Gebruikers filter op intern of extern */
  userIntext = 15,
  /** Zoekmachine soort */
  searchMachine = 16,
  /** Pagina type o.b.v. Amsterdam Content Meetmodel */
  pageType = 17,
  // ... wordt nog aangevuld
}

// We definieren de session dimensions apart, zodat we snappen wat we aan het loggen zijn.
export enum PiwikSessionDimension {
  reduceMotionEnabled = 20,
  locationPermission = 21,
  screenReaderEnabled = 22,
  // ... wordt nog aangevuld
}

// In de app hebben we modules. We gebruiken de categorie om aan te geven bij welke module een log hoort.
// Voor zaken die niet onder een module vallen, gebruiken we "general".
export enum PiwikCategory {
  about = 'about',
  address = 'address',
  constructionWork = 'construction-work',
  constructionWorkEditor = 'construction-work-editor',
  contact = 'contact',
  general = 'general',
  home = 'home',
  onboarding = 'onboarding',
  openWasteContainer = 'open-waste-container',
  redirects = 'redirects',
  reportProblem = 'report-problem',
  user = 'user',
  wasteGuide = 'waste-guide',
}

// De acties die een log kunnen triggeren.
export enum PiwikAction {
  addressAdd = 'addressAdd',
  addressChange = 'addressChange',
  buttonPress = 'buttonPress',
  toForeground = 'toForeground',
  // ... wordt nog aangevuld
}
