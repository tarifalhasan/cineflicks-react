const Review = () => {
  return (
    <div className=" bg-[#212121] px-[21px] py-[25px] rounded-2xl my-[62px]">
      <div className="text-center space-y-4">
        <img src="/assets/start.png" alt="" width={200} className="mx-auto" />
        <h5 className="text-md font-bold lg:text-3xl">Welcome to Cineflicks</h5>
        <p className="font-medium  max-w-[600px] mx-auto text-sm lg:text-lg">
          Your new home for movies and series. Turn streaming into a rewarding
          experience!
        </p>
        <h5 className="text-md font-bold lg:text-3xl">Watch. Earn. Repeat.</h5>
      </div>
    </div>
  );
};

export default Review;
