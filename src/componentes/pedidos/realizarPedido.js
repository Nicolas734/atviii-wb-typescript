import 'materialize-css/dist/css/materialize.min.css'
import "../pedidos/pedidos.css"
import { useEffect } from 'react';
import M from 'materialize-css';

export default function RealizarPedido(){

    useEffect(() => { 
        M.AutoInit()
    }, [])

    return(
        <div className='container'>
        <h3 className='title'>Realizar Pedidos</h3>
            <form className="col s12 formCli">
                <div className="row">
                    <div className="input-field col s12 opcoes">
                        <select>
                            <option value="0">Selecione o Cliente</option>
                           
                        </select>
                    </div>
                </div>

                <div className="input-field col s12 opcoes">
                    <select>
                        <option value="0">Selecione o Produto</option>
                       
                    </select>
                </div>

                <div className="input-field col s12 opcoes">
                    <select>
                    <option value="0">Selecione o Serviço</option>
                 
                    </select>
                </div>

                <div className="row">
                    <div className="col s12 center">
                        <button className="btn waves-effect  pink lighten-2 button" type="submit" name="action">Realizar Pedido
                        </button>
                    </div>
                </div>
        </form>
    </div>
    )
}