"use client";

import { fetchCoins } from "@/api/coins";
import { useEffect } from "react";

function SyncCoin() {
  useEffect(() => {
    fetchCoins(1, 1);
  }, []);

  return <></>;
}

export default SyncCoin;
