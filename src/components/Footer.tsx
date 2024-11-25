const Footer = () => {
  return (
    <div className="w-full justify-center bg-white">
      <ol
        type="1"
        className="list-decimal flex flex-col gap-3 items-center w-[50%] mx-auto text-[10px]  text-sm bg-white  text-center "
      >
        <li>
          Monthly lease payment excludes taxes and fees, is based on $44,990
          Model Y Long Range Rear-Wheel Drive purchase price and is subject to
          change at any time. Requires $2,999 down with 36 months and 10,000
          miles. Subject to credit approval and available in select U.S. states.
          <u className=" font-semibold">Terms apply.</u>
        </li>
        <li>
          Price before estimated savings is $76,630, including Destination and
          Order Fees, but excluding taxes and other fees. Subject to change.
          Vehicle shown has upgrades that will increase the price. Estimated
          savings includes $6,500 in gas savings estimated over five years and
          state incentives, available to eligible buyers and subject to MSRP
          caps. Not all vehicles, customers or finance options will be eligible.
          <u className=" font-semibold">Terms apply.</u>
        </li>
        <li>
          Price before estimated savings is $81,630, including Destination and
          Order Fees, but excluding taxes and other fees. Subject to change.
          Vehicle shown has upgrades that will increase the price. Estimated
          savings includes $6,500 in gas savings estimated over five years, the
          $7,500 Federal Tax Credit and state incentives, available to eligible
          buyers and subject to MSRP caps. Not all vehicles, customers or
          finance options will be eligible.{" "}
          <u className=" font-semibold">Terms apply.</u>
        </li>
        <li>
          Monthly lease payment excludes taxes and fees, is based on $42,490
          Model 3 Long Range Rear-Wheel Drive purchase price and is subject to
          change at any time. Requires $2,999 down with 36 months and 10,000
          miles. Subject to credit approval and available in select U.S. states.
          <u className=" font-semibold">Terms apply.</u>
        </li>
      </ol>

      <div className=" w-[50%]  flex justify-center items-center mx-auto py-4 gap-3 text-nowrap text-xs font-medium">
        <p>Tesla © 2024 </p>
        <p>Privacy & Legal</p>
        <p>Vehicle Recalls</p>
        <p>Contact</p>
        <p>News</p>
        <p>Get Updates</p>
        <p>Locations</p>
      </div>
    </div>
  );
};

export default Footer;
