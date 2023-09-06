import React from "react";

const FeedBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center  ">
        <div className=" w-full max-w-[500px]">{children}</div>
      </div>
    </div>
  );
};

export default FeedBody;
