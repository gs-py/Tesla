import { useEffect, useState } from "react";
import "./App.css";
import BookCar from "./components/BookCar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import TopHeader from "./components/TopHeader";

const App = () => {
  const [isVisible, setVisible] = useState(false);
  const HandleScroll = () => {
    const triggerHieght = 400;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setVisible(scrollY > triggerHieght);
  };
  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  });
  const carDetails = [
    {
      backgroundImage:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-US.png",
      content: {
        title: "Model Y",
        offer: "0% APR Available",
        leaseDetails: "Lease Starting at $700/mo",
      },
    },
    {
      backgroundImage:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-US.png",
      content: {
        title: "Model S",
        offer: "1.9% APR Available",
        leaseDetails: "Lease Starting at $1,200/mo",
      },
    },
    {
      backgroundImage:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop-v3.png",
      content: {
        title: "Cyber Truck",
        offer: "",
        leaseDetails: "",
      },
    },
    {
      backgroundImage:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop",
      content: {
        title: "Solar Panels",
        offer: "Schedule a Virtual Consultation",
        leaseDetails: "",
      },
    },
    {
      backgroundImage:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarRoof-Desktop-US.png",
      content: {
        title: "Solar Roof",
        offer: "Produce Clean Energy From Your Roof",
        leaseDetails: "",
      },
    },
    {
      backgroundImage:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop-US.png",
      content: {
        title: "Power Wall",
        offer: "",
        leaseDetails: "",
      },
    },
  ];
  return (
    <div className="app  " style={{ fontFamily: "Agdasima, sans-serif" }}>
      <TopHeader />
      <Header />
      {carDetails.map((model, index) => (
        <BookCar
          backgroundImage={model.backgroundImage}
          content={model.content}
          key={index}
        />
      ))}
      {/* <BookCar
        backgroundImage={carDetails.backgroundImage}
        content={carDetails.content}
      /> */}
      <Footer />
      {isVisible && <StickyFooter />}
      {/* <StickyFooter /> */}
    </div>
  );
};
export default App;
