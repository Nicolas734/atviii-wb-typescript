
import 'materialize-css/dist/css/materialize.min.css'

import "../produtos/cadastroProduto.css"

export default function CadastroProdutos(props){
    let estiloBotao = `btn waves-effect waves-light  pink lighten-2 ${props.tema}`
    return(
        <div className="containerProd">
                <div className="row ">
                    <form className="col s12 formProd">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">Nome do produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">Descrição do produto</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">Categoria do produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">Valor do produto</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">Código de indentificação do produto</label>
                            </div>

                        </div>
                        
                        <div className="row">
                            <div className="col s12 center">
                                <button className={estiloBotao} type="submit" name="action">Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}