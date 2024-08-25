

function BtcDown() {
  return (
    <>
      <section
        className="invite-card realtive mt-4 bg-white/30 border border-primary-border-03 shadow-referral-card rounded-20"
        style={{
          transform: "translate(0px, 0px) rotate(0deg) scale(1)",
          opacity: 1,
        }}
      >
        <div className="card relative m-2 sm:m-4 p-4 sm:p-6 bg-white/80 rounded-20 before:absolute before:top-0 before:left-0 before:size-full before:rounded-20 before:bg-invite-card-dashed">
          <div className="relative info">
            <span className="step inline-flex items-center px-2 min-h-8 text-xs font-medium bg-step1/10 text-step1 rounded-2xl">
              1ST STEP
            </span>
            <h2 className="mt-4 mb-3 text-3xl sm:text-4xl font-medium">
              Deposit BTC or LRTs, Get Quaaloops
            </h2>
            <p className="text-base md:text-lg sm:leading-tight font-light mb-6 sm:mb-10">
              Deposit BTC or Liquid Restaking Tokens to start earning Quaaloops
              for the upcoming Airdrop. At protocol launch you can stake your
              deposits and earn protocol revenue.
            </p>

            <div className="relative asset-table border border-row-border rounded-2xl overflow-y-hidden overflow-x-auto px-4 pt-6 pb-2">
              <table className="w-full overflow-x-auto border-separate">
                <thead>
                  <tr className="sticky top-0 z-2 bg-white">
                    <th
                      className="font-light text-sm text-black/50 before:absolute before:-top-[28px] before:z-10 before:block before:bg-white before:w-full before:h-[28px] stickyTd text-left !pl-16"
                      style={{
                        left: "0px",
                        position: "sticky",
                        zIndex: 1,
                        backgroundColor: "#fff",
                        paddingLeft: "12px",
                        paddingRight: "2px",
                      }}
                    >
                      Asset
                    </th>
                    <th
                      className="font-light text-sm text-black/50 before:absolute before:-top-[28px] before:z-10 before:block before:bg-white before:w-full before:h-[28px]"
                      style={{
                        position: "relative",
                        zIndex: 0,
                        backgroundColor: "#fff",
                        paddingLeft: "2px",
                        paddingRight: "2px",
                      }}
                    >
                      <div>
                        <span> TVL </span>{" "}
                        <span className="px-2 opacity-25">|</span>{" "}
                        <span>Cap</span>
                      </div>
                    </th>
                    <th
                      className="font-light text-sm text-black/50 before:absolute before:-top-[28px] before:z-10 before:block before:bg-white before:w-full before:h-[28px]"
                      style={{
                        position: "relative",
                        zIndex: 0,
                        backgroundColor: "#fff",
                        paddingLeft: "2px",
                        paddingRight: "2px",
                      }}
                    >
                      Points
                    </th>
                    <th
                      className="font-light text-sm text-black/50 before:absolute before:-top-[28px] before:z-10 before:block before:bg-white before:w-full before:h-[28px]"
                      style={{
                        position: "relative",
                        zIndex: 0,
                        backgroundColor: "#fff",
                        paddingLeft: "2px",
                        paddingRight: "2px",
                      }}
                    >
                      Your Deposit
                    </th>
                    <th
                      className="font-light text-sm text-black/50 before:absolute before:-top-[28px] before:z-10 before:block before:bg-white before:w-full before:h-[28px]"
                      style={{
                        position: "relative",
                        zIndex: 0,
                        backgroundColor: "#fff",
                        paddingLeft: "2px",
                        paddingRight: "0px",
                      }}
                    ></th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
              <div className="relative text-center mt-8 mb-4">
                Connect Wallet to display!
              </div>
            </div>
          </div>
        </div>
        <div className="card relative m-2 sm:m-4 p-6 bg-white/80 border border-dashed border-border-card-block rounded-20">
          <span className="step inline-flex items-center px-2 min-h-8 text-xs font-medium bg-step2/10 text-step2 rounded-2xl">
            2ND STEP
          </span>
          <h2 className="mt-4 mb-4 sm:mb-3 text-3xl sm:text-4.5xl font-medium">
            20% Referral Bonus
          </h2>
          <p className="text-base sm:text-lg !leading-normal !sm:leading-tight mb-8 font-light max-w-4xl">
            Use your code to invite friends and earn 20% of their Quaaloops.
            Your rank on the leaderboard is determined by the total Quaaloops
            you accumulate.
          </p>
          <button
            type="button"
            aria-label="A button that on click connects you with the wallet"
            id="connect-wallet"
            className="deposit w-full max-w-[350px] active:scale-99 font-medium inline-flex items-center justify-center select-none transition-color transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none bg-green-gradient hover:shadow-md text-white text-base px-2 sm:px-4 md:px-6 min-h-btn-slg min-h-btn-lg min-w-btn-lg rounded-28"
          >
            Connect Wallet
          </button>
        </div>
      </section>
    </>
  );
}

export default BtcDown;
