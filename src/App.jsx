import React from "react";
import TopBar from "./components/TopBar";
import Herader from "./components/Herader";
import Hero from "./components/Hero";
import About from "./components/About";
import BtcSec from "./components/BtcSec";
import BtcDown from "./components/BtcDown";
import LeaderBoard from "./components/LeaderBoard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopBar />
      <Herader />
      <main className="app min-h-screen">
        <Hero />
        <div className="relative z-1 pt-32 pb-24 max-w-referral mx-auto px-2 sm:px-4">
          <About />
          <BtcSec />
          <BtcDown />
          <LeaderBoard />
        </div>
      </main>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
