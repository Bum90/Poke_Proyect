// Santi hace esta parte ✅//
import { useState, useEffect } from "react";
import Header from "./components/Header";
import PokeCard from './components/PokeCard'
import EditModal from "./components/EditModal";
import DetailModal from "./components/DetailModal";

function Pokedex() {
  const [coleccion, setColeccion] = useState([]);
  const [resultadoBusqueda, setResultadoBusqueda] = useState(null);
  const [pokemonEditado, setPokemonEditado] = useState(null);
  const [pokemonDetalles, setPokemonDetalles] = useState(null);

  async function buscarPokemon(nombre) {
    const respuesta = await fetch (`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const datos = await respuesta.json();
    if (!respuesta.ok) return;
    setResultadoBusqueda({
      id: datos.id,
      nombre: datos.name,
      imagen: datos.sprites.front_default,
      tipo: datos.types, 
      stats: datos.stats,
      altura: datos.height,
      peso: datos.weight
    });
  }

function agregarPokemon() {
  setColeccion([...coleccion, resultadoBusqueda]);
  console.log(coleccion);
}

function eliminarPokemon(id) {
  setColeccion(coleccion.filter(pokemon => pokemon.id !== id));
}

function editarPokemon(id) {
  setPokemonEditado(coleccion.find(pokemon => pokemon.id === id));
}

function guardarEdicion(id, datosNuevos) {
  setColeccion(coleccion.map(pokemon => pokemon.id === id ? { ...pokemon, ...datosNuevos } : pokemon));
}

function verDetalle(id) {
  setPokemonDetalles(coleccion.find(pokemon => pokemon.id === id));
}

  return (
    <div>
        <Header onBuscar={buscarPokemon}/>
        {resultadoBusqueda && (
          <div>
              <img src={resultadoBusqueda.imagen}/>
              <p>{resultadoBusqueda.nombre}</p>
              <button onClick={agregarPokemon}>Capturar Pokemon</button>
          </div>
        )}
          {coleccion.map(pokemon => (
            <PokeCard
              key={pokemon.id}
              pokemon={pokemon}
              onEliminar={eliminarPokemon}
              onEditar={editarPokemon}
              onVerDetalle={verDetalle}
            />
          ))}
          {pokemonEditado && (
          <EditModal
            pokemon={pokemonEditado}
            onGuardar={guardarEdicion}
            onCerrar={() => setPokemonEditado(null)}
          />
        )}
          {pokemonDetalles && (
            <DetailModal
              pokemon={pokemonDetalles}
              onCerrar={() => setPokemonDetalles(null)}
              onEditar={editarPokemon}
              onEliminar={eliminarPokemon}
            />
        )}
    </div>
  )}

export default Pokedex 