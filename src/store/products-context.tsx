import React, { useState } from "react";
import Product from "../models/product";

//Define o tipo das propriedades do nosso ProductContext
type ProductContextObj = {
    products: Product[],
    onAdd: (product: Product) => void,
    onRemove: (id: string) => void
}

//Cria o nosso ProductContext e coloca um valor inicial para cada uma das propriedades
export const ProductContext = React.createContext<ProductContextObj>({
    products: [],
    onAdd: () => {},
    onRemove: (id: string) => {}
})

//Componente que gerenciará o ProductContext através do state e funções.
const ProductContextProvider: React.FC = (props) => {

    const [products, setProducts] = useState<Product[]>([])

    const addProductHandler = (product: Product) => {
        setProducts((prevProducts) => {
            return prevProducts.concat(product);
        })
    }

    const removeProductHandler = (id: string) => {
        setProducts((prevProducts) => {
            return prevProducts.filter(product => product.id !== id)
        })
    }

    const contextValue: ProductContextObj = {
        products: products,
        onAdd: addProductHandler,
        onRemove: removeProductHandler
    }
    
    //Todos os filhos que estiverem dentro dentro ProductContextProvider terão acesso ao ProductContext por
    //meio do useContext(ProductContext)
    return <ProductContext.Provider value={contextValue}>
        {props.children}
    </ProductContext.Provider>
}

export default ProductContextProvider;