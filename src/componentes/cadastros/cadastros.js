import { Component, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "../cadastros/cadastros.css"
import M from 'materialize-css'

export default function Cadastros(props){
    const estilo = `collection-item active ${props.tema}`
    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);
        M.AutoInit();
    },[]);

    return(
        <div className="containerCadastro">
            <div className="collection">
                <a className="collection-item">Cadastrar Cliente</a>
                <a className="collection-item">Cadastrar Produtos</a>
                <a className="collection-item">Cadastrar Serviços</a>
            </div>
        </div>
    )
}