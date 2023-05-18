const NewArrivalsContainer = () => {
  return (
    <div className="self-stretch bg-white flex flex-col pt-[52px] px-[78px] pb-[69.05000305175781px] items-center justify-center text-left text-17xl text-black font-poppins md:pr-[78px] md:box-border sm:pl-5 sm:pr-5 sm:box-border big:max-w-[1440px] big:self-center">
      <div className="self-stretch flex flex-col items-start justify-start gap-[76px]">
        <div className="flex flex-row items-start justify-start relative gap-[10px]">
          <img
            className="absolute my-0 mx-[!important] top-[11.93px] left-[162px] w-[139.52px] h-[26.2px] z-[0]"
            alt=""
            src="/leaf.svg"
          />
          <div className="relative tracking-[0.06em] leading-[37.5px] font-black z-[1] md:text-11xl">
            NEW ARRIVALS
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-around gap-[95px] flex-wrap text-5xl text-gray-900 lg:flex-wrap lg:justify-around">
          <div className="w-[363.04px] h-[606.07px] flex flex-col items-start justify-start gap-[21px] sm:max-w-[95%]">
            <img
              className="self-stretch relative rounded-mini max-w-full overflow-hidden h-[528.06px] shrink-0 object-cover"
              alt=""
              src="/fashionimage@2x.png"
            />
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[5.25px]">
                <div className="relative tracking-[-0.04em] leading-[37.5px] font-medium inline-block w-[240.78px] h-[27px] shrink-0">{`Hoodies & Sweetshirt`}</div>
                <div className="relative text-lg tracking-[-0.04em] leading-[37.5px] font-medium text-gray-300 inline-block w-[113.26px] h-[24.75px] shrink-0">
                  Explore Now!
                </div>
              </div>
              <img
                className="relative w-[25.13px] h-[16.57px]"
                alt=""
                src="/arrow-1.svg"
              />
            </div>
          </div>
          <div className="w-[363.04px] h-[603.82px] flex flex-col items-start justify-start gap-[19.5px] sm:max-w-[95%]">
            <img
              className="self-stretch relative rounded-mini max-w-full overflow-hidden h-[528.06px] shrink-0 object-cover"
              alt=""
              src="/fashionimage1@2x.png"
            />
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[5.25px]">
                <div className="relative tracking-[-0.04em] leading-[37.5px] font-medium inline-block w-[172.52px] h-[27px] shrink-0">{`Coats & Parkas`}</div>
                <div className="relative text-lg tracking-[-0.04em] leading-[37.5px] font-medium text-gray-300 inline-block w-[114.76px] h-6 shrink-0">
                  Explore Now!
                </div>
              </div>
              <img
                className="relative w-[25.13px] h-[16.57px]"
                alt=""
                src="/arrow-2.svg"
              />
            </div>
          </div>
          <div className="w-[367.54px] h-[603.82px] flex flex-col items-start justify-start gap-[18px] sm:max-w-[95%]">
            <img
              className="self-stretch relative rounded-mini max-w-full overflow-hidden h-[528.06px] shrink-0 object-cover"
              alt=""
              src="/fashionimage2@2x.png"
            />
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[5.25px]">
                <div className="relative tracking-[-0.04em] leading-[37.5px] font-medium inline-block w-[156.77px] h-[27.75px] shrink-0">{`Tees & T-Shirt`}</div>
                <div className="relative text-lg tracking-[-0.04em] leading-[37.5px] font-medium text-gray-300 inline-block w-[108.01px] h-[24.75px] shrink-0">
                  Explore Now!
                </div>
              </div>
              <img
                className="relative w-[25.13px] h-[16.57px]"
                alt=""
                src="/arrow-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsContainer;
