import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "../lib/LanguageContext";
import "../css/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
      <Analytics />
    </LanguageProvider>
  );
}
