// Santi hace esta parte ✅//
import { useState, useEffect } from "react";

function DetailModal({ pokemon, onCerrar, onEditar, onEliminar }) {

    return (
        <div>
            <img src={pokemon.imagen} alt={pokemon.nombre}/>
            <p>{pokemon.nombre}</p>
            <p>{pokemon.id}</p>
            <button onClick={() => onCerrar()}>Cerrar</button>
            <button onClick={() => onEditar(pokemon.id)}>Editar</button>
            <button onClick={() => onEliminar(pokemon.id)}>Eliminar</button>
        </div>
    )
}

export default DetailModal