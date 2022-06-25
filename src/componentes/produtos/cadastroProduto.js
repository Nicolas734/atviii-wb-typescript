
import 'materialize-css/dist/css/materialize.min.css';
import "../produtos/cadastroProduto.css";
import { useEffect, useState } from 'react';

export default function CadastroProdutos(){
    return(
        <div className="containerProd">
                <div className="row ">
                    <h4>Cadastro de Produto</h4>
                    <form className="col s12 formProd home">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="first_name2" type="text" />
                                <label htmlFor="first_name2">Nome do produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="descricao" type="text" />
                                <label htmlFor="descricao">Descrição do produto</label>
                            </div>                           
                        </div>

                        <div className="row">

                            <div className="input-field col s6">
                                <input id="valor" type="text" />
                                <label htmlFor="valor">Valor do produto</label>
                            </div>                           
                        </div>
                        
                        <div className="row">
                            <div className="col s12 center">
                                <button className="btn waves-effect  pink lighten-2 button" type="submit" >Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}