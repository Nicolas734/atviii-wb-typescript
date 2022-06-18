import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./clientes/formularioCadastroCliente";
import ListaClientes from "./clientes/listaClientes";
import Cadastro from "./cadastros/cadastros";
import Cliente from "./clientes/Clientes";
import CadastroProdutos from "./produtos/cadastroProduto";
import ListaProduto from "./produtos/listaProduto.js";
import Produto from "./produtos/produtos";
import CadastroServicos from "./servicos/cadastroServicos";
import ListaServicos from "./servicos/listaServicos";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="pink lighten-2" botoes={['Clientes', 'Cadastros']} />
                    <Produto tema="pink lighten-2" />
                </>
            )
        } else {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="pink lighten-2" botoes={['Clientes', 'Cadastros']} />
                    <FormularioCadastroCliente tema="pink lighten-2" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}