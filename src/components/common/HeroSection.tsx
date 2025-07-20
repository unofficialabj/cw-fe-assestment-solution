import { SearchBar } from "./SearchBar";

export function HeroSection() {
  const onSearch = (search: string) => {
    console.log(search);
    // search logic not required
  };

  return (
    <section
      aria-label="Hero search section"
      className="relative overflow-hidden rounded-none md:rounded-xl">
      <img
        src="/task1/hero-bg.png"
        alt=""
        className="w-full h-[480px] object-cover"
        role="presentation"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 gap-8">
        <h1 className="text-3xl md:text-5xl text-white tracking-normal md:tracking-[-2px] px-4 md:px-28 font-black">
          Search for words, phrases and meanings
        </h1>
        <SearchBar initialValue="" onSearch={onSearch} />
      </div>
    </section>
  );
}
