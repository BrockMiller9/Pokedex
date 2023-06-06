import React from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

const Pokedex = ({ pokemon }) => {
  return (
    <div className="Pokedex">
      <h1>Pokedex!</h1>
      <div className="Pokedex-cards">
        {pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
