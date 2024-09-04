import React from "react";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <div>
      <div className="w-full flex flex-wrap justify-center mt-8">
        <div className="flex-col items-center">
          <h1 className="m-auto font-bold text-3xl text-gray-400">
            Consys Street Knowledge
          </h1>
          <Input className="block w-80 m-auto mt-4 text-white"></Input>
        </div>
      </div>
    </div>
  );
};

export default Header;
