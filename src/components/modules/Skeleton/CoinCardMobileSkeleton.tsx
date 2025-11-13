function CoinCardMobileSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-2 border border-gray p-2 rounded-lg w-full bg-main">
        <div className="flex items-center gap-1.5">
          <div role="status" className="w-7 bg-gray animate-pulse h-7"></div>
          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>

          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>
        </div>

        <div className="flex w-full justify-between">
          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>

          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>
        </div>

        <div className="flex w-full justify-between">
          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>

          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>
        </div>

        <div className="flex w-full justify-between">
          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>

          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>
        </div>

        <div className="flex w-full justify-between">
          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>

          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>
        </div>

        <div className="flex w-full justify-between">
          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>

          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>
        </div>

        <div className="flex w-full justify-between">
          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>

          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>
        </div>

        <div className="flex w-full justify-between">
          <div role="status" className="w-10 bg-gray animate-pulse h-5"></div>

          <span className="text-base text-white">
            <div
              role="status"
              className="w-25 bg-gray animate-pulse h-10"
            ></div>
          </span>
        </div>
      </div>
    </>
  );
}

export default CoinCardMobileSkeleton;
