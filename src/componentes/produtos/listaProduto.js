import 'materialize-css/dist/css/materialize.min.css';
import "../produtos/cadastroProduto.css";
import { useEffect } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';


export default function ListaProduto(props){
    let estilo = `collection-item active  pink lighten-2 ${props.tema}`

    useEffect(() => { 
        M.AutoInit()
    }, [])

        return (
            <div className="containerProd">
                <div className="input-field col s12 opcao">
                    <select >
                        <option  value="">Opções</option>
                        <option value="1">Produtos mais consumidos</option>
                        <option value="2">Produtos mais consumidos (gênero) </option>
                    </select>
                </div>

                <div className="collection">
                    <Link to={"/produto"} className="collection-item pointer">Produto 1</Link>
                    <Link to={"/produto"} className="collection-item pointer">Produto 2</Link>
                    <Link to={"/produto"} className="collection-item pointer">Produto 3</Link>
                    <Link to={"/produto"} className="collection-item pointer">Produto 4</Link>
                </div>
            </div>
        )
}