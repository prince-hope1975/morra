import React from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppProvider } from "../context";
import Modal from "../Components/modal";
import { useCustomContext } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  const { setShowModal } = useCustomContext();
  return (
    <AppProvider>
      <Modal key={"modal"} />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
