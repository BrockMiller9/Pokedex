import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, base_experience }) => {
  const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <img src={POKE_API} alt={name} />
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {base_experience}</div>
    </div>
  );
};

export default Pokecard;
