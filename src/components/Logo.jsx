import React from "react";

const Logo = ({ size }) => {
  return (
    <div>
      <span className={`text-${size} text-blue-600 font-bold font-caveat`}>
        Anindya{" "}
      </span>
      <span className={`text-${size} text-black font-bold font-caveat`}>
        Nag
      </span>
    </div>
  );
};

export default Logo;
