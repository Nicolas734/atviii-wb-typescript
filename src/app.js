import { BrowserRouter } from "react-router-dom"
import BarraNavegacao from "./componentes/barraNavegacao"
import AppRoutes from "./componentes/routes/router"

export const App = () => {
    return(
        <BrowserRouter>
            <BarraNavegacao tema="pink lighten-2" botoes={['Clientes', 'Cadastros', 'Teste']}/>
            <AppRoutes/>
        </BrowserRouter>
    )
}