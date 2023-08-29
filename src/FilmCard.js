import React, { useState } from 'react';

const FilmCard = ({ onAjoutFilm }) => {
  const [nouveauFilm, setNouveauFilm] = useState({
    titre: '',
    description: '',
    posterURL: '',
    note: ''
  });

  const handleChampChange = (e) => {
    const { name, value } = e.target;
    setNouveauFilm(prevFilm => ({ ...prevFilm, [name]: value }));
  };

  const handleAjoutFilm = (e) => {
    e.preventDefault();
    onAjoutFilm(nouveauFilm);
    setNouveauFilm({
      titre: '',
      description: '',
      posterURL: '',
      note: ''
    });
  };

  return (
    <div className="ajouter-film">
      <h2>Ajouter un nouveau film</h2>
      <form onSubmit={handleAjoutFilm}>
        <input
          type="text"
          name="titre"
          placeholder="Titre"
          value={nouveauFilm.titre}
          onChange={handleChampChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={nouveauFilm.description}
          onChange={handleChampChange}
        />
        <input
          type="url"
          name="posterURL"
          placeholder="URL de l'affiche"
          value={nouveauFilm.posterURL}
          onChange={handleChampChange}
        />
        <input
          type="number"
          name="note"
          placeholder="Note"
          value={nouveauFilm.note}
          onChange={handleChampChange}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default FilmCard;
