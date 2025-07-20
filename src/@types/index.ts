export type TagListProps = {
  title: string;
  tags: string[];
};

export type SearchBarProps = {
  initialValue: string;
  onSearch: (search: string) => void;
};