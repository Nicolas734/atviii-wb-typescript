import 'materialize-css/dist/css/materialize.min.css';
import "../produtos/cadastroProduto.css";
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

export default function AtualizaProduto(props){
    const navigate = useNavigate()
    useEffect(()=>{
    }, []);

    return(
        <div className="containerProd">
                <div className="row ">
                    <h4>Cadastro de Produto</h4>
                    <div className="col s12 formProd">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="Nome_produto"  type="text" className="validate" />
                                <label className='active' for="Nome_produto">Nome Produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Descricao_produto" type="text" className="validate"/>
                                <label className='active' htmlFor="Descricao_produto">Descrição do Produto</label>
                            </div>                           
                        </div>

                        <div className="row">

                            <div className="input-field col s6">
                                <input id="Valor_produto" type="text" className="validate"/>
                                <label className='active' htmlFor="Valor_produto">Valor do Produto</label>
                            </div>                           
                        </div>                        
                        <div className="row">
                            <div className="col s12 center">                                
                                <button className="btn waves-effect waves-light pink lighten-2" type="button"  onClick={ ()=> navigate('/Produtos') }>Atualizar Produto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};