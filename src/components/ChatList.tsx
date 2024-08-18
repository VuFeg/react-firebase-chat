import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import avatar from "../assets/images/avatar.png";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  const users = [
    {
      id: 1,
      name: "Vu Feng",
      message: "Hello",
      avatar: avatar,
    },
    {
      id: 2,
      name: "Vu Feng",
      message: "Hello",
      avatar: avatar,
    },
    {
      id: 3,
      name: "Vu Feng",
      message: "Hello",
      avatar: avatar,
    },
    {
      id: 4,
      name: "Vu Feng",
      message: "Hello",
      avatar: avatar,
    },
  ];

  return (
    <div className="flex-1 overflow-y-scroll no-scrollbar">
      <div className="flex items-center gap-5 p-5">
        <div className="flex-1 flex items-center gap-5 p-[10px] rounded-[10px] bg-[rgba(17,25,40,0.5)]">
          <GoSearch className="text-[20px] cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none flex-1 text-white"
          />
        </div>
        {addMode ? (
          <button onClick={() => setAddMode(!addMode)}>
            <FiMinus className="text-[36px] bg-[rgba(17,25,40,0.5)] p-[10px] rounded-[10px] cursor-pointer" />
          </button>
        ) : (
          <button onClick={() => setAddMode(!addMode)}>
            <AiOutlinePlus className="text-[36px] bg-[rgba(17,25,40,0.5)] p-[10px] rounded-[10px] cursor-pointer" />
          </button>
        )}
      </div>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center gap-5 p-5 cursor-pointer border-b border-solid border-b-[#dddddd35]"
        >
          <img
            src={user.avatar}
            alt=""
            className="w-[50px] h-[50px] rounded-[50%] object-cover"
          />
          <div className="flex flex-col gap-[10px]">
            <span className="font-medium">{user.name}</span>
            <p className="text-sm font-medium">{user.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
