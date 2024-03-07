"use client";
import React from "react";
import { CustomeButtonProps } from "@/types/index";

const CustomeButton = ({
  title,
  containerStyles,
  clickHandler,
  btnType,
}: CustomeButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles} `}
        onClick={clickHandler}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};

export default CustomeButton;
