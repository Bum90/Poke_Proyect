// Santi hace esta parte ✅//
import { useState } from "react";

function Header({ onBuscar }) {
    const [busqueda, setBusqueda] = useState("");

    return (
        <div>
            <input placeholder="Busca tu Pokemon" onChange={(e) => setBusqueda (e.target.value)} />
            <button onClick={() => onBuscar(busqueda)}>Buscar</button>
        </div>
    )
}

export default Header