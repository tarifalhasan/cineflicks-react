import Container from "../Shared/Container";

const ConnectWalletState = () => {
  return (
    <Container>
      <div className="border-4 rounded-3xl border-primary mx-20 text-center ">
        <button className="bg-primary my-[96px] mx-auto px-[261px] rounded-lg text-blak py-[12px] font-[700] text-[25px]">
          Please Connect Your Wallet to Continue
        </button>
      </div>
    </Container>
  );
};

export default ConnectWalletState;
