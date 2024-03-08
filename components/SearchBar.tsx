"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const searchHandler = () => {};
  const [manufacturer, setManufacturer] = useState("");
  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={searchHandler}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative h-auto">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
