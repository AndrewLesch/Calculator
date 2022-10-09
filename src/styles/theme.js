import { css } from 'styled-components'

const font = 'sans-serif'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const defaultThemeStyles = {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
}

const lightThemeColors = {
  key: "lightTheme",
  colors: {
    layoutBackground: "#CECECE",
    headerBackground: "#434343",
    calculatorBackground: "#FFFFFF",

    keypadButton: "#FEFEFE",
    keypadButtonBorder: "#101010",
    keypadText: "#101010",

    controlPanelButton: "#181818",

    calculatorDisplayText: "#101010",

    historyTitle: "#101010",
    historyElement: "#101010",

    settingsTitle: "#101010",
    themeChangerDescription: "#101010",

    defaultAppBorder: "#101010",

    headerTitle: "#FEFEFE",
    headerNavButton: "#9F9F9F",
    headerNavButtonActive: "#FEFEFE",
  },
}

const darkThemeColors = {
  key: "darkTheme",
  colors: {
    layoutBackground: "#181818",
    headerBackground: "#101010",
    calculatorBackground: "#2a2121",

    keypadButton: "#181818",
    keypadButtonBorder: "#9F9F9F",
    keypadText: "#FEFEFE",

    controlPanelButton: "#181818",

    calculatorDisplayText: "#FEFEFE",

    historyTitle: "#FEFEFE",
    historyElement: "#FEFEFE",

    settingsTitle: "#FEFEFE",
    themeChangerDescription: "#FEFEFE",

    defaultAppBorder: "#9F9F9F",

    headerTitle: "#FEFEFE",
    headerNavButton: "#9F9F9F",
    headerNavButtonActive: "#FEFEFE",
  },
}

export const lightTheme = { ...lightThemeColors, ...defaultThemeStyles }
export const darkTheme = { ...darkThemeColors, ...defaultThemeStyles }