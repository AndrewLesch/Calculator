import { CURRENT_THEME_LS_KEY } from '@/constants/localStorage'

export const saveThemeToLS = theme => localStorage.setItem(CURRENT_THEME_LS_KEY, JSON.stringify(theme))