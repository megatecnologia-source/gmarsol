/**
 * Utilitário de Gerenciamento de Consentimento de Cookies (LGPD)
 * Grupo Marsol - Materiais de Construção (www.grupomarsol.com.br)
 */

export interface CookiePreferences {
  necessary: boolean; // Sempre true
  analytics: boolean; // Desempenho e estatísticas
  marketing: boolean; // Publicidade e remarketing
  updatedAt: string;  // ISO timestamp da decisão
  status: 'all' | 'necessary' | 'custom';
}

export const COOKIE_STORAGE_KEY = 'marsol_cookie_consent';
export const OPEN_MODAL_EVENT = 'marsol-open-cookie-modal';
export const CONSENT_UPDATED_EVENT = 'marsol-cookie-consent-updated';

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: '',
  status: 'necessary',
};

/**
 * Obtém as preferências salvas no localStorage do visitante
 */
export function getStoredConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePreferences;
    // Garante que cookies necessários continuem sempre ativos
    parsed.necessary = true;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Salva as preferências de consentimento no localStorage e notifica ouvintes
 */
export function saveConsent(
  prefs: { analytics: boolean; marketing: boolean },
  status: 'all' | 'necessary' | 'custom'
): CookiePreferences {
  const completePrefs: CookiePreferences = {
    necessary: true,
    analytics: prefs.analytics,
    marketing: prefs.marketing,
    updatedAt: new Date().toISOString(),
    status,
  };

  try {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(completePrefs));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent(CONSENT_UPDATED_EVENT, { detail: completePrefs })
      );
    }
  } catch (err) {
    console.error('Falha ao salvar preferências de cookies:', err);
  }

  return completePrefs;
}

/**
 * Aceitar todas as categorias opcionais
 */
export function acceptAllCookies(): CookiePreferences {
  return saveConsent({ analytics: true, marketing: true }, 'all');
}

/**
 * Recusar todas as categorias opcionais (mantendo apenas estritamente necessários)
 */
export function rejectOptionalCookies(): CookiePreferences {
  return saveConsent({ analytics: false, marketing: false }, 'necessary');
}

/**
 * Abre o modal de customização de preferências disparando um evento global
 */
export function openCookiePreferencesModal(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OPEN_MODAL_EVENT));
  }
}
