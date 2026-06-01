// Tomy hace esta parte ✅ //
import { useState} from "react";

function PokeCard({ pokemon, onEliminar, onEditar, onVerDetalle }) {
    return ( 
        <div className="poke-card">
        <div className="poke-card-top" onClick={() => onVerDetalle(pokemon.id)}>
         <img src={pokemon.imagen} alt={pokemon.nombre} className="poke-image" />
         </div>
            <div className="poke-card-body">
              <div className="poke-num">#{pokemon.id}</div>
              <div className="poke-name">{pokemon.nombre}</div>
              {pokemon.tipo.map((t) => (
                <span key={t.type.name} className="badge">•{t.type.name}</span>
              ))}
              <div className="card-actions">
              <button className="btn-edit" onClick={() => onEditar(pokemon.id)}>✏️Editar</button>
              <button className="btn-del" onClick={() => onEliminar(pokemon.id)}>X</button>
            </div>
         </div>
         </div>
        );
}
export default PokeCard;