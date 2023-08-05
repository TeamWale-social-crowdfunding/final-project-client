import "@/src/styles/globals.css";
import { Flowbite } from "flowbite-react";
import type { AppProps } from "next/app";
import React from "react";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Flowbite>
        <Component {...pageProps} />
      </Flowbite>
    </SessionProvider>
  );
}
export default App;
