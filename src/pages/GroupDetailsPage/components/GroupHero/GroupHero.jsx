import "./GroupHero.css";

export default function GroupHero({ name, genre, year }) {
  return (
    <header className="group-hero">
      <div className="hero-text">
        <span className="genre-tag">
          {genre} • {year}
        </span>
        <h1 className="huge-name">{name}</h1>
      </div>
    </header>
  );
}