import { PageHeader } from 'antd';
import React from 'react';
import {useContext} from 'react'
import { PagesContext } from '../store/pages-context';

const Home: React.FC = () => {

    const pagesContext = useContext(PagesContext)
    pagesContext.changeHeaderTitle("Home")
    pagesContext.changeHeaderSubtitle("Welcome back!")

    return (
        <h1>Home</h1>
    )
}

export default Home;