import { useState, useEffect, useMemo } from "react";
import { fetchMusicGroups, searchMusicGroups } from "../../../services/api";

const PAGE_SIZE = 10;

export function useMusicGroups() {
  const [groups, setGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSource, setDataSource] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isSearching = useMemo(() => searchQuery.trim().length > 0, [searchQuery]);

  useEffect(() => {
    let ignore = false;

    async function load() {
      setLoading(true);
      setError("");

      try {
        const result = isSearching
          ? await searchMusicGroups(searchQuery, currentPage - 1, PAGE_SIZE, dataSource)
          : await fetchMusicGroups(currentPage - 1, PAGE_SIZE, dataSource);

        if (ignore) return;

        setGroups(result.pageItems ?? []);
        setTotalPages(Math.max(result.pageCount ?? 1, 1));
        setTotalResults(result.dbItemsCount ?? 0);
      } catch (err) {
        if (ignore) return;
        setError(err.status === 400 ? "Invalid search term." : "Failed to load music groups.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => { ignore = true; };
  }, [currentPage, isSearching, searchQuery, dataSource]);

  return {
    groups, currentPage, totalPages, totalResults, isSearching, searchQuery, dataSource, error, loading,
    setSearchQuery, setDataSource, setCurrentPage, setError, setGroups, setTotalPages, setTotalResults
  };
}