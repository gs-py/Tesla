import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

interface Props {
  title: string;
  List: string[];
  count?: number;
  onClick: () => void;
  children: React.ReactNode;
}

const List = ({ List, title = "Cities", count, onClick, children }: Props) => {
  const [inputVal, setInput] = useState("");
  const [items, setItems] = useState(List || []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (inputVal.trim() !== "") {
      setItems([...items, inputVal]);
      setInput("");
    }
  };

  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className=" w-[90%] mx-auto">
      <div className="flex justify-between px-3 my-2">
        {/* Tiite DIcv */}
        <div className="py-1 px-3 my-1 bg-[#ede8f5] text-black rounded-xl underline">
          {title}
        </div>

        <div className=" gap-3 flex justify-center items-center ">
          <input
            type="text"
            placeholder="Add the item"
            value={inputVal}
            onChange={handleInput}
            className="caret-pink-500 text-black appearance-none rounded shadow-md shadow-blue-700 ring-purple-500 ring-1 focus:ring-pink-600 focus:shadow-none"
          />
          <button
            className="bg-slate-600 py-1 px-3 rounded-xl my-1"
            onClick={handleAdd}
          >
            ADD
          </button>
        </div>
      </div>

      <ul>
        <hr />
        {items.map((item, index) => (
          <div key={index} className="flex justify-center items-center my-3">
            <li
              className="text-center text-slate-500 text-lg font-medium w-[80%]"
              onClick={() => {
                console.log(`Clicked item: ${item}`); // Log clicked item
                onClick();
              }}
            >
              {item}
            </li>
            <MdDelete
              className="text-red-600 cursor-pointer w-fit h-full hover:text-green-600"
              onClick={() => handleDelete(index)}
            />
          </div>
        ))}

        {children}
      </ul>
    </div>
  );
};

export default List;
