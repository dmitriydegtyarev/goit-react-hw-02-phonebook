export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Enter name for Search"
      />
    </label>
  );
};
