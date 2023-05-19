const Footer = () => {
  return (
    <div className="self-stretch bg-black flex flex-col pt-[89px] px-[75px] pb-[110px] items-center justify-start text-left text-11xl text-white font-poppins sm:pl-[30px] sm:pr-[30px] sm:box-border">
      <div className="self-stretch flex flex-row items-start justify-between lg:flex-col lg:gap-[50px]">
        <div className="flex flex-col items-start justify-center gap-[24px]">
          <div className="relative tracking-[0.03em] font-black inline-block w-[144.02px] h-[39.3px] shrink-0">
            FASHION
          </div>
          <div className="relative text-lg tracking-[0.02em] leading-[30px] font-roboto text-gray-200 inline-block w-[311.29px]">
            Complete your style with awesome clothes from us.
          </div>
          <div className="flex flex-row items-start justify-start gap-[10.5px]">
            <img
              className="cursor-pointer relative rounded-[11.25px] w-[39px] h-[39px]"
              alt=""
              src="/frame-10.svg"
            />
            <img
              className="cursor-pointer relative rounded-[11.25px] w-[39px] h-[39px]"
              alt=""
              src="/frame-11.svg"
            />
            <img
              className="cursor-pointer relative rounded-[11.25px] w-[39px] h-[39px]"
              alt=""
              src="/frame-12.svg"
            />
            <button
              className="cursor-pointer [border:none] py-[4.500518798828125px] px-[9.751180648803711px] bg-khaki rounded-[11.25px] w-[39px] h-[39px] flex flex-col box-border items-end justify-start"
              autoFocus
            >
              <b className="relative text-lg tracking-[0.02em] leading-[30px] inline-block font-roboto text-black text-left w-[17.25px] h-[21px] shrink-0">
                in
              </b>
            </button>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[141.02px] text-lg text-gray-200 font-roboto md:flex-col md:gap-[50px]">
          <div className="flex flex-col items-start justify-start gap-[25px]">
            <div className="relative tracking-[0.02em] leading-[30px] text-gainsboro inline-block w-[79px] h-[21px] shrink-0">
              Company
            </div>
            <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[50px] h-[21px] shrink-0">
              About
            </div>
            <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[103px] h-[21px] shrink-0">
              Contact us
            </div>
            <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[66px] h-[21px] shrink-0">
              Support
            </div>
            <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[65px] h-[21px] shrink-0">
              Careers
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[25px] text-gray-500">
            <div className="relative tracking-[0.02em] leading-[30px] text-gainsboro inline-block w-[87px] h-[21px] shrink-0">
              Quick Link
            </div>
            <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[125px] h-[21px] shrink-0">
              Share Location
            </div>
            <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[132px] h-[21px] shrink-0">
              Orders Tracking
            </div>
            <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[88px] h-[21px] shrink-0">
              Size Guide
            </div>
            <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[43px] h-[21px] shrink-0">
              FAQs
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px] text-whitesmoke-200">
            <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[45px] h-[21px] shrink-0">
              Legal
            </div>
            <div className="relative tracking-[0.02em] leading-[30px] text-gray-200 inline-block w-[161px] h-[21px] shrink-0">{`Terms & conditions`}</div>
            <div className="relative tracking-[0.02em] leading-[30px] text-gray-600 inline-block w-[116px] h-[21px] shrink-0">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
