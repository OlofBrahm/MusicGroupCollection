import { useState } from "react";

export function useAddGroupForm(onSubmit) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    
    if (!name.trim() || !genre || !year) return;

    setSubmitting(true);
    
    const success = await onSubmit({
      name: name.trim(),
      genre: Number(genre),
      year: Number(year),
    });

    if (success) {
      setName("");
      setGenre("");
      setYear("");
    }
    
    setSubmitting(false);
  }

  return { name, setName, genre, setGenre, year, setYear, submitting, handleSubmit };
}