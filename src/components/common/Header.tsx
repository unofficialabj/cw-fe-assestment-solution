import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { SearchIcon } from "./SearchIcon";

export function Header() {
  const isMobile = useIsMobile();
  return (
    <section className="flex items-center justify-between px-10 py-3 bg-black border-b border-[#9EABB8]">
      <a
        href="/"
        className="flex items-center gap-4"
        aria-label="Worctionary Home">
        <img src="/task1/logo.png" alt="Worctionary logo" className="w-4 h-4" />
        <span className="text-white font-semibold text-lg">Worctionary</span>
      </a>

      <div className="flex items-center gap-8">
        {!isMobile && (
          <form role="search" aria-label="Site search">
            <label htmlFor="header-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <span className="absolute top-1/2 -translate-y-1/2 p-4">
                <SearchIcon />
              </span>
              <Input
                id="header-search"
                type="text"
                placeholder="Search"
                className="pl-12 bg-gray-800 text-white border-none focus:ring-0 rounded-xl py-5 w-40 focus-visible:ring-0"
              />
            </div>
          </form>
        )}
        <div aria-label="User profile">
          <Avatar style={{ width: "32px", height: "32px" }}>
            <AvatarImage src="/task1/profile.png" alt="User profile image" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}
