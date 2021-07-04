
import React from 'react';
import {useContext} from 'react'
import { PagesContext } from '../store/pages-context';

const Home: React.FC = () => {
    //Quando nós acessamos a rota '/', o react irá renderizar o nosso componente Home. 
    //Feito isso, o código abaixo atualizará o headerTitle e headerSubtitle do nosso PagesContext
    //Quanto o contexto é atualizado, as páginas que possuem 'useContext(PagesContext)' serão recarregadas
    const pagesContext = useContext(PagesContext)
    pagesContext.changeHeaderTitle("Home")
    pagesContext.changeHeaderSubtitle("Welcome back!")

    return ( 
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;