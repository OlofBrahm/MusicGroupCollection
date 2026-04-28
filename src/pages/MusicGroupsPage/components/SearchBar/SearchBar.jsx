import "./SearchBar.css";

export default function SearchBar({ value, onChange, onSubmit, placeholder = "Search...", buttonLabel = "Search" }) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <div className="search-item">
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button className="search-btn" type="submit">
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
