type SearchFormProps = {
  searchText: string;
  onSearchTextChange: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchForm({
  searchText,
  onSearchTextChange,
}: SearchFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action="#"
      className="search"
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
        value={searchText}
        onChange={(e) => {
          onSearchTextChange(e.target.value);
        }}
      />
    </form>
  );
}
