import React, { useState } from "react";
const Major = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Major
      <hr />
      <div className="bg-green-400 flex gap-4">
        <h1 className="px-2 bg-white text-red-700 rounded-xl w-fit my-2 ml-2 text-xl  outline-dashed  ">
          {count}
        </h1>
        <button
          onClick={() => setCount(count + 1)}
          className=" bg-violet-700 rounded-xl px-3 my-2 outline-1 outline-dotted border-spacing-1 active:bg-slate-600"
        >
          Increment
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Major;
