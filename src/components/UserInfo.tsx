import { IoIosMore } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import avatar from "../assets/images/avatar.png";

const UserInfo = () => {
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          src={avatar}
          alt=""
          className="w-[50px] h-[50px] rounded-[50%] object-cover"
        />
        <h2>Vu Feng</h2>
      </div>
      <div className="flex gap-5">
        <IoIosMore className="text-[20px] cursor-pointer" />
        <FaVideo className="text-[20px] cursor-pointer" />
        <FaRegEdit className="text-[20px] cursor-pointer" />
      </div>
    </div>
  );
};

export default UserInfo;
