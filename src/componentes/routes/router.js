import { Routes,Route } from "react-router-dom";
import Cadastros from "../cadastros/cadastros";
import ListaClientes from "../clientes/listaClientes";
import Produto from "../produtos/produtos";

export default function Rotas(){
    return(
        <Routes>
            <Route path="/Clientes" element={<ListaClientes tema="purple lighten-4"/>} />
            <Route path="/Cadastros" element={<Cadastros tema="purple lighten-4"/>} />
            <Route path="/Teste" element={<Produto tema="purple lighten-4"/>} />
        </Routes>
    )
}