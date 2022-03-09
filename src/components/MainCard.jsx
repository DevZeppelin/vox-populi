import React from "react";

const MainCard = ({ children, text, src }) => {
  return (
    <div className=" flex flex-col p-6 m-4 rounded-lg text-center hover:bg-mgray hover:bg-opacity-40 cursor-pointer">
      {" "}
      <img src={src} alt="logo gobierno" className="m-10 bg-dgray rounded-3xl border-2 border-lgray"  />
      <h3 className="text-base uppercase font-black">{children}</h3>
      <p className="text-sm pt-2">{text}</p>
    </div>
  );
};

export default MainCard;
