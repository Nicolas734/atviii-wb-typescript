/* eslint-disable jsx-a11y/anchor-is-valid */
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { useEffect } from 'react';

export default function ListaClientes(props) {
    const estilo = `collection-item active ${props.tema}`
        useEffect(() => { 
                M.AutoInit()
        }, [])

    return (

        <div className="containerCli nomeCli ">

            <div className="input-field col s12 opcao">
                <select>
                    <option  value="">Opções</option>
                    <option value="1">10 clientes que mais consumiram (quantidade)</option>
                    <option value="2">Clientes por gênero</option>
                    <option value="3">10 cliente que menos consumiram</option>
                    <option value="4">5 clientes que mais consumiram (valor)</option>
                </select>
            </div>



            <div className="collection">
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
            </div>
        </div>
    )
}