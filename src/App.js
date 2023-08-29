import React, { useState } from 'react';
import './App.css';
import FilmCard from './FilmCard';
import ListeFilms from './ListeFilms';
import Filtrer from './Filtrer';

const filmsData = [
  {
    id: 1,
    titre: 'Film 1',
    description: 'Description du Film 1',
    posterURL: 'url_de_l_affiche_1',
    note: 4.5
  },
  {
    id: 2,
    titre: 'Film 2',
    description: 'Description du Film 2',
    posterURL: 'url_de_l_affiche_2',
    note: 3.8
  },
  // ... autres films
];

function App() {
  const [films, setFilms] = useState(filmsData);

  const handleAjoutFilm = (nouveauFilm) => {
    setFilms([...films, nouveauFilm]);
  };

  const handleFiltreChange = (filtreTitre, filtreNote) => {
    // Appliquer le filtrage en fonction des filtres de titre et de note
    const filmsFiltres = filmsData.filter(film => {
      const titreMatch = film.titre.toLowerCase().includes(filtreTitre.toLowerCase());
      const noteMatch = film.note >= parseFloat(filtreNote) || isNaN(parseFloat(filtreNote));
      return titreMatch && noteMatch;
    });

    setFilms(filmsFiltres);
  };

  return (
    <div className="App">
      <h1>Application de Cinéma</h1>
      <Filtrer onFiltreChange={handleFiltreChange} />
      <ListeFilms films={films} />
      <FilmCard onAjoutFilm={handleAjoutFilm} />
    </div>
  );
}

export default App;
