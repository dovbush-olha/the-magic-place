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
