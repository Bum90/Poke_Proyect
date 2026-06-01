// Santi hace esta parte ✅//
import { useState } from "react";

function Header({ onBuscar, totalCapturados  }) {
    const [busqueda, setBusqueda] = useState("");

    return (
        <div className="header">
        <div className="header-inner">
            <div className="Titulo">Mi Pokedex <span>{totalCapturados} capturados</span></div>
            <div className="busqueda">
                <input className="Buscador" placeholder="Busca tu Pokemon (ej: pikachu o 25" onChange={(e) => setBusqueda(e.target.value)} />
                <button className="Buscar-button" onClick={() => onBuscar(busqueda)}>Buscar</button>
            </div>
        </div>
    </div>
    )
}

export default Header