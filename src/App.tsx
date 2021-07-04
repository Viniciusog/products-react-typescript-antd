
import Layout from './components/Layout';
import {Redirect, Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import NewProduct from './pages/NewProduct';
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetails"

function App() {
  return (
   <Layout>
     <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>

        <Route path="/new-product" exact>
            <NewProduct />
        </Route>

        {/* Para mostrar /products e /products/:productId juntos, é preciso criar a roa /products/:productId
        dentro da página Products. No nosso caso, não queremos desta forma. */}
        <Route path="/products" exact>
          <Products/>
        </Route>

        <Route path="/products/:productId" exact>
          <ProductDetail/>
        </Route>

        {/* Se tentar acessar uma rota que não existe, então manda para a home */}
        <Route path="*">
          <Redirect to="/" />
        </Route>
     </Switch>
   </Layout>
  );
}

export default App;
