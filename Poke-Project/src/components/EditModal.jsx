// Tomy hace esta parte ✅//
import { useState} from "react";


function EditModal({pokemon, onGuardar, onCerrar}) {
     const [apodo, setApodo] = useState(pokemon.apodo || "");
     const [nota, setNota] = useState(pokemon.nota || "");
    return (
             <div className="overlay">
               <div className="modal">
                    <h2>Edit Pokemon</h2>
                    <label>APODO</label>
                    <input value={apodo} onChange={(e) => setApodo(e.target.value)} />
                    <label>NOTA</label>
                    <textarea value={nota} onChange={(e) => setNota(e.target.value)}></textarea>
                    <div  className="modal-actions">
                    <button className="btn-save" onClick={() => onGuardar(pokemon.id,{apodo,nota})}>GUARDAR</button>
                    <button className="btn-cancel" onClick={onCerrar}>CERRAR</button>
                    </div>
                </div>
             </div>
    );
 }    
export default EditModal;