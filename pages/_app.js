import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "../css/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap");
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </React.Fragment>
  );
};

export default MyApp;
