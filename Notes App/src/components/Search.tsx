import { MagnifyingGlass } from "phosphor-react";

type SearchProps = {
  handleSearchNote: (search: string) => void;
};

export function Search(props: SearchProps) {
  return (
    <div className="search">
      <MagnifyingGlass size={21} weight="bold" />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) =>
          props.handleSearchNote((e.target as HTMLInputElement).value)
        }
      />
    </div>
  );
}
