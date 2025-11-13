import { CoinContentType } from "@/types/coin";
import { create } from "zustand";

/*
  ? coins : List of coins for display.

  ? isLoading : Flag to handle displaying the skeleton loading.
  
  ? limit : Number of records returned by the Coins API.
  
  ? start : Which record to start returning from.

  ? totalCount : Total number of records available in the main database.
  
  ? error : Error message occurred.
*/

interface CoinsStoreType {
  coins: CoinContentType[];
  isLoading: boolean;
  limit: number;
  start: number;
  totalCount: number;
  error: string;
  setCoins: (coins: CoinContentType[]) => void;
  extendsCoins: (coins: CoinContentType[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setLimit: (limit: number) => void;
  setStart: (start: number) => void;
  setTotalCount: (totalCount: number) => void;
  setError: (error: string) => void;
}

const useCoinsStore = create<CoinsStoreType>((set, get) => ({
  coins: [],
  limit: 10,
  start: 1,
  totalCount: 0,
  isLoading: false,
  error: "",
  setCoins: (coins) => set({ coins }),
  extendsCoins: (coins) => set({ coins: [...get().coins, ...coins] }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setStart: (start) => set({ start }),
  setLimit: (limit) => set({ limit }),
  setTotalCount: (totalCount) => set({ totalCount }),
  setError: (error) => set({ error }),
}));

export default useCoinsStore;
