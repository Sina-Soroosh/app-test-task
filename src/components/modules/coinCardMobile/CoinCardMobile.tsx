import { CoinContentType } from "@/types/coin";
import { getIconPercent } from "@/utils/getIconPercent";
import { ArrowDown3 } from "iconsax-react";
import Image from "next/image";

interface Props {
  data: CoinContentType;
}

function CoinCardMobile({ data }: Props) {
  return (
    <>
      <div className="flex flex-col gap-2 border border-gray p-2 rounded-lg w-full bg-main">
        <div className="flex items-center gap-1.5">
          <Image
            alt={data.name}
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${data.id}.png`}
            width={28}
            height={28}
            loading="lazy"
          />

          <span className="text-base text-white">{data.name}</span>

          <span className="text-sm text-gray2">{data.symbol}</span>
        </div>

        <div className="flex w-full justify-between">
          <span className="text-base font-bold text-white">Price :</span>

          <span className="text-base text-white">${data.price}</span>
        </div>

        <div className="flex w-full justify-between">
          <span className="text-base font-bold text-white">1h % :‌</span>

          <div
            className={`flex items-center gap-1 text-base ${
              data.percentChange1h > 0 ? "text-green" : "text-red"
            }`}
          >
            {getIconPercent(data.percentChange1h)}
            {Math.abs(data.percentChange1h).toFixed(2)}%
          </div>
        </div>

        <div className="flex w-full justify-between">
          <span className="text-base font-bold text-white">24h % :‌</span>

          <div
            className={`flex items-center gap-1 text-base ${
              data.percentChange24h > 0 ? "text-green" : "text-red"
            }`}
          >
            {getIconPercent(data.percentChange24h)}
            {Math.abs(data.percentChange24h).toFixed(2)}%
          </div>
        </div>

        <div className="flex w-full justify-between">
          <span className="text-base font-bold text-white"> 7d % :‌</span>

          <div
            className={`flex items-center gap-1 text-base ${
              data.percentChange7d > 0 ? "text-green" : "text-red"
            }`}
          >
            {getIconPercent(data.percentChange7d)}
            {Math.abs(data.percentChange7d).toFixed(2)}%
          </div>
        </div>

        <div className="flex w-full justify-between">
          <span className="text-base font-bold text-white"> Market Cap :‌</span>

          <span className="text-base text-white">
            {" "}
            ${data.marketCapByTotalSupply?.toLocaleString()}
          </span>
        </div>

        <div className="flex w-full justify-between">
          <span className="text-base font-bold text-white">
            {" "}
            Volume(24h) :{" "}
          </span>
          <span className="text-base text-white">
            ${data.volume24h?.toLocaleString()}
          </span>
        </div>

        <div className="flex w-full justify-between">
          <span className="text-base font-bold text-white">
            {" "}
            Last 7 Days :‌
          </span>
          <span className="text-base text-white">
            <Image
              alt={data.name}
              src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${data.id}.svg`}
              width={100}
              height={40}
              loading="lazy"
              className={
                data.percentChange7d > 0
                  ? "hue-rotate-[85deg]"
                  : "hue-rotate-[300deg]"
              }
            />{" "}
          </span>
        </div>
      </div>
    </>
  );
}

export default CoinCardMobile;
