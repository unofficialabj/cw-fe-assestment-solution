import type { SearchBarProps } from "@/@types";
import { useEffect, useState } from "react";
import { SearchIcon } from "./SearchIcon";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function SearchBar({
  initialValue,
  onSearch,
}: Readonly<SearchBarProps>) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(innerValue);
  };

  return (
    <form
    onSubmit={handleSubmit}
      role="search"
      aria-label="Keyword search"
      className="flex items-center bg-[#1C2126] pl-4 pr-1.5 py-1.5 rounded-lg w-full max-w-lg border-[1px] border-[#3D4754]">
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <SearchIcon aria-hidden="true" />

      <Input
        id="search-input"
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus-visible:ring-0 placeholder:text-[#9EABB8]"
      />

      <Button
        className="bg-[#1A80E5] hover:bg-[#1A80E5]/70 text-white ml-4 cursor-pointer py-6 px-5">
        Search
      </Button>
    </form>
  );
}
