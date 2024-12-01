import React from "react";

const Action = ({ handleCLick, type, className }) => {
  return (
    <div className={className} onClick={handleCLick}>
      {type}
    </div>
  );
};

export default Action;
