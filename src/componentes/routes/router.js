import { Routes,Route } from "react-router-dom";
import Cadastros from "../cadastros/cadastros";
import ListaClientes from "../clientes/listaClientes";
import Cliente from "../clientes/Clientes";
import Produto from "../produtos/produtos";
import Servico from "../servicos/servicos";
import FormularioCadastroCliente from "../clientes/formularioCadastroCliente";
import CadastroProdutos from "../produtos/cadastroProduto";
import CadastroServicos from "../servicos/cadastroServicos";
import ListaProdutos from "../produtos/listaProduto";
import ListaServicos from "../servicos/listaServicos";

export default function Rotas(){
    return(
        <Routes>
            <Route path="/Home" element={<Cadastros tema="purple lighten-4"/>}/>
            <Route path="/" element={<Cadastros tema="purple lighten-4"/>}/>
            <Route path="/Clientes" element={<ListaClientes tema="purple lighten-4"/>}/>
            <Route path="/Produtos" element={<ListaProdutos tema="purple lighten-4"/>}/>
            <Route path="/Servicos" element={<ListaServicos tema="purple lighten-4"/>}/>
            <Route path="/CadastroCliente" element={<FormularioCadastroCliente tema="purple lighten-4"/>} />
            <Route path="/CadastroProduto" element={<CadastroProdutos tema="purple lighten-4"/>}/>
            <Route path="/CadastroServico" element={<CadastroServicos tema="purple lighten-4"/>}/>
            <Route path="/Cliente" element={<Cliente tema="purple lighten-4"/>}/>
            <Route path="/Produto" element={<Produto tema="purple lighten-4"/>}/>
            <Route path="/Servico" element={<Servico tema="purple lighten-4"/>}/>
        </Routes>
    )
}