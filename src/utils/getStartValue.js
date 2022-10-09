import { HISTORY_LS_KEY, CURRENT_THEME_LS_KEY } from "@/constants/localStorage"
import { lightTheme } from "@/styles/theme"

// Function to get value from LS.

export const getStartValue = key => {
  switch (key) {
    case HISTORY_LS_KEY: {
      const hasData = localStorage.getItem(key)
      return hasData ? JSON.parse(localStorage.getItem(key)) : []
    }

    case CURRENT_THEME_LS_KEY: {
      const hasData = localStorage.getItem(key)
      return hasData ? JSON.parse(localStorage.getItem(key)) : lightTheme
    }

    default: {
      const hasData = localStorage.getItem(key)
      return hasData ? JSON.parse(localStorage.getItem(key)) : ""
    }
  }
}