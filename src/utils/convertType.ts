import { CoinContentType, CryptoContentType } from "@/types/coin";

export const convertToCoinType = (data: CryptoContentType): CoinContentType => {
  const usdQuote = data.quotes.find((q) => q.name === "USD");

  return {
    id: data.id,
    cmcRank: data.cmcRank,
    name: data.name,
    symbol: data.symbol,
    price: usdQuote?.price || 0,
    marketCapByTotalSupply: usdQuote?.marketCapByTotalSupply || 0,
    percentChange1h: usdQuote?.percentChange1h || 0,
    percentChange24h: usdQuote?.percentChange24h || 0,
    percentChange7d: usdQuote?.percentChange7d || 0,
    volume24h: usdQuote?.volume24h || 0,
  };
};
