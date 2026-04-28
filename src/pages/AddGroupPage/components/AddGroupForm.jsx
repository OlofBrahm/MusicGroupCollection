import "./AddGroupForm.css";
import { useAddGroupForm } from "../hooks/useAddGroupForm";

export default function AddGroupForm({ onSubmit }) {
  const {
    name, setName,
    genre, setGenre,
    year, setYear,
    message,
    submitting,
    handleSubmit,
  } = useAddGroupForm(onSubmit);

  const canSubmit = !submitting && name && genre && year;

  return (
    <form className="add-group-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="group-name">Group Name</label>
        <input
          type="text"
          id="group-name"
          placeholder="Enter group name..."
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="group-genre">Genre</label>
        <select
          id="group-genre"
          required
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Select Genre</option>
          <option value="0">Rock</option>
          <option value="1">Pop</option>
          <option value="2">Jazz</option>
          <option value="3">Classical</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="group-year">Year Formed</label>
        <input
          type="number"
          id="group-year"
          placeholder="Enter year..."
          required
          min="1"
          max="2026"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-btn" disabled={!canSubmit}>
        {submitting ? "Adding..." : "Add Group"}
      </button>

      {message && (
        <p id="form-message" className="form-message">
          {message}
        </p>
      )}
    </form>
  );
}