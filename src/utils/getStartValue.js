import { HISTORY_LS_KEY} from '@/constants/localStorage'

// Function to get value from LS.
export const getStartValue = key => {
  switch (key) {
    case HISTORY_LS_KEY: {
      const hasData = localStorage.getItem(key)
      return hasData ? JSON.parse(localStorage.getItem(key)) : []
    }

    default: {
      const hasData = localStorage.getItem(key)
      return hasData ? JSON.parse(localStorage.getItem(key)) : ''
    }
  }
}