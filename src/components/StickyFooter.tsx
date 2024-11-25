import { FaCar } from "react-icons/fa";
const StickyFooter = () => {
  return (
    <div className=" box fixed bottom-0 left-0 right-0 bg-white p-4 h-10 text-center flex items-center justify-center text-sm font-medium gap-2">
      <FaCar className=" text-blue-600" />
      Schedule a drive Today
    </div>
  );
};

export default StickyFooter;
