"use client";

import { ThemeProvider } from "styled-components";
import { Themes, getTheme } from "./theme";
import StyledComponentsRegistry from "@/lib/registry";

export const Providers = (props: React.PropsWithChildren) => {
  const theme = { ...getTheme(Themes.LIGHT), selected: Themes.LIGHT };
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};


