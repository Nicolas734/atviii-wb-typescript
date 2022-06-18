import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import { useEffect } from 'react';
import M from 'materialize-css'

export default function Servico(props){
    let estiloBotao = `btn waves-effect  pink lighten-2 button ${props.tema}`
    let estilo = `collection-item active  pink lighten-2 ${props.tema}`

    useEffect(() => { 
        M.AutoInit()
    }, [])

    return (
        <div className="containerServ">
        <h2 className="nomeServ">Escova Progressiva</h2>
            <ul className="collapsible popout">
                {/* Serviços */}
                <li>
                    <div className="collapsible-header"><i className="material-icons">work</i>Serviços</div>
                    <div className="collapsible-body">

                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate"/>
                            <label className="active" htmlFor="textarea1">Descrição do serviço</label>
                        </div>

                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate"/>
                            <label className="active" htmlFor="first_name">Valor do serviço</label>
                        </div>

                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate"/>
                            <label className="active" htmlFor="first_name">Código de identificação</label>
                        </div>

                    </div>
                </li>
            </ul>

            <div className="row">
                <div className="col s12 center">
                    <button className={estiloBotao} type="submit" name="action">Atualizar
                    </button>
                </div>
            </div>

        </div>
    )
}