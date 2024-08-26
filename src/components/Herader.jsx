import React from 'react';

function Herader() {
  return (
    <header className="navbar overflow-x-clip w-full z-999 border-b absolute border-b-border-line/5 top-20 sm:top-8 transition-all"  
    data-aos="zoom-in-down"
    data-aos-duration="1500">
      <nav className="nav-items flex justify-between gap-6 items-center px-4 sm:px-6 max-w-9xl mx-auto min-h-28 transition-all">
        <div className="main-logo flex items-center flex-col sm:flex-row gap-1.5">
          <a href="/">
            <img
              alt="Logo"
              fetchPriority="high"
              width="100"
              height="24"
              decoding="async"
              className="logo"
              src="/images/logo.svg"
            />
          </a>
          <div className="epoch-btn text-xxs text-white px-2 grid place-content-center whitespace-nowrap">
            EPOCH 1
          </div>
        </div>
        <div className="actions flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="btn-action w-[160px] sm:w-[200px] h-[48px] p-1 rounded-3xl bg-white shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out"
          >
            Connect Wallet
          </button>
          <button
            className="btn-action svg-hover w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-black/5 shadow-inner rounded-full grid sm:hidden place-items-center"
          >
            <svg className="icon-nav fill-black" width="24" height="24">
              <use href="/icons/icons.svg#icon-nav-menu"></use>
            </svg>
          </button>
        </div>
      </nav>
      <div className="w-0 aside-backdrop z-[99] h-full fixed inset-0 transition backdrop-blur-sm bg-black-opacity-2"></div>
      <aside className="translate-x-[100%] sidebar z-[100] bg-white/90 backdrop-blur-2xl text-black w-full min-h-screen md:w-[350px] p-2.5 fixed inset-y-0 right-0 transform transition duration-500 ease-in-out overflow-y-auto">
        <button className="svg-hover w-[50px] h-[50px] bg-black/5 shadow-inner rounded-full grid place-items-center m-2">
          <svg className="icon-nav-close" width="24" height="24">
            <use href="/icons/icons.svg#icon-nav-close"></use>
          </svg>
        </button>
        <hr className="nav mt-10 mb-10 opacity-10" />
        <ul className="flex flex-col items-center justify-center gap-6">
          <li className="text-black font-light">
            <a href="https://loopfi.xyz">About</a>
          </li>
          <li className="text-black font-light">
            <a href="https://docs.loopfi.xyz/">Docs</a>
          </li>
          <li className="text-black font-light">
            <a href="https://mirror.xyz/loopfixyz.eth">Blog</a>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Herader;
