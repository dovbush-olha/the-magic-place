export const COLORS = {
  Background: {
    DarkBlue: 'hsl(224, 100%, 4%)',
    DarkBlue_20: 'hsla(0, 0%, 0%, 0.2)',
  },
  Buttons: {
    Brown_100: 'hsl(40, 43%, 49%)',
    Brown_20: 'hsla(40, 43%, 49%, 0.1)',
  },
  Main: {
    Beige_100: 'hsl(39, 100%, 95%)',
    Beige_20: 'hsla(39, 100%, 95%, 0.2)',
  },
};

export const WEIGHT = {
  medium: 500,
  bold: 700,
};

export const BREAKPOINTS = {
  mobileMax: 550,
  tabletMax: 1100,
  laptopMax: 1500,
};

export const QUERIES = {
  upToMobile: `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
  upToTablet: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  upToLaptop: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.mobileMax / 16}rem) and 
    (max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
};
