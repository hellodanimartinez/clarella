export const languages = {
  ca: 'Cat',
  es: 'Esp',
  en: 'En',
} as const;

export const defaultLang = 'ca' as const;

export type Lang = keyof typeof languages;

export const ui = {
  ca: {
    // Nav
    'nav.home': 'CLARELLA',
    'nav.history': 'HISTORIA',
    'nav.wines': 'VINS',
    'nav.events': 'ESDEVENIMENTS',
    'nav.contact': 'CONTACTE',
    'nav.visit': 'VISITA CLARELLA',

    // Footer
    'footer.tagline': 'Un Mas de la Vall de Besora\nCeller de Vins de Muntanya, Enoturisme, Cultura i Història',
    'footer.contact': 'CONTACTE',
    'footer.legal': 'INFORMACIÓ LEGAL',
    'footer.legal.notice': 'Avís legal',
    'footer.legal.privacy': 'Política de privacitat',
    'footer.legal.cookies': 'Política de cookies',
    'footer.legal.sitemap': 'Sitemap',

    // Common
    'common.learnMore': 'Saber més',
    'common.bookNow': 'RESERVA ARA',

    // Cookie consent
    'cookie.title': 'Gestionar consentiment',
    'cookie.text': 'Per oferir les millors experiències, utilitzem tecnologies com les galetes per emmagatzemar i/o accedir a la informació del dispositiu. El consentiment d\'aquestes tecnologies ens permetrà processar dades com ara el comportament de navegació o les identificacions úniques en aquest lloc. No consentir o retirar el consentiment, pot afectar negativament certes característiques i funcions.',
    'cookie.accept': 'ACCEPTAR',
    'cookie.deny': 'DENEGAR',
    'cookie.policyLink': 'Política de cookies',
    'cookie.privacyLink': 'Política de privacitat',
  },
  es: {
    'nav.home': 'CLARELLA',
    'nav.history': 'HISTORIA',
    'nav.wines': 'VINOS',
    'nav.events': 'EVENTOS',
    'nav.contact': 'CONTACTO',
    'nav.visit': 'VISITA CLARELLA',
    'footer.tagline': 'Un Mas de la Vall de Besora\nBodega de Vinos de Montaña, Enoturismo, Cultura e Historia',
    'footer.contact': 'CONTACTO',
    'footer.legal': 'INFORMACIÓN LEGAL',
    'footer.legal.notice': 'Aviso legal',
    'footer.legal.privacy': 'Política de privacidad',
    'footer.legal.cookies': 'Política de cookies',
    'footer.legal.sitemap': 'Sitemap',
    'common.learnMore': 'Saber más',
    'common.bookNow': 'RESERVAR AHORA',
    'cookie.title': 'Gestionar consentimiento',
    'cookie.text': 'Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies para almacenar y/o acceder a la información del dispositivo.',
    'cookie.accept': 'ACEPTAR',
    'cookie.deny': 'DENEGAR',
    'cookie.policyLink': 'Política de cookies',
    'cookie.privacyLink': 'Política de privacidad',
  },
  en: {
    'nav.home': 'CLARELLA',
    'nav.history': 'HISTORY',
    'nav.wines': 'OUR WINES',
    'nav.events': 'EVENTS',
    'nav.contact': 'CONTACT',
    'nav.visit': 'VISIT CLARELLA',
    'footer.tagline': 'A Farmhouse in the Besora Valley\nMountain Wine Cellar, Wine Tourism, Culture & History',
    'footer.contact': 'CONTACT',
    'footer.legal': 'LEGAL INFORMATION',
    'footer.legal.notice': 'Legal notice',
    'footer.legal.privacy': 'Privacy policy',
    'footer.legal.cookies': 'Cookie policy',
    'footer.legal.sitemap': 'Sitemap',
    'common.learnMore': 'Learn more',
    'common.bookNow': 'BOOK NOW',
    'cookie.title': 'Manage consent',
    'cookie.text': 'To offer the best experiences, we use technologies like cookies to store and/or access device information.',
    'cookie.accept': 'ACCEPT',
    'cookie.deny': 'DENY',
    'cookie.policyLink': 'Cookie policy',
    'cookie.privacyLink': 'Privacy policy',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return (ui[lang] as any)?.[key] || ui[defaultLang][key] || key;
  };
}

export function getLocalePath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

/** Maps for translated URL slugs per language */
export const routes: Record<Lang, Record<string, string>> = {
  ca: {
    '/': '/',
    '/historia': '/historia',
    '/el-mas-clarella': '/el-mas-clarella',
    '/els-nostres-vins': '/els-nostres-vins',
    '/visites-i-maridatges': '/visites-i-maridatges',
    '/contacte': '/contacte',
  },
  es: {
    '/': '/',
    '/historia': '/historia',
    '/el-mas-clarella': '/el-mas-clarella',
    '/els-nostres-vins': '/nuestros-vinos',
    '/visites-i-maridatges': '/visitas-y-maridajes',
    '/contacte': '/contacto',
  },
  en: {
    '/': '/',
    '/historia': '/history',
    '/el-mas-clarella': '/the-farmhouse',
    '/els-nostres-vins': '/our-wines',
    '/visites-i-maridatges': '/visits-and-pairings',
    '/contacte': '/contact',
  },
};

export function getRouteForLang(lang: Lang, caPath: string): string {
  const translatedPath = routes[lang]?.[caPath] || caPath;
  if (lang === defaultLang) return translatedPath;
  return `/${lang}${translatedPath}`;
}
