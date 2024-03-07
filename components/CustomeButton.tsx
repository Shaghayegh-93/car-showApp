"use client";
import React from "react";
import { CustomeButtonProps } from "@/types/index";

const CustomeButton = ({
  title,
  containerStyles,
  clickHandler,
}: CustomeButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles} `}
        onClick={clickHandler}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};

export default CustomeButton;
