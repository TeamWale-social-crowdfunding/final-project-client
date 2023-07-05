import React from "react";

const FeedBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-full ">
      <div className="p-4 sm:ml-64 flex items-center justify-center  ">
        <div className="p-4 w-full max-w-[500px]">{children}</div>
      </div>
    </div>
  );
};

export default FeedBody;
