"use client";

import { createGlobalStyle, css } from "styled-components";
import { colors, fontSizes, gapSizes, screenSizes, Theme } from "./theme";
import { rgba } from "polished";

export const LinkStyle = css`
  color: ${(props) => props.theme.accent};
  cursor: pointer;
`;

export const GlobalStyles = createGlobalStyle`

  :root{
    transition: margin 300ms ease-in-out;
    --pageMargin: 80px;
    @media (max-width: ${screenSizes.L}px) {
      --pageMargin: 40px;
    }
    @media (max-width: ${screenSizes.M}px) {
      --pageMargin: 20px;
    }
  }
  h1,h2,h3,h4{
    margin: 0;
  }
  h1 {
  }
  h2 {
    
  }
  h3 {
    
  }
  h4 {
    
  }
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.primary};
  }
  html,
  body {
    font-size: 16px;
    height: 100%;
    scroll-behavior: smooth;
    width: 100%;
  }
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.backGroundColor};

  }
  *::-webkit-scrollbar {
    width: 12px;
    background-color: ${rgba(81, 111, 119, 0.101961)};
    border-radius: 4px;
  }
  *::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    background-color: #9CA6AD;
    border-radius: 20px;
    background-clip: content-box;
  }
  #root{
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    max-width: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;

  }
  a{

    text-decoration: none;
    color: ${(props) => props.theme.white};
  }
  label {
    font-size: ${fontSizes.XS};
    position: relative;
    color: ${(props) => props.theme.label};
  }
  input:disabled ~ label{
   color: red;
  }
  input[type="checkbox"] {
  -webkit-appearance: radio;
  -moz-appearance: radio;
  -ms-appearance: radio; 
  }
  
  button {
    font-size: 16px;
    margin: 0;
    padding: 8px 12px;
  }
  hr {
    
    border: 0;
  }
  a {
    ${LinkStyle};
  }
  a.disabled {
    pointer-events: none;
  }
  svg{
    overflow: visible;
    + span {
      margin-left: ${gapSizes.S};
    }
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  .no-scroll {
  overflow: hidden;
}



`;
