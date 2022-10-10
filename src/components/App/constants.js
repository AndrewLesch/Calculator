import { CURRENT_THEME_LS_KEY } from '@/constants/localStorage'

export const saveThemeToLS = themeKey => localStorage.setItem(CURRENT_THEME_LS_KEY, JSON.stringify(themeKey))