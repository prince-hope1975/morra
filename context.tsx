import React, {
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
export type meta = {
  id: number;
  img: string;
  price: number;
  time_in_secs: number;
  desc: string | undefined;
  owner: string;
  previous_prices: number[];
  contractInfo?: any;
};

const AppContext = React.createContext(
  {} as {
    dispatch: React.Dispatch<{
      type: "SET_FALLBACK";
      payload: "myalgo" | "pera";
    }>;
    state: any;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setState: React.Dispatch<React.SetStateAction<{}>>;
    wallet: any;
    setWallet: React.Dispatch<React.SetStateAction<{}>>;
    appState: {
      fallback: null | "myalgo" | "pera";
    };
    modalMessage: any;
    setModalMessage: React.Dispatch<any>;
    metadata: meta;
    setMetadata: React.Dispatch<React.SetStateAction<meta>>;
  }
);
export const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState({});
  const [wallet, setWallet] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [modalMessage, setModalMessage] = useState("Hello" as any);
  const [metadata, setMetadata] = useState({
    id: 0,
    img: "",
    price: 0,
    time_in_secs: 0,
    desc: "",
    owner: "",
    previous_prices: [],
  });
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        wallet,
        setWallet,
        modalMessage,
        setModalMessage,
        showModal,
        setShowModal,
        metadata,
        data,
        setData,
        // @ts-ignore
        setMetadata,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useCustomContext = () => useContext(AppContext);
