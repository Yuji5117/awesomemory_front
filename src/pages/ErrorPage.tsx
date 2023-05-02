import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div>エラーページ</div>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Homeページへ</Link>
    </>
  );
};
