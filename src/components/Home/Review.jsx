import Container from "../Shared/Container";

const Review = () => {
  return (
    <Container>
      <div className=" bg-[#212121] px-[21px] py-[25px] rounded-2xl my-[62px]">
        <div className="text-center">
          <img
            src="/assets/start.png"
            alt=""
            width={200}
            className="mx-auto mt-2"
          />
          <br />
          <p className="font-medium text-[30px]">
            Your new home for movies and series. Turn streaming into a rewarding
            experience! <br /> Watch. Earn. Repeat. | Welcome to Cineflicks
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Review;
