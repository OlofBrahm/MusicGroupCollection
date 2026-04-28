import { useState } from "react";
import { useMusicGroups } from "./hooks/useMusicGroups";
import GroupCard from "./components/GroupCard/GroupCard";
import Pagination from "../../components/Pagination/Pagination";
import MusicGroupsHeader from "./components/MusicGroupsHeader/MusicGroupsHeader";
import "./MusicGroupsPage.css";

export default function MusicGroupsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    groups, currentPage, totalPages, totalResults, isSearching, searchQuery, dataSource, error, loading,
    setSearchQuery, setDataSource, setCurrentPage, setError, setGroups, setTotalPages, setTotalResults
  } = useMusicGroups();

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setGroups([]);
    setTotalPages(1);
    setTotalResults(0);
    setError("");
    setSearchQuery(searchTerm.trim());
  };

  const toggleDataSource = (isSeeded) => {
    setCurrentPage(1);
    setGroups([]);
    setTotalPages(1);
    setTotalResults(0);
    setError("");
    setDataSource(isSeeded);
  };

  return (
    <main className="container">
      <MusicGroupsHeader 
        dataSource={dataSource}
        onToggleData={toggleDataSource}
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        onSearchSubmit={handleSearch}
      />

      {isSearching && (
        <p className="active-query">
          <strong style={{ color: "#c9a450" }}>{totalResults}</strong> Search results for: "{searchQuery}"
        </p>
      )}

      {loading && <p>Loading music groups...</p>}
      {error && !loading && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <div className="group-list">
            {groups.map(group => (
              <GroupCard key={group.musicGroupId} group={group} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            pageCount={totalPages}
            totalCount={totalResults}
            isSearching={isSearching}
            onPrevious={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            onNext={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          />
        </>
      )}
    </main>
  );
}