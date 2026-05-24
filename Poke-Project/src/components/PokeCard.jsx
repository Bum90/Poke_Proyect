// Tomy hace esta parte ✅ //
import { useState} from "react";

function PokeCard({ pokemon, onEliminar, onEditar, onVerDetalle }) {
    return ( 
        <div className="poke-card">
        <div className="poke-card-top">
         <img src={pokemon.imagen} alt={pokemon.nombre} className="poke-image" />
         </div>
            <div className="poke-card-body">
              <div className="poke-num">{pokemon.id}</div>
              <div className="poke-name">{pokemon.nombre}</div>
              <div className="card-action">
              <button onClick={() => onEditar(pokemon.id)}>Editar</button>
              <button onClick={() => onEliminar(pokemon.id)}>X</button>
              <button onClick={() => onVerDetalle(pokemon.id)}>Ver Detalles</button>
            </div>
         </div>
         </div>
        );
}
export default PokeCard;