import React, { useState } from 'react';

const Filtrer = ({ onFiltreChange }) => {
  const [filtreTitre, setFiltreTitre] = useState('');
  const [filtreNote, setFiltreNote] = useState('');

  const handleFiltreSubmit = (e) => {
    e.preventDefault();
    onFiltreChange(filtreTitre, filtreNote);
  };

  return (
    <div className="filtrer">
      <form onSubmit={handleFiltreSubmit}>
        <input
          type="text"
          placeholder="Filtrer par titre"
          value={filtreTitre}
          onChange={(e) => setFiltreTitre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filtrer par note"
          value={filtreNote}
          onChange={(e) => setFiltreNote(e.target.value)}
        />
        <button type="submit">Filtrer</button>
      </form>
    </div>
  );
};

export default Filtrer;
