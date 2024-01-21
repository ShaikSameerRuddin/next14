import { rgba } from "polished";

export const headerHeight = "80px";

export interface Sizes {
  XXS: number | string;
  XS: number | string;
  S: number | string;
  M: number | string;
  L: number | string;
  XL: number | string;
  XXL: number | string;
}

export const gapSizes: Partial<Sizes> = {
  S: "10px",
  M: "20px",
  L: "30px",
  XL: "40px",
  XXL: "50px",
};

export const screenSizes: Partial<Sizes> = {
  XS: 480,
  S: 640,
  M: 800,
  L: 1024,
  XL: 1280,
  XXL: 1320,
  // XXXL: 1600,
  // XXXXL: 2550,
};

export const fontSizes: Sizes = {
  XXS: "14px",
  XS: "16px",
  S: "18px",
  M: "24px",
  L: "32px",
  XL: "36px",
  XXL: "48px",
};

export const lineHeights: Sizes = {
  XXS: "14px",
  XS: "24px",
  S: "18px",
  M: "24px",
  L: "32px",
  XL: "36px",
  XXL: "48px",
};

export const textAreaSizes = {
  S: "92px",
  M: "108px",
  L: "128px",
};

interface ThemeWithStates {
  [propName: string]: string;
}

export interface Colors {
  violet: string;
  white: string;
  dark: string;
  red: string;
  whiteLilac: string;
  lavender: string;
  grey: string;
  pureWhite: string;
  darkGrey: string;
  pureBlue: string;
  darkNavy: string;
  meteorite: string;
  russianViolet: string
}

export const colors: Colors = {
  violet: "#09061F",
  white: "#f2f2f2",
  dark: "#1E232C",
  red: "#FF5656",
  whiteLilac: "#F7F8F9",
  lavender: "#E8ECF4",
  grey: "#8391A1",
  pureWhite: "#FFFFFF",
  darkGrey: "#6A707C",
  pureBlue: "#1770FF",
  darkNavy: "#0B0429",
  meteorite: "#30246C",
  russianViolet: "#282149",
};

export interface Theme {
  [propName: string]:
  | string
  | ThemeWithStates
  | { [propName: string]: ThemeWithStates }
  | undefined;
  primary: string;
  textColor: string;
  white: string;
  authButtonColor: string;
  errorRedTextColor: string;
  authInputBgColor: string;
  authInputBorderColor: string;
  authInputTextColor: string;
  authTextColor: string;
  headerBgCOlor: string;
}

export const basicTheme: Theme = {
  primary: colors.violet,
  textColor: colors.white,
  white: colors.white,
  authButtonColor: colors.dark,
  errorRedTextColor: colors.red,
  authInputBgColor: colors.whiteLilac,
  authInputBorderColor: colors.lavender,
  authInputTextColor: colors.dark,
  authTextColor: colors.dark,
  headerBgCOlor: colors.violet,
};

export const lightTheme: Theme = {
  primary: colors.violet,
  textColor: colors.white,
  white: colors.white,
  authButtonColor: colors.dark,
  errorRedTextColor: colors.red,
  authInputBgColor: colors.whiteLilac,
  authInputBorderColor: colors.lavender,
  authInputTextColor: colors.dark,
  authTextColor: colors.dark,
  headerBgCOlor: colors.violet,
};

export enum Themes {
  BASIC,
  LIGHT,
}

export const getTheme = (theme: Themes) => {
  switch (theme) {
    case Themes.BASIC:
      return basicTheme;
    case Themes.LIGHT:
      return lightTheme;
    default:
      return basicTheme;
  }
};