const SellectWallet = () => {
  return (
    <div className=" bg-black text-white w-[428px] mx-auto p-[58px] text-center">
      <h1 className="font-[700] text-[30px] mb-10">Select Wallet</h1>

      <div className="flex flex-col">
        <div className="bg-[#575757] rounded-xl my-2">
          <p className="text-primary"> Coinbase </p>
        </div>{" "}
        <div className="bg-[#575757] rounded-xl my-2">
          <p className="hover:text-primary"> Trezor </p>
        </div>{" "}
        <div className="bg-[#575757] rounded-xl my-2">
          <p className="hover:text-primary"> Coinbase </p>
        </div>{" "}
        <div className="bg-[#575757] rounded-xl my-2">
          <p className="hover:text-primary"> Coinbase </p>
        </div>
      </div>

      <div className="flex justify-between gap-3 items-center">
        <div className="w-full h-[2px] bg-primary"></div>
        <div className="w-full text-[10px]">Show More</div>
        <div className="w-full h-[2px] bg-primary"></div>
      </div>
    </div>
  );
};

export default SellectWallet;
