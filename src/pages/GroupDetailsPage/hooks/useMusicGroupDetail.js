import { useState, useEffect } from "react";
import { fetchMusicGroup } from "../../../services/api";

export function useMusicGroupDetail(id) {
  const [group, setGroup] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    if (!id) {
      setError("No music group ID provided.");
      setLoading(false);
      return;
    }

    async function load() {
      setLoading(true);
      setError("");
      try {
        const response = await fetchMusicGroup(id);
        if (ignore) return;
        setGroup(response.item);
      } catch (err) {
        if (ignore) return;
        setError(err instanceof Error ? err.message : "Failed to load details.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => { ignore = true; };
  }, [id]);

  // Handle Document Title
  useEffect(() => {
    document.title = group?.name 
      ? `${group.name} - Music Group Details` 
      : "Music Groups - Group Details";
  }, [group]);

  return { group, error, loading };
}