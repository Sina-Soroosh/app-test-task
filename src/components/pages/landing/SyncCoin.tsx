"use client";

import { fetchCoins } from "@/api/coins";
import useCoinsStore from "@/hooks/useCoinsStore";
import { CoinContentType, CryptoContentType } from "@/types/coin";
import { convertToCoinType } from "@/utils/convertType";
import { db } from "@/utils/db";
import { useEffect } from "react";
import { useInterval } from "usehooks-ts";

function SyncCoin() {
  const {
    setIsLoading,
    setCoins,
    setError,
    start,
    limit,
    setTotalCount,
    coins,
  } = useCoinsStore();

  const fetchNewCoins = async () => {
    try {
      // If we are on the initial display, do not show the loading indicator.
      if (coins.length !== 10) setIsLoading(true);

      const data = await fetchCoins(start, limit);

      if (data.data.cryptoCurrencyList.length > 0) {
        setError("");
        const cryptoList = data.data.cryptoCurrencyList;

        // If the data starts from rank 1, it should be stored in IndexedDB.
        if (start === 1) {
          await db.coin.clear();
        }

        const coins: CoinContentType[] = [];

        cryptoList.forEach(async (crypto) => {
          // Convert to Coin type for storage.
          const coin = convertToCoinType(crypto);

          coins.push(coin);

          if (start === 1) {
            await db.coin.put(coin);
          }
        });

        setCoins(coins);
        setTotalCount(+data.data.totalCount || 0);
      } else {
        setError("Error to get Data , Try again!!");
      }
    } catch (error) {
      setError("Error to get Data , Try again!!");
    }

    setIsLoading(false);
  };

  // Update data every 2 minutes.
  useInterval(fetchNewCoins, 120000);

  useEffect(() => {
    fetchNewCoins();
  }, [start, limit]);

  return <></>;
}

export default SyncCoin;
