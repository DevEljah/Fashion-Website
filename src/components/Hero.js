const Hero = () => {
  return (
    <div className="self-stretch bg-white flex flex-col pt-0 px-[75px] pb-11 items-center justify-start text-left text-[72.01px] text-black font-poppins md:pl-10 md:pr-10 md:box-border sm:pl-5 sm:pr-5 sm:box-border">
      <div className="self-stretch rounded-[44.26px] bg-whitesmoke-100 flex flex-row pt-[50.9900016784668px] px-10 pb-0.5 items-center justify-center gap-[38px] lg:flex-col">
        <div className="flex flex-col py-0 pr-0 pl-[27.75px] items-start justify-start relative gap-[27px] sm:pl-0 sm:box-border">
          <div className="absolute my-0 mx-[!important] top-[200.96px] right-[102.94px] bg-khaki w-[371.88px] h-[88.17px] [transform:_rotate(-2deg)] [transform-origin:0_0] z-[0] md:max-w-[76%] md:max-h-[15%] md:top-[150] md:left-[15] sm:w-[371px] sm:max-w-[75%] sm:max-h-[15%] sm:top-[105] sm:left-[20]" />
          <div className="absolute my-0 mx-[!important] top-[12.15px] left-[-20.52px] bg-white w-[348.6px] h-[84.12px] [transform:_rotate(-2deg)] [transform-origin:0_0] z-[1] md:max-w-[65%] md:max-h-[15%] md:top-[10] sm:max-w-[60%] sm:max-h-[15%] sm:top-[4] sm:left-[4]" />
          <div className="relative leading-[90.01px] font-black z-[2] md:text-31xl md:leading-[70px] sm:text-21xl sm:leading-[50px]">
            <p className="m-0">LET’S</p>
            <p className="m-0">EXPLORE</p>
            <p className="m-0">UNIQUE</p>
            <p className="m-0">CLOTHES.</p>
          </div>
          <div className="relative text-5xl tracking-[-0.05em] text-gray-1000 inline-block w-[454.55px] h-[43.51px] shrink-0 z-[3] md:text-mid md:w-full sm:text-sm">
            Live for Influential and Innovative fashion!
          </div>
          <div className="flex flex-row items-center justify-start gap-[25.5px] z-[4]">
            <img
              className="relative w-[142.52px] h-[23.97px] md:w-[100px]"
              alt=""
              src="/vector-9.svg"
            />
            <button className="cursor-pointer [border:none] py-[13px] px-[30px] bg-black rounded-5xs-5 flex flex-row items-start justify-start hover:bg-darkslategray sm:pl-[15px] sm:pr-[15px] sm:box-border">
              <div className="relative text-3xl-5 tracking-[-0.05em] font-medium font-poppins text-white text-left md:text-smi sm:text-mini">
                Shop Now
              </div>
            </button>
          </div>
        </div>
        <img
          className="relative w-[668.01px] h-auto object-cover max-w-[50%]"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Hero;
