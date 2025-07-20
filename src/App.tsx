import { TagList } from "@/components/common/TagList";
import { Header } from "@/components/common/Header";
import { HeroSection } from "./components/common/HeroSection";

export default function App() {
  const tags = [
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ];

  return (
    <main className="bg-black min-h-screen text-white">
      <header className="sticky top-0 z-10" role="banner">
        <Header />
      </header>
      <section className="max-w-[896px] mx-auto py-5">
        <HeroSection />

        <TagList title="Trending" tags={tags} />
        <TagList title="For you" tags={tags} />
      </section>
    </main>
  );
}
