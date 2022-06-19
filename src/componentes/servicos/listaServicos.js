import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'
import { useEffect } from 'react';
import M from 'materialize-css'
import { Link } from "react-router-dom";


export default function ListaServicos(props){
    let estilo = `collection-item active pink lighten-2 ${props.tema}`

    useEffect(() => { 
        M.AutoInit()
    }, [])

        return (
            <div className="containerServ">

                <div className="input-field col s12 opcao">
                    <select>
                        
                        <option value="">Opções</option>
                        <option value="1">Serviços mais consumidos</option>
                        <option value="2">Serviços mais consumidos (gênero) </option>
                        
                    </select>
                </div>

                <div className="collection">
                    <Link to={"/Servico"} className="collection-item pointer">Serviços 1</Link>
                    <Link to={"/Servico"} className="collection-item pointer">Serviços 2</Link>
                    <Link to={"/Servico"} className="collection-item pointer">Serviços 3</Link>
                    <Link to={"/Servico"} className="collection-item pointer">Serviços 4</Link>
                </div>
            </div>
        )
}