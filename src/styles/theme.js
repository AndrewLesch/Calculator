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
  width: [40, 45, 65, 70, 190, 1000],
  height: [35, 110, 350, 518, 530],
  gridGap: 5,
};

const tabletThemeStyles = {
  fontSizes: [12, 13, 15, 18],
  width: [55, 90, 140, 270, 280, 575],
  height: [40, 110, 400, 555, 570],
  gridGap: 5,
};

const laptopThemeStyles = {
  fontSizes: [16, 17, 21],
  width: [55, 60, 65, 140, 400, 420, 440],
  height: [60, 110, 645, 735, 750],
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
  width: [75, 110, 210, 280, 330, 700, 740, 950, 1000, 1280],
  height: [40, 50, 55, 65, 105, 130, 520, 600, 620, 630, 670],
};

const defaultLC = '#FFFFFF';
const secondLC = '#101010';
const layoutBackgroundLC = '#CECECE';
const headerBackgroundLC = '#434343';
const keypadButtonActiveLC = '#7175fe';
const keypadButtonActiveTextLC = '#f0f0f0';
const keypadButtonHoverLC = '#e9e9e9';
const controlPanelButtonLC = '#181818';
const controlPanelBackgroundActiveLC = '#8c8ff3';
const controlPanelBackgroundLC = '#f0f0f0';
const controlPanelBackgroundHoverLC = '#ededff';
const calculatorDisplayBackgroundLC = '#e3e3e3';
const calculatorDisplayExpLC = '#827878';
const headerNavButtonLC = '#9F9F9F';

const lightThemeColors = {
  colors: {
    layoutBackground: layoutBackgroundLC,
    headerBackground: headerBackgroundLC,
    calculatorBackground: defaultLC,

    notFound: defaultLC,
    notFoundBorder: secondLC,
    notFoundText: secondLC,

    keypadButton: defaultLC,
    keypadButtonBorder: secondLC,
    keypadText: secondLC,
    keypadButtonActive: keypadButtonActiveLC,
    keypadButtonActiveText: keypadButtonActiveTextLC,
    keypadButtonHover: keypadButtonHoverLC,

    controlPanelButton: controlPanelButtonLC,
    controlPanelBackgroundActive: controlPanelBackgroundActiveLC,
    controlPanelBackground: controlPanelBackgroundLC,
    controlPanelBackgroundHover: controlPanelBackgroundHoverLC,

    calculatorDisplayBackground: calculatorDisplayBackgroundLC,
    calculatorDisplayValue: secondLC,
    calculatorDisplayExp: calculatorDisplayExpLC,

    historyTitle: secondLC,
    historyElement: secondLC,

    settingsTitle: secondLC,
    themeChangerDescription: secondLC,

    defaultAppBorder: secondLC,

    headerTitle: defaultLC,
    headerNavButton: headerNavButtonLC,
    headerNavButtonActive: defaultLC,
  },
};

const defaultDC = '#1e1d1d';
const secondDC = '#FEFEFE';
const borderDC = '#9F9F9F';
const headerBackgroundDC = '#101010';
const calculatorBackgroundDC = '#2a2121';
const keypadTextDC = '#e9e9e9';
const keypadButtonActiveDC = '#682525';
const keypadButtonActiveTextDC = '#f0f0f0';
const keypadButtonHoverDC = '#101010';
const controlPanelBackgroundActiveDC = '#d7abab';
const controlPanelBackgroundDC = '#f0f0f0';
const controlPanelBackgroundHoverDC = '#ededff';
const calculatorDisplayBackgroundDC = '#2e2e2e';
const calculatorDisplayExpDC = '#a6a5a5';

const darkThemeColors = {
  colors: {
    layoutBackground: defaultDC,
    headerBackground: headerBackgroundDC,
    calculatorBackground: calculatorBackgroundDC,

    notFound: defaultDC,
    notFoundBorder: borderDC,
    notFoundText: secondDC,

    keypadButton: defaultDC,
    keypadButtonBorder: borderDC,
    keypadText: keypadTextDC,
    keypadButtonActive: keypadButtonActiveDC,
    keypadButtonActiveText: keypadButtonActiveTextDC,
    keypadButtonHover: keypadButtonHoverDC,

    controlPanelButton: defaultDC,
    controlPanelBackgroundActive: controlPanelBackgroundActiveDC,
    controlPanelBackground: controlPanelBackgroundDC,
    controlPanelBackgroundHover: controlPanelBackgroundHoverDC,

    calculatorDisplayBackground: calculatorDisplayBackgroundDC,
    calculatorDisplayValue: secondDC,
    calculatorDisplayExp: calculatorDisplayExpDC,

    historyTitle: secondDC,
    historyElement: secondDC,

    settingsTitle: secondDC,
    themeChangerDescription: secondDC,

    defaultAppBorder: borderDC,

    headerTitle: secondDC,
    headerNavButton: borderDC,
    headerNavButtonActive: secondDC,
  },
};

const defaultCC = '#7175fe';
const secondCC = '#ffffff';
const defaultTextCC = '#827878';
const layoutBackgroundCC = '#CECECE';
const keypadButtonCC = '#fbfbff';
const keypadTextCC = '#0d0d0d';
const keypadButtonActiveTextCC = '#f0f0f0';
const keypadButtonHoverCC = '#ededff';
const controlPanelButtonCC = '#181818';
const controlPanelBackgroundActiveCC = '#8c8ff3';
const controlPanelBackgroundCC = '#f0f0f0';
const controlPanelBackgroundHoverCC = '#ededff';
const calculatorDisplayBackgroundCC = '#dedeff';
const calculatorDisplayValueCC = '#0d0d0d';
const headerNavButtonActiveCC = '#3539c2';

const colorThemeColors = {
  colors: {
    layoutBackground: layoutBackgroundCC,
    headerBackground: secondCC,
    calculatorBackground: secondCC,

    notFound: secondCC,
    notFoundBorder: defaultTextCC,
    notFoundText: defaultTextCC,

    keypadButton: keypadButtonCC,
    keypadButtonBorder: defaultCC,
    keypadText: keypadTextCC,
    keypadButtonActive: defaultCC,
    keypadButtonActiveText: keypadButtonActiveTextCC,
    keypadButtonHover: keypadButtonHoverCC,

    controlPanelButton: controlPanelButtonCC,
    controlPanelBackgroundActive: controlPanelBackgroundActiveCC,
    controlPanelBackground: controlPanelBackgroundCC,
    controlPanelBackgroundHover: controlPanelBackgroundHoverCC,

    calculatorDisplayBackground: calculatorDisplayBackgroundCC,
    calculatorDisplayValue: calculatorDisplayValueCC,
    calculatorDisplayExp: defaultTextCC,

    historyTitle: defaultTextCC,
    historyElement: defaultTextCC,

    settingsTitle: defaultCC,
    themeChangerDescription: defaultCC,

    defaultAppBorder: defaultCC,

    headerTitle: defaultCC,
    headerNavButton: defaultCC,
    headerNavButtonActive: headerNavButtonActiveCC,
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

export const colorTheme = {
  ...colorThemeColors,
  ...defaultThemeStyles,
};
