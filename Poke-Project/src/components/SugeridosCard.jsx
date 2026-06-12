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

function SugeridosCard({ pokemon, onCapturar }) {
    return (
        <div className="poke-card">
    <div className="poke-card-top" style={{ background: coloresTipo[pokemon.tipo[0].type.name] || "#f0f0f0" }}>
        <img src={pokemon.imagen} alt={pokemon.nombre} />
    </div>
    <div className="poke-card-body">
        <div className="poke-num">#{pokemon.id}</div>
        <div className="poke-name">{pokemon.nombre}</div>
        <button className="btn-add" onClick={() => onCapturar(pokemon)}>+ Capturar</button>
    </div>
</div>
    )
}

export default SugeridosCard