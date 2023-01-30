import { HISTORY_LS_KEY } from '@/constants/localStorage';

export default function getStartValue(key) {
  switch (key) {
    case HISTORY_LS_KEY: {
      const hasData = localStorage.getItem(key);
      return hasData ? JSON.parse(localStorage.getItem(key)) : [];
    }

    default: {
      const hasData = localStorage.getItem(key);
      return hasData ? JSON.parse(localStorage.getItem(key)) : '';
    }
  }
}
