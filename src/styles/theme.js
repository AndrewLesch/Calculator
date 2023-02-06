const font = 'sans-serif';

const boxShadows = ['box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)'];

const size = {
  xs: 400,
  small: 500,
  med: 600,
  large: 700,
};

const mobileThemeStyles = {
  fontSizes: [8, 10, 13, 15],
  width: 45,
  height: 35,
  gridGap: 5,
};

const tabletThemeStyles = {
  fontSizes: [12, 13, 15, 18],
  width: 55,
  height: 40,
  gridGap: 5,
};

const laptopThemeStyles = {
  fontSizes: [16, 17, 21],
  width: 60,
  height: 60,
  gridGap: 15,
};

export const defaultThemeStyles = {
  mobileThemeStyles,
  tabletThemeStyles,
  laptopThemeStyles,
  size,
  boxShadows,
  font,
  spaces: [0, 5, 10, 16, 20, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  borders: [1, 2],
  borderRadiuses: [5, 10],
  width: [75, 110, 210, 280, 1000, 1280],
  height: [40, 50, 55, 65, 105, 400, 550, 620],
};

const defaultLightThemeColor = '#FFFFFF';
const secondLigthThemeColor = '#101010';

const lightThemeColors = {
  colors: {
    layoutBackground: '#CECECE',
    headerBackground: '#434343',
    calculatorBackground: '#FFFFFF',

    notFound: defaultLightThemeColor,
    notFoundBorder: secondLigthThemeColor,
    notFoundText: secondLigthThemeColor,

    keypadButton: defaultLightThemeColor,
    keypadButtonBorder: secondLigthThemeColor,
    keypadText: secondLigthThemeColor,

    controlPanelButton: '#181818',

    calculatorDisplayValue: secondLigthThemeColor,
    calculatorDisplayExp: '#827878',

    historyTitle: secondLigthThemeColor,
    historyElement: secondLigthThemeColor,

    settingsTitle: secondLigthThemeColor,
    themeChangerDescription: secondLigthThemeColor,

    defaultAppBorder: secondLigthThemeColor,

    headerTitle: defaultLightThemeColor,
    headerNavButton: '#9F9F9F',
    headerNavButtonActive: defaultLightThemeColor,
  },
};

const defaultDarkThemeColor = '#181818';
const secondDarkThemeColor = '#FEFEFE';
const borderDarkThemeColor = '#9F9F9F';

const darkThemeColors = {
  colors: {
    layoutBackground: defaultDarkThemeColor,
    headerBackground: '#101010',
    calculatorBackground: '#2a2121',

    notFound: defaultDarkThemeColor,
    notFoundBorder: borderDarkThemeColor,
    notFoundText: secondDarkThemeColor,

    keypadButton: defaultDarkThemeColor,
    keypadButtonBorder: borderDarkThemeColor,
    keypadText: secondDarkThemeColor,

    controlPanelButton: defaultDarkThemeColor,

    calculatorDisplayValue: secondDarkThemeColor,
    calculatorDisplayExp: '#a6a5a5',

    historyTitle: secondDarkThemeColor,
    historyElement: secondDarkThemeColor,

    settingsTitle: secondDarkThemeColor,
    themeChangerDescription: secondDarkThemeColor,

    defaultAppBorder: borderDarkThemeColor,

    headerTitle: secondDarkThemeColor,
    headerNavButton: borderDarkThemeColor,
    headerNavButtonActive: secondDarkThemeColor,
  },
};

export const lightTheme = {
  ...lightThemeColors,
  ...defaultThemeStyles,
};
export const darkTheme = {
  ...darkThemeColors,
  ...defaultThemeStyles,
};
