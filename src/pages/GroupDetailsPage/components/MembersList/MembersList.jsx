import "./MembersList.css";

export default function MembersList({ artists }) {
  return (
    <section className="info-block">
      <h3>Members</h3>
      <ul className="member-pills">
        {artists.length > 0 ? (
          artists.map((artist) => (
            <li key={`${artist.firstName}-${artist.lastName}`}>
              {artist.firstName} {artist.lastName}
            </li>
          ))
        ) : (
          <li>No members listed</li>
        )}
      </ul>
    </section>
  );
}