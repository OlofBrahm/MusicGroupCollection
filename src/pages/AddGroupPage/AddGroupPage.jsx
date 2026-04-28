import { createMusicGroup } from "../../services/api";
import "./add-group.css";
import AddGroupForm from "./components/AddGroupForm";

export default function AddGroupPage() {
  
  async function handleAddGroup(formData) {
    const payload = {
      seeded: false,
      name: formData.name,
      establishedYear: formData.year,
      genre: formData.genre,
      albumsId: [],
      artistsId: [],
    };

    try {
      await createMusicGroup(payload);
      // Return true so the form knows it's safe to clear the inputs
      return { success: true, message: `Music group "${formData.name}" created!` };
    } catch (error) {
      return { success: false, message: "Failed to create music group." };
    }
  }

  return (
    <main className="container">
      <section className="form-card">
        <header className="form-header">
          <h1>Add New Music Group</h1>
        </header>
        <AddGroupForm onSubmit={handleAddGroup} />
      </section>
    </main>
  );
}