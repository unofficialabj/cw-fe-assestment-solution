import type { TagListProps } from "@/@types";
import { Badge } from "../ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

export function TagList({ title, tags }: Readonly<TagListProps>) {
  const headingId = `${title.toLowerCase().replace(/\s+/g, "-")}-heading`;

  const isMobile = useIsMobile();

  return (
    <section
      className={`mt-8 ${isMobile ? "px-6" : ""}`}
      aria-labelledby={headingId}>
      <h2 id={title} className="sr-only">
        {title}
      </h2>
      <div className="text-white text-lg font-semibold mb-4">{title}</div>
      <ul className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-[#293038] text-[#9EABB8] hover:bg-gray-700 cursor-pointer text-sm px-4 h-8"
            role="list-items">
            {tag}
          </Badge>
        ))}
      </ul>
    </section>
  );
}
