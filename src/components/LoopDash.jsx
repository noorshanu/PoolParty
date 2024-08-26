import React from "react";
import CountUp from 'react-countup';

function LoopDash() {
  return (
    <>
      <div className=" relative z-30 stats-header sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-2 md:gap-1 justify-center pt-8 pb-10 sm:pt-10 sm:pb-12 px-10">
        <div
          className="text-block text-center "
        
        >
          <h6 className="flex items-center gap-1 mb-1 sm:mb-2 opacity-50 text-sm sm:text-base justify-center">
            Total Value Locked
            <svg
              className="r-tooltip icon-info"
              width="12"
              height="12"
              data-state="closed"
            >
              <use href="/icons/icons.svg#icon-info"></use>
            </svg>
          </h6>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl text-black font-normal ">
            <div className="r-tooltip span" data-state="closed">
              $<CountUp end={172621533}/>
              {/* $<span>1</span>
              <span>,</span>
              <span>7</span>
              <span>2</span>
              <span>6</span>
              <span>,</span>
              <span>2</span>
              <span>1</span>
              <span>5</span>
              <span>.</span>
              <span>3</span>
              <span>3</span> */}
            </div>
          </h1>
        </div>
        <div
          className="text-block text-center flex flex-col items-center justify-center "
      
        >
          <h6 className="flex items-center justify-center gap-1 mb-1 sm:mb-2 opacity-50 text-sm sm:text-base">
            Estimated APR
            <svg
              className="r-tooltip icon-info"
              width="12"
              height="12"
              data-state="closed"
            >
              <use href="/icons/icons.svg#icon-info"></use>
            </svg>
          </h6>
          <div
            className="box relative cursor-pointer"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r3:"
            data-state="closed"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl bg-text-orange-linear bg-text-clip text-medium">
              <div className="span">--</div>
            </h1>
            <span className="text-orange text-xs bg-white rounded-full p-1 px-3 mt-1 sm:mt-2 inline-flex shadow-sm">
              Calculate your APR
              <svg
                className="icon-edit size-3 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
              >
                <path
                  d="M7.373 1.94a1.5 1.5 0 0 1 2.122 0l.707.706a1.5 1.5 0 0 1 0 2.122L5.005 9.964a.5.5 0 0 1-.255.137l-2.652.53a.5.5 0 0 1-.588-.588l.53-2.652a.5.5 0 0 1 .137-.255l5.196-5.197zm1.415.706.707.708a.5.5 0 0 1 0 .707l-.707.707-1.415-1.414.707-.708a.5.5 0 0 1 .708 0zM6.666 4.061 2.991 7.736l-.353 1.767 1.767-.353L8.08 5.475 6.666 4.06z"
                  fill="#f7931a"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div
          className="text-block text-center "
         
        >
          <h6 className="flex items-center gap-1 mb-1 sm:mb-2 opacity-50 text-sm sm:text-base justify-center">
            Total Quaaloops
            <svg
              className="r-tooltip icon-info"
              width="12"
              height="12"
              data-state="closed"
            >
              <use href="/icons/icons.svg#icon-info"></use>
            </svg>
          </h6>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl text-black font-normal ">
            <div className="span">
            <CountUp end={1585009}/>
         
            </div>
          </h1>
        </div>
        <div
          className="text-block text-center "
         
        >
          <h6 className="flex items-center gap-1 mb-1 sm:mb-2 opacity-50 text-sm sm:text-base justify-center">
            Total Users
            <svg
              className="r-tooltip icon-info"
              width="12"
              height="12"
              data-state="closed"
            >
              <use href="/icons/icons.svg#icon-info"></use>
            </svg>
          </h6>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl text-black font-normal ">
            <div className="span">
            <CountUp end={683}/>
          
            </div>
          </h1>
        </div>
      </div>
    </>
  );
}

export default LoopDash;
