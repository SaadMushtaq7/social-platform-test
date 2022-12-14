import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface StoryData {
  img: string;
  username: string;
}

const Story: FC<StoryData> = ({ img, username }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/story")}>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src={img}
        alt={username}
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
