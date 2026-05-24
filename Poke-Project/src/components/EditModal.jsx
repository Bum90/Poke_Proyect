// Tomy hace esta parte ✅//
import { useState} from "react";

function EditModal({pokemon, onGuardar, onCerrar}) {
     const [apodo, setApodo] = useState("");
     const [nota, setNota] = useState("");
    return (
             <div className="overlay">
                <div className="modal">
                    <h2>Edit Pokemon</h2>
                    <label>APODO</label>
                    <input onChange={(e) => setApodo(e.target.value)} />
                    <label>NOTA</label>
                    <textarea onChange={(e) => setNota(e.target.value)}></textarea>
                    <div className="buttons">
                    <button onClick={() => onGuardar({apodo,nota})}>GUARDAR</button>
                    <button onClick={onCerrar}>CERRAR</button>
                    </div>
                </div>
             </div>
    );
 }    
export default EditModal;