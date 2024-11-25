interface BookcarProp {
  backgroundImage: string;
  content: {
    title: string;
    offer: string;
    leaseDetails: string;
  };
}

const BookCar = ({ backgroundImage, content }: BookcarProp) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "620px",
      }}
    >
      <div className="flex flex-col justify-between gap-3  h-full py-4">
        <div className=" flex   gap-1 items-center justify-center  flex-col ">
          <h1 className=" text-white text-6xl font-bold ">{content.title}</h1>
          <p className="  text-white text-3xl   border-b-2">{content.offer}</p>
          <p className=" text-white text-sm">{content.leaseDetails}</p>
        </div>

        <div className=" flex gap-3 justify-center">
          <button className=" bg-blue-500  text-white px-3 rounded-sm w-[40%] text-2xl md:text-lg text-nowrap py-1 sm:w-32 ">
            Order Now
          </button>
          <button className=" bg-white px-3 rounded-sm w-[40%] py-1 text-nowrap text-2xl md:text-lg sm:w-32">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCar;
