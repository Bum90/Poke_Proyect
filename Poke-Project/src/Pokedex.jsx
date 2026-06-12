// Santi hace esta parte ✅//
import { useState, useEffect } from "react";
import Header from "./components/Header";
import PokeCard from './components/PokeCard'
import EditModal from "./components/EditModal";
import DetailModal from "./components/DetailModal";
import SugeridosCard from './components/SugeridosCard';

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

function Pokedex() {
  const [coleccion, setColeccion] = useState([]);
  const [resultadoBusqueda, setResultadoBusqueda] = useState(null);
  const [pokemonEditado, setPokemonEditado] = useState(null);
  const [pokemonDetalles, setPokemonDetalles] = useState(null);
  const [sugeridos, setSugeridos] = useState([]);

async function cargarSugeridos() {
  const ids = Array.from({length: 8}, () => Math.floor(Math.random() * 898) + 1)
  const resultados = await Promise.all(
    ids.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json()))
  )
  setSugeridos(resultados.map(d => ({
    id: d.id,
    nombre: d.name,
    imagen: d.sprites.front_default,
    tipo: d.types
  })))
}

  useEffect(() => {
    cargarSugeridos()
  }, [])

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
  <div style={{ background: coloresTipo[resultadoBusqueda.tipo[0].type.name] || "#f0f0f0", borderRadius: "12px", padding: "8px" }}>
    <img src={resultadoBusqueda.imagen}/>
  </div>
    <div className="resultado-info">
        <p className="result-num">#{resultadoBusqueda.id}</p>
        <p className="result-name">{resultadoBusqueda.nombre}</p>
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
        {resultadoBusqueda.tipo.map((t) => (
    <span key={t.type.name} className="badge" style={{ background: coloresTipo[t.type.name] || "#f0f0f0" }}>{t.type.name}</span>
))}
      </div>
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
          <div className="sugeridos">
              <h3>Pokémon sugeridos</h3>
              <div className="coleccion">
                {sugeridos.map(pokemon => (
              <SugeridosCard
                key={pokemon.id}
                pokemon={pokemon}
                onCapturar={(pokemon) => setColeccion([...coleccion, pokemon])}
                />
            ))}
            </div>
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