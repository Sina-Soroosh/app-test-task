export interface CoinContentType {
  id: number;
  name: string;
  symbol: string;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  marketCapByTotalSupply: number;
  volume24h: number;
}

export interface QuotesCryptoContentType {
  name: string;
  price: number;
  volume24h: number;
  volume7d: number;
  volumePercentChange: number;
  volume30d: number;
  marketCap: number;
  selfReportedMarketCap: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  lastUpdated: string;
  percentChange30d: number;
  percentChange60d: number;
  percentChange90d: number;
  fullyDilluttedMarketCap: number;
  marketCapByTotalSupply: number;
  dominance: number;
  turnover: number;
  ytdPriceChangePercentage: number;
  percentChange1y: number;
}

export interface CryptoContentType {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmcRank: number;
  marketPairCount: number;
  circulatingSupply: number;
  selfReportedCirculatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  ath: number;
  atl: number;
  high24h: number;
  low24h: number;
  isActive: number;
  lastUpdated: string;
  dateAdded: string;
  quotes: [];
  isAudited: boolean;
  auditInfoList: [];
  badges: number[];
}

export interface ResultCoinList {
  data: {
    cryptoCurrencyList: CryptoContentType[];
    totalCount: string;
  };
  status: {
    timestamp: string;
    error_code: string;
    error_message: string;
    elapsed: string;
    credit_count: number;
  };
}
