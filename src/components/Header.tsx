import { TbWorld } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div
      className="header "
      style={{
        backgroundImage: `url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-US-v2.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "450px",
      }}
    >
      <div className=" flex h-32 items-center justify-evenly  ">
        <div className=" text-xl text-white">
          <h1>Tesla</h1>
        </div>
        <div className=" flex h-fit  text-xl sm:text-sm text-white  sm:font-extralight hidden sm:block">
          <ul className=" flex gap-4 md:gap-2 sm:gap-1">
            <li>Vehicles</li>
            <li>Energy</li>
            <li>Charging</li>
            <li>Discover</li>
            <li>Shop</li>
            <li>We ,Robot</li>
          </ul>
        </div>
        <div className=" flex justify-center  gap-3 items-center ">
          <FaRegQuestionCircle />
          <TbWorld />
          <RiAccountCircleFill />
        </div>
      </div>
    </div>
  );
};

export default Header;
