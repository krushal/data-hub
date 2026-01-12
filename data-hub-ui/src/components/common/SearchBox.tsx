const SearchBox = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => (
  <input
    type="text"
    placeholder="Search datasets..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ padding: 8, width: "100%", marginBottom: 16 }}
  />
);

export default SearchBox;
