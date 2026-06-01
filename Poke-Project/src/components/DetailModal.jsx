// Santi hace esta parte ✅//
import { useState, useEffect } from "react";


function DetailModal({ pokemon, onCerrar, onEditar, onEliminar }) {

    return (
    <div className="overlay">
        <div className="modal">
            <img className="detail-img" src={pokemon.imagen} alt={pokemon.nombre}/>
            <p className="detail-name">{pokemon.nombre}</p>
            <p className="detail-num">{pokemon.id}</p>
            <p>{pokemon.altura / 10} m - {pokemon.peso / 10} kg</p>
            {pokemon.stats.map((stat) => (
    <div className="stat-row" key={stat.stat.name}>
        <span className="stat-val">{stat.base_stat}</span>
        <div className="stat-bar">
            <div className="stat-fill" style={{ width: `${Math.min(100, Math.round(stat.base_stat / 255 * 100))}%`, background: "#e8503a" }}></div>
        </div>
        <span className="stat-name">{stat.stat.name}</span>
    </div>
))}
            <div className="detail-actions">
                <button className="btn-close" onClick={() => onCerrar()}>Cerrar</button>
                <button className="btn-edit-detail" onClick={() => onEditar(pokemon.id)}>Editar</button>
                <button className="btn-del-detail" onClick={() => onEliminar(pokemon.id)}>Eliminar</button>
            </div>
        </div>
    </div>
)
}

export default DetailModal