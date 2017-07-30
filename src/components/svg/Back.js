import React from "react";

const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <clipPath id="a" clip-rule="evenodd">
        <path fill="#FFF" d="M0 0h48v48H0V0z" />
      </clipPath>
      <g clip-path="url(#a)">
        <path
          transform="translate(2 7)"
          id="b"
          d="M44 19.2157H6.58268L20.0945 32.598 17.6693 35 .6e-7 17.5 17.6693.3e-7 20.0945 2.40196 6.58268 15.7843H44v3.4314z"
        />
      </g>
      <defs>
        <path
          id="b"
          d="M44 19.2157H6.58268L20.0945 32.598 17.6693 35 .6e-7 17.5 17.6693.3e-7 20.0945 2.40196 6.58268 15.7843H44v3.4314z"
        />
      </defs>
    </svg>
  );
};

export default BackIcon;
