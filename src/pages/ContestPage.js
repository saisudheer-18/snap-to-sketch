import React, { useState } from "react";
import "./ContestPage.css";
import sketch1 from '../assets/sketch12.jpg';
import sketch2 from '../assets/sketch13.jpg';
import sketch3 from '../assets/sketch14.jpg';
import sketch4 from '../assets/sketch15.jpg';

const ContestPage = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      title: "Sunlit Forest Stream",
      description: "A graceful tribal woman standing tall amidst nature’s serenity, reflecting tradition and elegance.",
      imageUrl: sketch1,
    },
    {
      id: 2,
      title: "Gothic Castle at Dusk",
      description: "A mystic face in graphite—timeless, powerful, and hauntingly expressive in monochrome tones.",
      imageUrl: sketch2,
    },
    {
      id: 3,
      title: "Lone Tree on Hill",
      description: "A majestic peacock in full bloom—gracefully shaded with intricate curves and symbolic strength.",
      imageUrl: sketch3,
    },
    {
      id: 4,
      title: "Red Boot Fantasy",
      description: "A quirky red boot bursting with imagination and movement—where fashion meets fantasy.",
      imageUrl: sketch4,
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
    preview: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, preview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.image) {
      alert("Please fill all fields and upload your sketch image!");
      return;
    }
    const newEntry = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      imageUrl: form.preview,
    };
    setEntries((prev) => [newEntry, ...prev]);
    setForm({ title: "", description: "", image: null, preview: null });
    alert("Your contest entry has been added! Keep creating, Yamini!");
  };

  return (
    <div className="contest-page">
      <h1 className="page-title">🎨 Yamini Rajanala's Contest Participation</h1>

      <form className="contest-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title of Your Sketch"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Tell us about your sketch..."
          value={form.description}
          onChange={handleChange}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {form.preview && (
          <div className="image-preview">
            <img src={form.preview} alt="Sketch Preview" />
          </div>
        )}

        <button type="submit">Add Entry</button>
      </form>

      <hr />

      <h2 className="showcase-title">Yamini's Contest Sketches</h2>
      <div className="entries-grid">
        {entries.length === 0 ? (
          <p>No contest entries yet. Add your first sketch!</p>
        ) : (
          entries.map(({ id, title, description, imageUrl }) => (
            <div className="entry-card" key={id}>
              <img src={imageUrl} alt={title} />
              <h3>{title}</h3>
              <p>{description}</p>
              <p className="entry-author">By: Yamini Rajanala</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContestPage;
