"use server";
import { ResultCoinList } from "@/types/coin";
import axios from "axios";

export const fetchCoins = async (
  start: number,
  limit: number
): Promise<ResultCoinList> => {
  try {
    const res = await axios.get<ResultCoinList>(
      "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing",
      {
        params: {
          start,
          limit,
          sortBy: "rank",
          sortType: "desc",
          convert: "USD",
          cryptoType: "all",
          tagType: "all",
          audited: false,
          aux: "ath,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d,self_reported_circulating_supply,self_reported_market_cap",
        },
        fetchOptions: {
          cache: "no-store",
        },
      }
    );

    return res.data;
  } catch (error) {
    return {
      data: {
        cryptoCurrencyList: [],
        totalCount: "0",
      },
      status: {
        credit_count: 0,
        elapsed: "",
        error_code: "500",
        error_message: "We have problem",
        timestamp: "",
      },
    };
  }
};
