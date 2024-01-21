import styled, { css, keyframes,  } from "styled-components";
import {
  fontSizes,
  screenSizes,
  gapSizes,
  Theme,
  colors,
  Themes,
  lineHeights,
} from "./theme";

export const pageContentWidth = screenSizes.XXL;

export const PageContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: calc(100% - 2 * var(--pageMargin));
  max-width: ${pageContentWidth}px;
  margin: 0 auto;
  min-height: auto;
  /* padding: ${(props) => (!props.noPadding ? `${gapSizes.XXL} 0 ` : "0")}; */
  transition: all 300ms ease-in-out;
`;

export const FlexCol = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  ${(props) => props.flex && `flex: ${props.flex};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
`;
export const FlexRow = styled.div<any>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.gap ? props.gap : "")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
`;

export const ErrorText = styled.div`
  color: ${(props) => props.theme.errorRedTextColor};
  padding: 5px 0;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 12px;
`;

export const HorizontalLine = styled.hr<any>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#E8ECF4")};
  margin: ${(props) => (props.margin ? props.margin : "10px 0")};
`;

export const FormSubmit = styled.form`
  width: 100%;
`;

export const Paragraph = styled.p`
  color: #f0f0f0;
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
`;

export const H1 = styled.h1`
  font-size: 48px;
  font-family: UrbanistBold;
  color: #fafafa;
  @media (max-width: ${screenSizes.L}px) {
    font-size: 30px;
  }
  @media (max-width: ${screenSizes.XS}px) {
    font-size: 20px;
  }
`;

export const H2 = styled.h2`
  font-size: 40px;
  font-family: UrbanistBold;
  color: #fafafa;
  margin-bottom: 15px;
  @media (max-width: ${screenSizes.L}px) {
    font-size: 28px;
  }
  @media (max-width: ${screenSizes.XS}px) {
    font-size: 20px;
  }
`;

export const H3 = styled.h3`
  font-size: 30px;
  font-family: UrbanistBold;
  color: #fafafa;
`;

export const TagsInputContainer = styled.div<any>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  background-color: ${colors.darkNavy};
  border: 1px solid ${colors.meteorite};
  padding: 5px;
  border-radius: 8px;
  margin: 0 0 30px;
  opacity: 0.8;
  max-height: 80px;
  overflow: auto;

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #100835;
    color: ${colors.pureWhite};
    padding: 3px 6px;
    border-radius: 20px;
    margin-right: 5px;
    border: 1px solid #30246c;
    font-family: Urbanist;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }
  .tag img {
    cursor: pointer;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    background-color: ${colors.darkNavy};
    color: ${colors.pureWhite};
    font-family: Urbanist;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    padding: 9px;
    &::placeholder {
      color: ${(props) => props.placeholderColor || colors.grey};
      font-size: 16px;
    }
  }

  &:focus,
  :hover {
    opacity: 1;
    border: 1px solid ${colors.meteorite};
  }
`;

export const CharacterCount = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 10px;
  color: ${colors.pureWhite};
  opacity: 0.6;
`;



