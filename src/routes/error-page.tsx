import { useRouteError } from "react-router-dom"; // Replace with the correct import

export default function ErrorPage() {
  const error = useRouteError(); // Replace with your custom hook
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected ciao.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
