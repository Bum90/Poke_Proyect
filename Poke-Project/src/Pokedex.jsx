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
  <>
    <Header onBuscar={buscarPokemon} totalCapturados={coleccion.length}/>
      <div className="pokedex">
        {resultadoBusqueda && (
          <div className="resultado-busqueda">
    <img src={resultadoBusqueda.imagen}/>
    <div className="resultado-info">
        <p className="result-num">#{resultadoBusqueda.id}</p>
        <p className="result-name">{resultadoBusqueda.nombre}</p>
        {resultadoBusqueda.tipo.map((t) => (
            <span key={t.type.name} className="badge">{t.type.name}</span>
        ))}
        <button className="btn-add" onClick={agregarPokemon}>+ Agregar a colección</button>
    </div>
</div>
        )}
        <div className="coleccion">
          {coleccion.map(pokemon => (
            <PokeCard
              key={pokemon.id}
              pokemon={pokemon}
              onEliminar={eliminarPokemon}
              onEditar={editarPokemon}
              onVerDetalle={verDetalle}
            />
          ))}
          </div>
          {coleccion.length === 0 && (
            <div className="empty">
              <p>◎</p>
              <p>Buscá un pokémon arriba para empezar</p>
            </div>
          )}
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
    </>
  )}

export default Pokedex 