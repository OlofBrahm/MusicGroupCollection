import { useParams } from "react-router-dom";
import { useMusicGroupDetail } from "./hooks/useMusicGroupDetail";
import GroupHero from "./components/GroupHero/GroupHero";
import MembersList from "./components/MembersList/MembersList";
import AlbumList from "./components/AlbumList/AlbumList";

export default function MusicGroupDetailPage() {
  const { id } = useParams();
  const { group, error, loading } = useMusicGroupDetail(id);

  if (loading) return <main className="container"><p>Loading...</p></main>;
  if (error) return <main className="container"><p className="error">{error}</p></main>;
  if (!group) return null;

  return (
    <main id="group-detail-container">
      <GroupHero 
        name={group.name} 
        genre={group.strGenre} 
        year={group.establishedYear} 
      />

      <div className="detail-grid">
        <MembersList artists={group.artists ?? []} />
        <AlbumList albums={group.albums ?? []} />
      </div>
    </main>
  );
}