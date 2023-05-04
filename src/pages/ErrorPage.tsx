import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <div>エラーページ</div>
        <p>{error.status}</p>
        <p>{error.statusText}</p>
        <Link to="/">Homeページへ</Link>
      </>
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
