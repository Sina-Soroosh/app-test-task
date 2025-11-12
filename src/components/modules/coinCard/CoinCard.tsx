import { CoinContentType } from "@/types/coin";
import { getIconPercent } from "@/utils/getIconPercent";
import { ArrowDown3, ArrowUp3 } from "iconsax-react";
import Image from "next/image";

interface Props {
  data: CoinContentType;
}

function CoinCard({ data }: Props) {
  return (
    <>
      <tr className="border-b border-gray">
        <td className="text-sm lg:text-base text-white text-left py-1 ">1</td>
        <td className="py-1">
          <div className="flex items-center gap-1.5">
            <Image
              alt={data.name}
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${data.id}.png`}
              width={24}
              height={24}
              loading="lazy"
            />

            <span className="text-sm lg:text-base text-white">{data.name}</span>

            <span className="text-xs lg:text-sm text-gray2">{data.symbol}</span>
          </div>
        </td>
        <td className=" text-left py-1">
          <span className="text-sm lg:text-base text-white">${data.price}</span>
        </td>
        <td className="text-left py-1">
          <div
            className={`flex items-center gap-1 text-sm lg:text-base ${
              data.percentChange1h > 0 ? "text-green" : "text-red"
            }`}
          >
            {getIconPercent(data.percentChange1h)}
            {Math.abs(data.percentChange1h).toFixed(2)}%
          </div>
        </td>
        <td className="text-left py-1">
          <div
            className={`flex items-center gap-1 text-sm lg:text-base ${
              data.percentChange24h > 0 ? "text-green" : "text-red"
            }`}
          >
            {getIconPercent(data.percentChange24h)}
            {Math.abs(data.percentChange24h).toFixed(2)}%
          </div>
        </td>
        <td className="text-left py-1">
          <div
            className={`flex items-center gap-1 text-sm lg:text-base ${
              data.percentChange7d > 0 ? "text-green" : "text-red"
            }`}
          >
            {getIconPercent(data.percentChange7d)}
            {Math.abs(data.percentChange7d).toFixed(2)}%
          </div>
        </td>{" "}
        <td className="text-sm lg:text-base text-white text-left py-1">
          ${data.marketCapByTotalSupply?.toLocaleString()}
        </td>
        <td className=" text-left py-1">
          <span className="text-sm lg:text-base text-white">
            ${data.volume24h?.toLocaleString()}
          </span>
        </td>
        <td className=" text-left py-1">
          <span className="text-sm lg:text-base text-white">
            <Image
              alt={data.name}
              src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${data.id}.svg`}
              width={100}
              height={24}
              loading="lazy"
              className={
                data.percentChange7d > 0
                  ? "hue-rotate-[85deg]"
                  : "hue-rotate-[300deg]"
              }
            />{" "}
          </span>
        </td>
      </tr>
    </>
  );
}

export default CoinCard;
