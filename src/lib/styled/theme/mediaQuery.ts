import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from "styled-components";

export const mediaQuery = {
  sm: (
    sm: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`
    @media (max-width: 560px) {
      ${css(sm, ...interpolations)}
    }
  `,
  md: (
    md: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`
    @media (min-width: 561px) and (max-width: 1024px) {
      ${css(md, ...interpolations)}
    }
  `,
  lg: (
    xl: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`
    @media (min-width: 1025px) {
      ${css(xl, ...interpolations)}
    }
  `,
};
