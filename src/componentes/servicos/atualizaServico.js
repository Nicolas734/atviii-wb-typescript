import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../servicos/cadastroServicos.css'
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

export default function AtualizaServico(props){

    const navigate = useNavigate()
    useEffect(()=>{
    }, []);

    return(
        <div className="containerServ">
                <div className="row ">
                <h4>Cadastro de Serviço</h4>
                    <div className="col s12 formServ ">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="Nome_Servicos" type="text" className="validate"/>
                                <label className="active" htmlFor="Nome_Servicos">Nome do Serviços</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Descricao_servico" type="text" className="validate" />
                                <label className="active" htmlFor="Descricao_servico">Descrição do serviço</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="Valor_Servico" type="text" className="validate"/>
                                <label className="active" htmlFor="Valor_Servico">Valor do Serviço</label>
                            </div>                          
                        </div>

                        <div className="row">
                            <div className="col s12 center">
                                    <button className="btn waves-effect waves-light pink lighten-2" type="button" onClick={ ()=> navigate('/Servicos') }>Atualizar Serviço
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}