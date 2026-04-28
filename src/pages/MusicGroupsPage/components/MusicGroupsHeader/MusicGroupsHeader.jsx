import SearchBar from "../SearchBar/SearchBar";
import "./MusicGroupsHeader.css";
export default function MusicGroupsHeader({ 
  dataSource, 
  onToggleData, 
  searchTerm, 
  onSearchChange, 
  onSearchSubmit 
}) {
  return (
    <header className="page-header">
      <div className="groups-header-row">
        <h1>Music Groups</h1>
        <label className="data-mode-control">
          Data mode
          <select
            className="data-mode-select"
            value={String(dataSource)}
            onChange={(e) => onToggleData(e.target.value === "true")}
          >
            <option value="false">Live</option>
            <option value="true">Seeded</option>
          </select>
        </label>
      </div>

      <SearchBar
        value={searchTerm}
        onChange={onSearchChange}
        onSubmit={onSearchSubmit}
        placeholder="Search groups..."
        buttonLabel="Search"
      />
    </header>
  );
}