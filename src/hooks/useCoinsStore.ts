import { CoinContentType } from "@/types/coin";
import { create } from "zustand";

interface CoinsStoreType {
  coins: CoinContentType[];
  setCoins: (coins: CoinContentType[]) => void;
  extendsCoins: (coins: CoinContentType[]) => void;
  clearCoins: () => void;
}

const useCoinsStore = create<CoinsStoreType>((set, get) => ({
  coins: [],
  setCoins: (coins) => set({ coins }),
  extendsCoins: (coins) => set({ coins: [...get().coins, ...coins] }),
  clearCoins: () => set({ coins: [] }),
}));

export default useCoinsStore;
