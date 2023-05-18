const FavouritesContainer = () => {
  return (
    <div className="self-stretch bg-white flex flex-col py-10 px-[75px] items-center justify-center text-left text-17xl text-black font-poppins sm:pl-5 sm:pr-5 sm:box-border big:max-w-[1440px] big:self-center">
      <div className="self-stretch flex flex-col items-start justify-start gap-[78px] max-w-[1290px]">
        <div className="relative w-[405px] h-[38px] overflow-hidden shrink-0 md:w-[340px]">
          <img
            className="absolute top-[6.8px] left-[240px] w-[142.52px] h-[23.97px] md:left-[190]"
            alt=""
            src="/vector-91.svg"
          />
          <div className="absolute top-[0px] left-[0px] tracking-[0.06em] leading-[37.5px] font-black md:text-11xl">
            Young’s Favourite
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[35px] text-5xl md:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start gap-[21px] md:flex-[unset] md:self-stretch">
            <img
              className="self-stretch relative rounded-mini max-w-full overflow-hidden h-auto shrink-0 object-cover"
              alt=""
              src="/rectangle-50@2x.png"
            />
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[5.25px]">
                <div className="relative tracking-[-0.04em] leading-[37.5px] font-medium inline-block w-[258.78px] h-[27px] shrink-0 md:text-xl">
                  Trending on instagram
                </div>
                <div className="relative text-lg tracking-[-0.04em] leading-[37.5px] font-medium text-gray-300 inline-block w-[109.51px] h-[24.75px] shrink-0 md:text-mini">
                  Explore Now!
                </div>
              </div>
              <img
                className="relative w-[25.13px] h-[16.57px]"
                alt=""
                src="/arrow-4.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[21px] md:flex-[unset] md:self-stretch">
            <img
              className="self-stretch relative rounded-mini max-w-full overflow-hidden h-auto shrink-0 object-cover"
              alt=""
              src="/rectangle-49@2x.png"
            />
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[5.25px]">
                <div className="relative tracking-[-0.04em] leading-[37.5px] font-medium inline-block w-[150.02px] h-[26.25px] shrink-0 md:text-xl sm:text-mini">
                  All Under $40
                </div>
                <div className="relative text-lg tracking-[-0.04em] leading-[37.5px] font-medium text-gray-300 inline-block w-[107.26px] h-[24.75px] shrink-0">
                  Explore Now!
                </div>
              </div>
              <img
                className="relative w-[25.13px] h-[16.57px]"
                alt=""
                src="/arrow-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritesContainer;
