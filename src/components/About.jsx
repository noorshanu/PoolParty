import React from 'react'
import LoopDash from './LoopDash'

function About() {
  return (
<>
    <div className="header overflow-clip pt-16 sm:pt-0"  data-aos="fade-right"
                data-aos-duration="1500">
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
     <LoopDash/>
      {/* Other content blocks */}
    </div>
  

    </>
  )
}

export default About