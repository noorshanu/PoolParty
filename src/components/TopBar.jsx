import React from "react";

function TopBar() {
  return (
    <div className="loop-banner p-2 flex flex-col sm:flex-row justify-center items-center flex-wrap gap-0.5 md:gap-5 bg-top-banner-gradient absolute top-0 inset-x-0 z-50 min-h-8 text-white text-sm">
      <a
        href="https://code4rena.com/bounties/loopfi#top"
        target="_blank"
        aria-label="A button that on click navigates to https://code4rena.com/bounties/loopfi#top"
        rel="noreferrer"
      >
        Join our Bug Bounty Program
      </a>
      <div className="separator hidden sm:block"></div>
      <a
        href="https://code4rena.com/bounties/loopfi#top"
        target="_blank"
        aria-label="A button that on click navigates to https://code4rena.com/bounties/loopfi#top"
        rel="noreferrer"
      >
        Find bugs and EARN $100,000.00
      </a>
      <div className="separator hidden sm:block"></div>
      <a
        href="https://code4rena.com/bounties/loopfi#top"
        target="_blank"
        rel="noreferrer"
        aria-label="A button that on click navigates to https://code4rena.com/bounties/loopfi#top"
        className="flex items-center gap-2"
      >
        <img
          alt="Logo"
          loading="lazy"
          width="100"
          height="20"
        
          style={{ color: "transparent" }}
          src="images/code.png"
        />
        Join now
        <svg
          aria-label="Svg open icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="18px"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <path
            d="M21.7737743,11.5137744 L15.5837743,5.33377443 C15.3369573,5.1419567 14.9859464,5.16387706 14.7649117,5.38491179 C14.543877,5.60594651 14.5219566,5.95695738 14.7137743,6.20377443 L19.8437743,11.3337744 L2.57377432,11.3337744 C2.23135777,11.3337744 1.95377432,11.6113579 1.95377432,11.9537744 C1.95377432,12.296191 2.23135777,12.5737744 2.57377432,12.5737744 L19.8337743,12.5737744 L14.7137743,17.6937744 C14.5242496,17.8410665 14.4367708,18.0845204 14.4892042,18.3187538 C14.5416376,18.5529872 14.7245615,18.7359112 14.9587949,18.7883446 C15.1930284,18.8407779 15.4364822,18.7532991 15.5837743,18.5637744 L21.7737743,12.3737744 C22.004902,12.133695 22.004902,11.7538539 21.7737743,11.5137744 L21.7737743,11.5137744 Z"
            id="Path"
            fill="#fff"
            fillRule="nonzero"
            transform="translate(11.950447, 12.003327) scale(1, -1) rotate(0) translate(-11.950447, -12.003327)"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default TopBar;
