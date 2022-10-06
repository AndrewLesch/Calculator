import { HISTORY_VALUE_LS_KEY, THEME_VALUE_LS_KEY } from "@/constants/localStorage"
import { lightTheme } from "@/styles/theme"

// Функция для получения данных из LS для различных данных.

export const getStartValue = key => {
  switch (key) {
    case HISTORY_VALUE_LS_KEY: {
      const isData = localStorage.getItem(key)
      return isData ? JSON.parse(localStorage.getItem(key)) : []

    }

    default: {
      const isData = localStorage.getItem(key)
      return isData ? JSON.parse(localStorage.getItem(key)) : ""
    }
  }
}