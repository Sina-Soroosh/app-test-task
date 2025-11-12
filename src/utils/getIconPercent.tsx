import { ArrowDown3, ArrowUp3 } from "iconsax-react";

export const getIconPercent = (percent: number) => {
  return percent > 0 ? (
    <ArrowUp3 className="w-4 h-4 fill-green stroke-green" variant="Bold" />
  ) : (
    <ArrowDown3 className="w-4 h-4 fill-red stroke-red" variant="Bold" />
  );
};
