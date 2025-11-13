"use client";
import CoinCard from "@/components/modules/coinCard/CoinCard";
import CoinCardMobile from "@/components/modules/coinCardMobile/CoinCardMobile";
import useCoinsStore from "@/hooks/useCoinsStore";
import SyncCoin from "./SyncCoin";
import CoinCardSkeleton from "@/components/modules/Skeleton/CoinCardSkeleton";
import CoinCardMobileSkeleton from "@/components/modules/Skeleton/CoinCardMobileSkeleton";
import Pagination from "./Pagination";
import { useEffect } from "react";
import { db } from "@/utils/db";

function LandingPage() {
  const { coins, setLimit, limit, isLoading, error, setCoins, setIsLoading } =
    useCoinsStore();

  const getFromIndexDb = async () => {
    setIsLoading(true);
    // Retrieving data from IndexedDB
    const data = await db.coin.toArray();

    if (data.length > 0) {
      // Sorting by rank
      data.sort((first, second) => first.cmcRank - second.cmcRank);

      setCoins(data.slice(0, limit));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getFromIndexDb();
  }, []);

  const showMoreHandler = () => {
    setLimit(50);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="p-10 hidden lg:block">
          <table className="w-full">
            <thead>
              <tr className="border-y border-gray">
                <th className="text-sm lg:text-base text-white text-left py-1">
                  #
                </th>
                <th className="text-sm lg:text-base text-white text-left py-1">
                  Name
                </th>
                <th className="text-sm lg:text-base text-white text-left py-1">
                  Price
                </th>
                <th className="text-sm lg:text-base text-white text-left py-1">
                  1h %
                </th>
                <th className="text-sm lg:text-base text-white text-left py-1">
                  24h %
                </th>
                <th className="text-sm lg:text-base text-white text-left py-1">
                  7d %
                </th>
                <th className="text-sm lg:text-base text-white text-left py-1">
                  Market Cap
                </th>
                <th className="text-sm lg:text-base text-white text-left py-1">
                  Volume(24h)
                </th>
                <th className="text-sm lg:text-base text-white text-left py-1">
                  Last 7 Days
                </th>
              </tr>
            </thead>

            <tbody>
              {isLoading ? (
                <>
                  <CoinCardSkeleton />
                  <CoinCardSkeleton />
                  <CoinCardSkeleton />
                  <CoinCardSkeleton />
                </>
              ) : (
                coins.map((coin) => <CoinCard key={coin.id} data={coin} />)
              )}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden p-4 gap-2 grid grid-cols-1 sm:grid-cols-2">
          {isLoading ? (
            <>
              <CoinCardMobileSkeleton />
              <CoinCardMobileSkeleton />
              <CoinCardMobileSkeleton />
              <CoinCardMobileSkeleton />
            </>
          ) : (
            coins.map((coin) => <CoinCardMobile key={coin.id} data={coin} />)
          )}
        </div>

        {limit === 10 && !isLoading && error.length === 0 ? (
          <button
            onClick={showMoreHandler}
            className="p-4 bg-transparent border border-gray2 rounded-xl text-gray2 transition-all hover:bg-gray2 hover:text-gray cursor-pointer w-fit m-auto"
          >
            Show More...
          </button>
        ) : null}

        {limit !== 10 && !isLoading && error.length === 0 ? (
          <Pagination />
        ) : null}

        {!isLoading && error && coins.length > 0 ? (
          <div className="w-full px-10">
            <p className="py-3 px-2 bg-red-300 text-red text-center rounded-lg">
              {error}
            </p>
          </div>
        ) : null}
      </div>

      <SyncCoin />
    </>
  );
}

export default LandingPage;
