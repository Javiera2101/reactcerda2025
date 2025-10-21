import React from "react";
import "../css/style.css"

export function PostIt({PostItprops}){
    return(
        <li className="col-xs-12 m-1 p-3 post-it">
            <div style={{width: '250px', height: '250px%', minHeight: '250px'}}>
                <h2>{PostItprops.titulo}</h2>
                <p>{PostItprops.texto}</p>
            </div>
            <br />
        </li>
        
    )
}