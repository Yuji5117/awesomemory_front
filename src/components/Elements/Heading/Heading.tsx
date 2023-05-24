import { ReactNode } from "react";
import styled from "styled-components";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

type HeadingProps = {
  headingLevel?: HeadingLevel;
  children: ReactNode;
};

export const Heading = ({ headingLevel = "h1", children }: HeadingProps) => {
  return <StyledHeading as={headingLevel}>{children}</StyledHeading>;
};

const StyledHeading = styled.h1``;
