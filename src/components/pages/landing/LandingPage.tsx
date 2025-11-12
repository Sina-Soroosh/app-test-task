"use client";
import CoinCard from "@/components/modules/coinCard/CoinCard";
import CoinCardMobile from "@/components/modules/coinCardMobile/CoinCardMobile";
import useCoinsStore from "@/hooks/useCoinsStore";
import SyncCoin from "./SyncCoin";

function LandingPage() {
  const { coins } = useCoinsStore();

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
              {coins.map((coin) => (
                <CoinCard key={coin.id} data={coin} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden p-4 gap-2 grid grid-cols-1 sm:grid-cols-2">
          {coins.map((coin) => (
            <CoinCardMobile key={coin.id} data={coin} />
          ))}
        </div>
      </div>

      <SyncCoin />
    </>
  );
}

export default LandingPage;
