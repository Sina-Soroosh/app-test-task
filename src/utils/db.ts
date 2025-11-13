import { CoinContentType } from "@/types/coin";
import Dexie, { type EntityTable } from "dexie";

const dbName = "coinsDb";

// Create a new database of type Dexie named coinsDb.
const db = new Dexie(dbName) as Dexie & {
  coin: EntityTable<CoinContentType, "id">;
};

// For adding to IndexedDB.
db.version(1).stores({
  coin: "id",
});

export { db };
