const AppDownloadContainer = () => {
  return (
    <div className="self-stretch bg-white flex flex-row pt-[71px] px-[164px] pb-[94px] items-center justify-center gap-[176px] text-left text-17xl text-black font-poppins lg:flex-col md:flex-col">
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start gap-[48.76px]">
          <div className="flex flex-col items-start justify-start gap-[30.75px]">
            <div className="relative tracking-[0.06em] leading-[150%] font-black md:text-11xl sm:text-6xl">
              <p className="m-0">{`DOWNLOAD APP &`}</p>
              <p className="m-0">GET THE VOUCHER!</p>
            </div>
            <div className="relative text-lg tracking-[-0.04em] leading-[26.25px] font-medium text-gray-400 inline-block w-[314.29px] h-[45.76px] shrink-0 md:text-sm sm:text-xs">
              <p className="m-0">Get 30% off for first transaction using</p>
              <p className="m-0">Rondovision mobile app for now.</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[14.25px]">
            <img
              className="rounded-5xs-5 max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/frame-64@2x.png"
            />
            <img
              className="rounded-5xs-5 max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/frame-65@2x.png"
            />
          </div>
        </div>
      </div>
      <img
        className="relative w-[528.19px] h-auto object-cover max-w-[50%] md:min-w-[400px] md:max-w-[90%] sm:min-w-[350px]"
        alt=""
        src="/image-2@2x.png"
      />
    </div>
  );
};

export default AppDownloadContainer;
