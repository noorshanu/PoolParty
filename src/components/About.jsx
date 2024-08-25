import React from 'react'

function About() {
  return (
<>
    <div className="header overflow-clip pt-16 sm:pt-0">
      <img
        alt="NFT Image"
        fetchPriority="high"
        width="1524"
        height="1315"
        decoding="async"
        data-nimg="1"
        className="nft max-w-[350px] sm:max-w-[400px] md:max-w-[500px] mx-auto translate-x-4 sm:translate-x-0"
        style={{ color: 'transparent', transform: 'translate(0px, 0px)', opacity: 1 }}
       
        src="images/hero.png"
      />
      <h1
        className="mask-it -mt-6 sm:-mt-10 pb-6 sm:pb-12 text-black px-2 sm:px-0 text-4xl sm:text-5.5xl xl:text-7xl text-center mx-auto leading-tight"
        style={{ '--mask': 'linear-gradient(-45deg, transparent -50%, black 0%)', opacity: 1 }}
      >
        Pool Points Party
      </h1>
      <h2
        className="mask-it pb-4 text-black px-2 sm:px-0 text-2xl sm:text-4xl max-w-[700px] xl:text-5xl xl:max-w-[1050px] mx-auto font-normal leading-tight tracking-tight text-center"
        style={{ '--mask': 'linear-gradient(-45deg, transparent -50%, black 0%)', opacity: 1 }}
      >
        Deposit <strong>BTC</strong> and LRTs to earn Quaaloops
        <br className="hidden sm:block" />
        <span className="font-medium bg-text-clip bg-text-orange-linear">
          or get 20%
        </span>{' '}
        of the friends you refer.
      </h2>
    </div>
    <div className="btc">
      <div className="stats-header sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-2 md:gap-1 justify-center pt-8 pb-10 sm:pt-10 sm:pb-12 px-10">
        <div className="text-block text-center">
          <h6 className="flex items-center gap-1 mb-1 sm:mb-2 opacity-50 text-sm sm:text-base justify-center">
            Total Value Locked
            <svg className="r-tooltip icon-info" width="12" height="12" data-state="closed">
              <use href="/icons/icons.svg#icon-info"></use>
            </svg>
          </h6>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl text-black font-normal">
            <div className="r-tooltip span" data-state="closed">$1,715,043.38</div>
          </h1>
        </div>
        <div className="text-block text-center flex flex-col items-center justify-center">
          <h6 className="flex items-center justify-center gap-1 mb-1 sm:mb-2 opacity-50 text-sm sm:text-base">
            Estimated APR
            <svg className="r-tooltip icon-info" width="12" height="12" data-state="closed">
              <use href="/icons/icons.svg#icon-info"></use>
            </svg>
          </h6>
          <div
            className="box relative cursor-pointer"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R29ajtt8pba:"
            data-state="closed"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl bg-text-orange-linear bg-text-clip text-medium">
              --
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
        {/* Other content blocks */}
      </div>
      {/* Other content blocks */}
    </div>
  

    </>
  )
}

export default About