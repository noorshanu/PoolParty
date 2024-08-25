import React from 'react'

function LeaderBoard() {
  return (
  <>
  
  <section   className="relative card bg-white/70 rounded-20 mt-4 pb-2 sm:pb-10"   style={{
        transform: 'translate(0px, 0px)',
        opacity: 1
      }} >
   <h1   className="card-header text-lg text-center p-6 flex items-center justify-center gap-2 font-normal">
      Leaderboard
      <div   className="status-block flex items-center justify-center bg-grey-status-color/5 min-h-[22px] rounded-2xl pl-1 pr-2.5">
         <div   className="status w-4 h-4 bg-white/10 rounded-full grid place-content-center">
            <div   className="circle w-1.5 h-1.5 bg-secondary rounded-full"></div>
         </div>
         <span   className="r-tooltip text-xxs text-grey-status-color" data-state="closed">
              Last updated:   <b   className="font-medium">11 minutes ago</b>
         </span>
      </div>
   </h1>
   <div>
      <div   className="card-body mx-2 sm:mx-10 border border-dashed border-border-card-block rounded-20">
         <div   className="listed p-2 sm:p-4 flex flex-col gap-1 max-h-[500px] overflow-auto">
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-1"></div>
                  0xa55c5...0C55d
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  285,375.38 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">
                    <img alt="achievement" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"  
                     className="ml-auto aspect-square" src="/images/one.svg" style={{color: 'transparent'}}/></div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-2"></div>
                  0x80F2D...6C869
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  243,835.65 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">
                    <img alt="achievement" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"  
                     className="ml-auto aspect-square" src="/images/two.svg" style={{color: 'transparent'}}/></div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-3"></div>
                  0x29F88...51e1a
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  110,110.13 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">
                    <img alt="achievement" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"  
                     className="ml-auto aspect-square" src="/images/three.svg" style={{color: 'transparent'}}/></div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-4"></div>
                  0x919eb...3F20E
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  77,466.91 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#4</div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-5"></div>
                  0x8e1A6...373d9
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  48,767.13 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#5</div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-6"></div>
                  0x97094...9Cb3d
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  40,794.26 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#6</div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-7"></div>
                  yonder.eth
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  38,372 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#7</div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-8"></div>
                  0x44F4D...38746
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  32,051.62 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#8</div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-9"></div>
                  0x050Fa...0cb81
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  26,081.07 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#9</div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-10"></div>
                  0xB5102...dF4DB
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  22,904.77 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#10</div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-11"></div>
                  0x5f1dD...D7220
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  22,154.89 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#11</div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-12"></div>
                  0x46469...E6d6f
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  21,546 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#12</div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-13"></div>
                  0x66E9c...77359
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  19,629.88 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#13</div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-14"></div>
                  0xF9122...36832
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  17,861.79 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#14</div>
               </div>
            </div>
            <div   className="row flex items-center justify-between bg-white rounded-xl min-h-10 border border-row-border">
               <div   className="col flex items-center gap-2 ml-2 ">
                  <div   className="avatar w-6 h-6 rounded-full border border-social-border avatar-gradient-15"></div>
                  0x6abDe...C0277
               </div>
               <div   className="col flex flex-col-reverse sm:flex-row sm:items-center text-sm sm:text-base py-1 px-2 sm:p-0">
                  17,803.04 quaaloops
                  <div   className="score text-xs min-w-[50px] text-right opacity-70 font-medium mt-2 sm:mt-0 mr-12 sm:mr-3">#15</div>
               </div>
            </div>
            <div   className="loading h-10 flex justify-center mt-2 items-center">
               <svg   className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle   className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path   className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
            </div>
         </div>
      </div>
   </div>
</section>
  </>
  )
}

export default LeaderBoard