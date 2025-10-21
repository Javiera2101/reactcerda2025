import React, {Fragment, useRef} from "react";
import { PostIt } from "./Post-it";

import { v4 as uuidv4 } from 'uuid';

export function Recordatorios(){

    const [recordatorios, setRecordatorios] = React.useState([]);

    const titulo = useRef();
    const texto = useRef();

    const agregarRecordatorio = () =>{
        const inputrecordatoriotitulo = titulo.current.value;
        const inputrecordatoriotexto = texto.current.value;

        if (inputrecordatoriotitulo === '' || inputrecordatoriotexto === '') return;

        setRecordatorios((prevRecordatorios) => {
            const nuevoRecordatorio = {
                id: uuidv4(),
                titulo: inputrecordatoriotitulo,
                texto: inputrecordatoriotexto,
            }
            titulo.current.value = "";
            texto.current.value = "";
            return [...prevRecordatorios, nuevoRecordatorio];    
        });
    }

    return(
        <Fragment>
            <div className="container mt-5">
                <h1>Post It Simulator!</h1>
            </div>
                

                <div className="container">
                    <div className="form-group d-flex align-items-end gap-3 mb-3">

                    <div className="col-md-5">
                    <input ref={titulo} id="titulo" className="form-control" type="text" placeholder="Título" />
                    </div>

                    <div className="col-md-5">
                    <input ref={texto} id="descripcion" className="form-control" type="text" placeholder="Descripción" />
                    </div>
                    
                    <div className="col-md-2">
                        <button onClick={agregarRecordatorio} className="btn btn-dark">AGREGAR</button>
                    </div>
                </div> 
               
                <div>
                    <ul className="row">
                        {recordatorios.map(PostItActual => ( 
                            <PostIt PostItprops={PostItActual} key={PostItActual.id} />
                        ))}
                    </ul>
                </div>
                </div>
        </Fragment>
    )

}
