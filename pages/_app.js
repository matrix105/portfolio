import { Analytics } from "@vercel/analytics/react";
import "../css/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
