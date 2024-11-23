import "./App.css";
import BookCar from "./components/BookCar";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";

const App = () => {
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
      {}
    </div>
  );
};
export default App;
