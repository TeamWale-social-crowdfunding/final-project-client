import "@/src/styles/globals.css";
import { Flowbite } from "flowbite-react";
import type { AppProps } from "next/app";
import React from "react";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Flowbite>
      <Component {...pageProps} />
    </Flowbite>
  );
}
export default App;
