import { Link } from "react-router-dom";
import "./GroupCard.css";

export default function GroupCard({ group }) {
  return (
    <div className="group-card">
      <div className="group-info">
        <div className="group-text">
          <span className="group-name">{group.name}</span>
          <span className="group-genre">
            {group.strGenre} • {group.establishedYear}
          </span>
        </div>
      </div>

      <div className="group-stats">
        <span className="stat-label">Albums:</span>
        <span className="stat-value">{group.albums?.length ?? 0}</span>
      </div>

      <div className="group-actions">
        <Link to={`/groups/${group.musicGroupId}`} className="btn-details">
          <span className="btn-details-label">View Details</span>
        </Link>
      </div>
    </div>
  );
}
