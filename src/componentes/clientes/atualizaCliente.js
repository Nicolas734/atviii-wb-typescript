import { Component, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "../clientes/cadastroCliente.css"
import M from 'materialize-css'
import { Link, useNavigate } from "react-router-dom";


export default function AtualizaCliente(props){
    const estilo = `collection-item active ${props.tema}`
    const navigate = useNavigate()

    useEffect(()=>{
        M.AutoInit();
    }, []);

    return(
        <div className="containerCli">
                <div className="row ">
                <h4>Atualizar Dados Cliente</h4>
                    <div className="col s12 formCli">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input  id="Nome" type="text" className="validate" />
                                <label className='active' htmlFor="Nome">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Nome_Social" type="text" className="validate" />
                                <label className='active' htmlFor="Nome_Social">Nome social</label>
                            </div>                           
                        </div>

                        <div className="row">
                            
                            <div className="input-field col s6">
                                <input id="Telefone" type="text" className="validate" />
                                <label className='active' htmlFor="Telefone">(DDD) Telefone</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="col s12 center ">
                            <button className="btn waves-effect waves-light pink lighten-2" type="button" onClick={ ()=> navigate('/Clientes') }>Atualizar Cliente
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )}