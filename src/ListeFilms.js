import React from 'react';
import FilmCard from './FilmCard';

const ListeFilms = ({ films }) => {
  return (
    <div className="film-list">
      {films.map(film => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};

export default ListeFilms;
