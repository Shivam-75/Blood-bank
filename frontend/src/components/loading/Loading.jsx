import React from "react";

const Loading = ({ height, width }) => {
  return (
    <div className="flex flex-row gap-4">
      <div
        style={{ height: height, width: width }}
        className=" rounded-full animate-spin border-y-4 border-solid border-pink-500 border-t-transparent shadow-md"></div>
    </div>
  );
};

export default Loading;
