import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import styled from "styled-components";

export const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <Wrapper>
        <Container>
          <h1>お探しのページは見つかりませんでした。</h1>
          <p>{error.status}</p>
          <p>{error.statusText}</p>
          <Link to="/">Homeページへ</Link>
        </Container>
      </Wrapper>
    );
  } else {
    return (
      <>
        <p>何かしらのエラーが発生しています。</p>
        <Link to="/">Homeページへ</Link>
      </>
    );
  }
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  text-align: center;
  padding-top: 200px;
`;
