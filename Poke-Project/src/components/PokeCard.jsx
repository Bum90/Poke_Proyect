// Tomy hace esta parte ✅ //
import { useState} from "react";

const coloresTipo = {
  fire: "#FFDDC1",
  water: "#C1E1FF",
  electric: "#FFF3C4",
  grass: "#C1FFD7",
  poison: "#E8C1FF",
  normal: "#F0F0F0",
  flying: "#C1ECFF",
  psychic: "#FFC1E3",
  bug: "#D7FFC1",
  rock: "#E8E0C1",
  ground: "#F5E6C1",
  ice: "#C1F5FF",
  dragon: "#C1C8FF",
  ghost: "#D4C1FF",
  dark: "#C8C1C1",
  steel: "#D4D4E8",
  fairy: "#FFC1F0",
  fighting: "#FFC1C1",
}

function PokeCard({ pokemon, onEliminar, onEditar, onVerDetalle }) {
    return ( 
        <div className="poke-card">
        <div className="poke-card-top" 
        style={{ background: coloresTipo[pokemon.tipo[0].type.name] || "#f0f0f0" }}
        onClick={() => onVerDetalle(pokemon.id)}>
         <img src={pokemon.imagen} alt={pokemon.nombre} className="poke-image" />
         </div>
            <div className="poke-card-body">
              <div className="poke-num">#{pokemon.id}</div>
              <div className="poke-name">{pokemon.nombre}</div>
              {pokemon.apodo && <p className="poke-nick">"{pokemon.apodo}"</p>}
              {pokemon.nota && <p className="poke-note">{pokemon.nota}</p>}
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
              {pokemon.tipo.map((t) => (
                <span key={t.type.name} className="badge" style={{ background: coloresTipo[t.type.name] || "#f0f0f0" }}>•{t.type.name}</span>
              ))}
              </div>
              <div className="card-actions">
              <button className="btn-edit" onClick={() => onEditar(pokemon.id)}>✏️Editar</button>
              <button className="btn-del" onClick={() => onEliminar(pokemon.id)}>X</button>
            </div>
         </div>
         </div>
        );
}
export default PokeCard;