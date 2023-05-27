import { ReactNode } from "react";
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Banner>test</Banner>
      <FormSection>{children}</FormSection>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const Banner = styled.div`
  background-color: blue;

  ${({ theme }) => theme.mediaQuery.sm`
    background-color: red;
    display: none
  `}

  flex: 1;
`;

const FormSection = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;
