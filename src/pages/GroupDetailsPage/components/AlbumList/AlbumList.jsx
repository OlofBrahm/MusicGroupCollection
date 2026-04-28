import "./AlbumList.css";

export default function AlbumList({ albums = [] }) {
  return (
    <section className="info-block-albums">
      <h3>
        Albums
        <span className="stat-value">{albums.length}</span>
      </h3>
      <div className="album-scroll-box">
        <ul className="album-list">
          {albums.length > 0 ? (
            albums.map((album) => (
              <li key={`${album.name}-${album.releaseYear}`}>
                <span>{album.releaseYear}</span>
                {album.name}
              </li>
            ))
          ) : (
            <li>No albums listed</li>
          )}
        </ul>
      </div>
    </section>
  );
}