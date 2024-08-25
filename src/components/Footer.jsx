import React from "react";

function Footer() {
  return (
    <>
      <footer
        style={{opacity: '1'}}
        className="footer w-full pt-9 pb-10 border-t border-t-footer-border"
      >
        <div className="fbody flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 max-w-9xl mx-auto">
          <div
            className="info flex flex-col md:flex-row items-center"
            style={{
              transform: "translate(0px, 0px)",
              opacity: 1,
            }}
          >
            <img
              alt="Logo"
              loading="lazy"
              width="100"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/images/logo.svg"
            />
            <div className="line hidden md:block w-[1px] h-6 mx-6 bg-footer-border"></div>
            <div className="social-icons flex items-center gap-4 mt-6 md:mt-0 mb-10 md:mb-0">
              <a
                className="min-w-8 h-8 bg-black/5 hover:bg-black/10 hover:scale-105 hover:transition-transform
             transition-transform rounded-full grid place-content-center"
                target="_blank"
                title="Discord"
                href="https://discord.com/invite/mVqf2Q5Whg"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                <svg className="icon-discord" width="16" height="16">
                  <use href="/icons/icons.svg#icon-discord"></use>
                </svg>
              </a>
              <a
                className="min-w-8 h-8 bg-black/5 hover:bg-black/10 hover:scale-105 hover:transition-transform transition-transform rounded-full grid place-content-center"
                target="_blank"
                title="X"
                href="https://twitter.com/loopfixyz"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                <svg className="icon-x" width="16" height="16">
                  <use href="/icons/icons.svg#icon-x"></use>
                </svg>
              </a>
              <a
                className="min-w-8 h-8 bg-black/5 hover:bg-black/10 hover:scale-105 hover:transition-transform transition-transform rounded-full grid place-content-center"
                target="_blank"
                title="Mirror"
                href="https://mirror.xyz/loopfixyz.eth"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                <svg className="icon-mirror" width="16" height="16">
                  <use href="/icons/icons.svg#icon-mirror"></use>
                </svg>
              </a>
            </div>
          </div>
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-center">
            <li
              className="text-black/70 font-light text-sm"
              style={{
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <a href="https://loopfi.xyz">About</a>
            </li>
            <li
              className="text-black/70 font-light text-sm"
              style={{
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <a href="https://docs.loopfi.xyz/">Docs</a>
            </li>
            <li
              className="text-black/70 font-light text-sm"
              style={{
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <a href="https://mirror.xyz/loopfixyz.eth">Blog</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
