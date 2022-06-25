import 'materialize-css/dist/css/materialize.min.css'
import "../pedidos/pedidos.css"
import { useEffect } from 'react';
import M from 'materialize-css';

export default function RealizarPedido(){

    useEffect(() => { 
        M.AutoInit()
    }, [])

    return(
        <div className="containerPed">

            <h2>Pedido de Id</h2>

                <div>
                <h4 className='pedFont'><strong>Produto</strong></h4>
                    <table className='responsive-table centered espacamento-tabela'>
                        <thead>
                        <tr>
                            <th>Id do Pedido</th>
                            <th>Id do Produto</th>
                            <th>Nome do Produto</th>
                            <th>Valor do Produto</th>

                        </tr>
                        </thead>
                        <tbody>


                        <tr>
                           <td><strong>1</strong></td>
                           <td><strong>1</strong></td>
                           <td>Esmalte</td>
                           <td>10.00</td>
                        </tr>                          

                        </tbody>
                    </table>
                </div>

                <div>
                    <h4 className='pedFont'><strong>Serviço</strong></h4>
                    <table className='responsive-table centered espacamento-tabela'>
                            <thead>
                            <tr>
                                <th>Id do Pedido</th>
                                <th>Id do Serviço</th>
                                <th>Nome do Serviço</th>
                                <th>Valor do Serviço</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td><strong>1</strong></td>
                                <td><strong>1</strong></td>
                                <td>Corte de Cabelo</td>
                                <td>15.00</td>
                            </tr>                          

                            </tbody>
                        </table>
                </div>

                <div>
                    <h4 className='pedFont'><strong>Cliente do Pedido</strong></h4>
                    <table className='responsive-table centered espacamento-tabela'>
                            <thead>
                            <tr>
                                <th>Id do Cliente</th>
                                <th>Nome do Cliente</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td><strong>1</strong></td>
                                <td>Nicolas</td>
                                <td>323.773.257-02</td>
                                <td>(22) 90742-9363</td>
                            </tr>                          

                            </tbody>
                        </table>
                </div>

                <button className="btn waves-effect waves-light pink lighten-2 botaoCancela" type="submit" name="action">Cancelar Pedido</button>


        </div>
    )}